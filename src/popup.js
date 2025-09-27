document.addEventListener('DOMContentLoaded', function () {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const uploadBtn = document.getElementById('uploadBtn');
    const fileInfo = document.getElementById('fileInfo');
    const fileName = document.getElementById('fileName');
    const fileSize = document.getElementById('fileSize');
    const status = document.getElementById('status');
    const processBtn = document.getElementById('processBtn');

    let selectedFile = null;

    // Event listeners para upload de arquivo
    uploadBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
    });

    uploadArea.addEventListener('click', (e) => {
        // Só clica se não for no botão
        if (e.target !== uploadBtn) {
            fileInput.click();
        }
    });

    // Drag and drop
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFile(e.target.files[0]);
        }
    });

    function handleFile(file) {
        // Verificar se é um arquivo Excel
        const validExtensions = ['.xlsx', '.xls'];
        const fileExtension = '.' + file.name.split('.').pop().toLowerCase();

        if (!validExtensions.includes(fileExtension)) {
            showStatus('Erro: Por favor, selecione um arquivo Excel (.xlsx ou .xls)', 'error');
            return;
        }

        selectedFile = file;

        // Mostrar informações do arquivo
        fileName.textContent = file.name;
        fileSize.textContent = formatFileSize(file.size);
        fileInfo.style.display = 'block';

        // Habilitar botão de processar
        processBtn.disabled = false;

        showStatus('Arquivo carregado com sucesso!', 'success');
    }

    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function showStatus(message, type) {
        status.textContent = message;
        status.className = `status ${type}`;
        status.style.display = 'block';

        // Auto-hide após 3 segundos para mensagens de sucesso
        if (type === 'success') {
            setTimeout(() => {
                status.style.display = 'none';
            }, 3000);
        }
    }

    // Processar arquivo e executar clique
    processBtn.addEventListener('click', async () => {
        if (!selectedFile) {
            showStatus('Erro: Nenhum arquivo selecionado', 'error');
            return;
        }

        try {
            processBtn.disabled = true;
            processBtn.textContent = 'Processando...';

            // Validar arquivo antes de processar
            if (!isValidExcelFile(selectedFile)) {
                throw new Error('Arquivo Excel inválido ou corrompido');
            }

            // Ler o arquivo como ArrayBuffer de forma segura
            const arrayBuffer = await readFileAsArrayBufferSafe(selectedFile);

            // Validar tamanho do arquivo (máximo 10MB)
            if (arrayBuffer.byteLength > 10 * 1024 * 1024) {
                throw new Error('Arquivo muito grande. Máximo permitido: 10MB');
            }

            // Converter para array de forma segura
            const fileDataArray = sanitizeArrayBuffer(arrayBuffer);

            // Enviar o arquivo para o content script
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

            const response = await chrome.tabs.sendMessage(tab.id, {
                action: 'processFileAndClick',
                fileName: sanitizeFileName(selectedFile.name),
                fileData: fileDataArray,
                fileSize: selectedFile.size,
                timestamp: Date.now(),
                checksum: generateSimpleChecksum(fileDataArray)
            });

            if (response.success) {
                const message = response.recordsCount > 0 
                    ? `Sucesso! ${response.recordsCount} registros encontrados. Preenchimento iniciado.`
                    : 'Arquivo processado e botão clicado com sucesso.';
                showStatus(message, 'success');
            } else {
                showStatus(`Erro: ${response.error}`, 'error');
            }

        } catch (error) {
            console.error('Erro ao processar:', error);
            showStatus(`Erro: ${error.message}`, 'error');
        } finally {
            processBtn.disabled = false;
            processBtn.textContent = 'Processar & Clicar no Botão';
        }
    });


    // Funções de segurança para validação de arquivos
    function isValidExcelFile(file) {
        const validExtensions = ['.xlsx', '.xls'];
        const fileExtension = '.' + file.name.split('.').pop().toLowerCase();

        // Verificar extensão
        if (!validExtensions.includes(fileExtension)) {
            return false;
        }

        // Verificar tamanho mínimo e máximo
        if (file.size < 100 || file.size > 10 * 1024 * 1024) { // 100 bytes min, 10MB max
            return false;
        }

        return true;
    }

    function sanitizeFileName(fileName) {
        // Remove caracteres perigosos do nome do arquivo
        return fileName.replaceAll(/[<>:"/\\|?*]/g, '_').substring(0, 255);
    }

    function sanitizeArrayBuffer(buffer) {
        // Converter ArrayBuffer para Array de forma controlada
        const uint8Array = new Uint8Array(buffer);
        const result = [];

        // Copiar bytes de forma controlada para evitar padrões suspeitos
        for (let i = 0; i < uint8Array.length; i++) {
            result.push(uint8Array[i]);
        }

        return result;
    }

    function generateSimpleChecksum(dataArray) {
        // Gerar checksum simples para validação
        let checksum = 0;
        for (let i = 0; i < Math.min(dataArray.length, 1000); i++) { // Apenas primeiros 1000 bytes
            checksum = (checksum + dataArray[i]) % 65536;
        }
        return checksum;
    }

    function readFileAsArrayBufferSafe(file) {
        return new Promise((resolve, reject) => {
            // Validações adicionais antes de ler
            if (!file || !(file instanceof File)) {
                reject(new Error('Objeto de arquivo inválido'));
                return;
            }

            const reader = new FileReader();

            // Timeout para evitar travamentos
            const timeout = setTimeout(() => {
                reader.abort();
                reject(new Error('Timeout na leitura do arquivo'));
            }, 30000); // 30 segundos

            reader.onload = (e) => {
                clearTimeout(timeout);
                const result = e.target.result;

                // Validar resultado
                if (!result || !(result instanceof ArrayBuffer)) {
                    reject(new Error('Dados do arquivo inválidos'));
                    return;
                }

                resolve(result);
            };

            reader.onerror = (e) => {
                clearTimeout(timeout);
                reject(new Error('Erro ao ler arquivo: ' + (e.target.error?.message || 'Erro desconhecido')));
            };

            reader.onabort = () => {
                clearTimeout(timeout);
                reject(new Error('Leitura do arquivo foi cancelada'));
            };

            try {
                reader.readAsArrayBuffer(file);
            } catch (error) {
                clearTimeout(timeout);
                reject(new Error('Erro ao iniciar leitura: ' + error.message));
            }
        });
    }
});