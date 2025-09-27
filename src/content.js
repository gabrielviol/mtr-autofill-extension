// ===== VARIÁVEIS GLOBAIS =====
let uploadedFileData = null;
let excelData = null;
let fillFormsPaused = false;
let fillFormsStopped = false;

// ===== 🎯 CONFIGURAÇÃO CENTRAL DOS SITES =====
// Para adicionar um novo site, apenas adicione aqui com todas as informações
const SITE_DEFINITIONS = {
    'cetesb': {
        url: 'mtr.cetesb.sp.gov.br',
        hasPopupCleanup: false,
        config: {
            addUserButton: [
                'button:contains("Adicionar Usuário")',
                'button[color="primary"][mat-raised-button]'
            ],
            fields: {
                cpf: ['input[placeholder="CPF"]', 'input[mask="000.000.000-00"]'],
                name: ['input[formcontrolname="paaNome"]', 'input[placeholder="Nome"]'],
                cargo: ['input[formcontrolname="paaCargo"]', 'input[placeholder="Cargo"]', 'input[aria-label="Cargo"]'],
                email: ['input[formcontrolname="paaEmail"]', 'input[placeholder="Email"]'],
                senha: ['input[formcontrolname="paaSenha"]', 'input[placeholder="Senha"]', 'input[id="mat-input-4"]', 'input[type="password"]:first-of-type'],
                confirmaSenha: ['input[formcontrolname="paaConfirmaSenha"]', 'input[placeholder="Confirma Senha"]', 'input[id="mat-input-5"]', 'input[type="password"]:last-of-type'],
            },
            submitButton: [
                'button:contains("Salvar")',
                'button.btn.mat-raised-button.mat-primary'
            ]
        }
    },
    'fepam': {
        url: 'mtr.fepam.rs.gov.br',
        hasPopupCleanup: true,
        config: {
            addUserButton: [
                'a:contains("Adicionar Usuário")',
                'a[id="linkAddUsuario"]'
            ],
            fields: {
                cpf: ['input[id="txtCpfUsuario"]', 'input[nomecampo="CPF"]'],
                name: ['input[id="txtNomeUsuario"]', 'input[nomecampo="Nome"]'],
                cargo: ['input[id="txtCargoUsuario"]', 'input[nomecampo="Cargo"]'],
                email: ['input[id="txtEmailUsuario"]', 'input[nomecampo="E-mail"]'],
                senha: ['input[id="txtSenhaUsuario"]', 'input[nomecampo="Senha"]'],
                confirmaSenha: ['input[id="txtSenhaUsuarioRepetir"]', 'input[nomecampo="RepetirSenha"]'],
            },
            submitButton: [
                'button:contains("Salvar")',
                'button.btn.mat-raised-button.mat-primary'
            ],
            closeSuccessPopup: {
                enabled: true,
                selectors: [
                    'button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-icon-only.ui-dialog-titlebar-close',
                    'button.ui-dialog-titlebar-close',
                    '.ui-button.ui-dialog-titlebar-close',
                    'button[title="close"]',
                    'button[role="button"][title="close"]',
                    '.ui-dialog-titlebar-close'
                ]
            }
        }
    },
    'ima': {
        url: 'mtr.ima.sc.gov.br',
        hasPopupCleanup: true,
        config: {
            addUserButton: [
                'a:contains("Adicionar Usuário")',
                'a[id="linkAddUsuario"]'
            ],
            fields: {
                cpf: ['input[id="txtCpfUsuario"]', 'input[nomecampo="CPF"]'],
                name: ['input[id="txtNomeUsuario"]', 'input[nomecampo="Nome"]'],
                cargo: ['input[id="txtCargoUsuario"]', 'input[nomecampo="Cargo"]'],
                email: ['input[id="txtEmailUsuario"]', 'input[nomecampo="E-mail"]'],
                senha: ['input[id="txtSenhaUsuario"]', 'input[nomecampo="Senha"]'],
                confirmaSenha: ['input[id="txtSenhaUsuarioRepetir"]', 'input[nomecampo="RepetirSenha"]'],
            },
            submitButton: [
                'button:contains("Salvar")',
                'button.btn.mat-raised-button.mat-primary'
            ],
            closeSuccessPopup: {
                enabled: true,
                selectors: [
                    'button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-icon-only.ui-dialog-titlebar-close',
                    'button.ui-dialog-titlebar-close',
                    '.ui-button.ui-dialog-titlebar-close',
                    'button[title="close"]',
                    'button[role="button"][title="close"]',
                    '.ui-dialog-titlebar-close'
                ]
            }
        }
    },
    'inea': {
        url: 'mtr.inea.rj.gov.br',
        hasPopupCleanup: true,
        config: {
            addUserButton: [
                'a:contains("Adicionar Usuário")',
                'a[id="linkAddUsuario"]'
            ],
            fields: {
                cpf: ['input[id="txtCpfUsuario"]', 'input[nomecampo="CPF"]'],
                name: ['input[id="txtNomeUsuario"]', 'input[nomecampo="Nome"]'],
                cargo: ['input[id="txtCargoUsuario"]', 'input[nomecampo="Cargo"]'],
                email: ['input[id="txtEmailUsuario"]', 'input[nomecampo="E-mail"]'],
                senha: ['input[id="txtSenhaUsuario"]', 'input[nomecampo="Senha"]'],
                confirmaSenha: ['input[id="txtSenhaUsuarioRepetir"]', 'input[nomecampo="RepetirSenha"]'],
            },
            submitButton: [
                'button:contains("Salvar")',
                'button.btn.mat-raised-button.mat-primary'
            ],
            closeSuccessPopup: {
                enabled: true,
                selectors: [
                    'button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-icon-only.ui-dialog-titlebar-close',
                    'button.ui-dialog-titlebar-close',
                    '.ui-button.ui-dialog-titlebar-close',
                    'button[title="close"]',
                    'button[role="button"][title="close"]',
                    '.ui-dialog-titlebar-close'
                ]
            }
        }
    },
    'feam': {
        url: 'mtr.meioambiente.mg.gov.br',
        hasPopupCleanup: true,
        config: {
            addUserButton: [
                'a[id="linkAddUsuario"]'
            ],
            fields: {
                cpf: ['input[id="txtCpfUsuario"]', 'input[nomecampo="CPF"]'],
                name: ['input[id="txtNomeUsuario"]', 'input[nomecampo="Nome"]'],
                cargo: ['input[id="txtCargoUsuario"]', 'input[nomecampo="Cargo"]'],
                email: ['input[id="txtEmailUsuario"]', 'input[nomecampo="E-mail"]'],
                senha: ['input[id="txtSenhaUsuario"]', 'input[nomecampo="Senha"]'],
                confirmaSenha: ['input[id="txtSenhaUsuarioRepetir"]', 'input[nomecampo="RepetirSenha"]'],
            },
            submitButton: [
                'button:contains("Salvar")',
                'button.btn.mat-raised-button.mat-primary'
            ],
            closeSuccessPopup: {
                enabled: true,
                selectors: [
                    'button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-icon-only.ui-dialog-titlebar-close',
                    'button.ui-dialog-titlebar-close',
                    '.ui-button.ui-dialog-titlebar-close',
                    'button[title="close"]',
                    'button[role="button"][title="close"]',
                    '.ui-dialog-titlebar-close'
                ]
            }
        }
    },

    'iema': {
        url: 'mtr.iema.es.gov.br',
        hasPopupCleanup: true,
        config: {
            addUserButton: [
                'a[id="linkAddUsuario"]'
            ],
            fields: {
                cpf: ['input[id="txtCpfUsuario"]', 'input[nomecampo="CPF"]'],
                name: ['input[id="txtNomeUsuario"]', 'input[nomecampo="Nome"]'],
                cargo: ['input[id="txtCargoUsuario"]', 'input[nomecampo="Cargo"]'],
                email: ['input[id="txtEmailUsuario"]', 'input[nomecampo="E-mail"]'],
                senha: ['input[id="txtSenhaUsuario"]', 'input[nomecampo="Senha"]'],
                confirmaSenha: ['input[id="txtSenhaUsuarioRepetir"]', 'input[nomecampo="RepetirSenha"]'],
            },
            submitButton: [
                'button:contains("Salvar")',
                'button.btn.mat-raised-button.mat-primary'
            ],
            closeSuccessPopup: {
                enabled: true,
                selectors: [
                    'button.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-icon-only.ui-dialog-titlebar-close',
                    'button.ui-dialog-titlebar-close',
                    '.ui-button.ui-dialog-titlebar-close',
                    'button[title="close"]',
                    'button[role="button"][title="close"]',
                    '.ui-dialog-titlebar-close'
                ]
            }
        }
    },

    'sinir': {
        url: 'mtr.sinir.gov.br',
        hasPopupCleanup: false,
        config: {
            addUserButton: [
                'button:contains("Adicionar Usuário")',
                'button[color="primary"][mat-raised-button]'
            ],
            fields: {
                cpf: ['input[placeholder="CPF"]', 'input[mask="000.000.000-00"]'],
                name: ['input[formcontrolname="paaNome"]', 'input[placeholder="Nome"]'],
                cargo: ['input[formcontrolname="paaCargo"]', 'input[placeholder="Cargo"]', 'input[aria-label="Cargo"]'],
                email: ['input[formcontrolname="paaEmail"]', 'input[placeholder="Email"]'],
                senha: ['input[formcontrolname="paaSenha"]', 'input[type="password"]:first-of-type'],
                confirmaSenha: ['input[formcontrolname="paaConfirmaSenha"]', 'input[type="password"]:last-of-type']
            },
            submitButton: [
                'button:contains("Salvar")',
                'button.btn.mat-raised-button.mat-primary'
            ]
        }
    }
};

// ===== DETECÇÃO AUTOMÁTICA DE SITES =====
const currentURL = window.location.href;
let currentSiteInfo = null;

for (const [siteName, siteData] of Object.entries(SITE_DEFINITIONS)) {
    if (currentURL.includes(siteData.url)) {
        currentSiteInfo = { name: siteName, ...siteData };
        break;
    }
}

console.log("Extension loaded", currentSiteInfo ? `- Site: ${currentSiteInfo.name}` : '- Site não reconhecido');

// ===== FUNÇÕES AUXILIARES =====
function getCurrentSite() {
    return currentSiteInfo?.name || null;
}

// Funções de segurança
function sanitizeString(str) {
    if (typeof str !== 'string') return '';
    // Remove caracteres perigosos e limita tamanho
    return str.replace(/[<>:"/\\|?*\x00-\x1f]/g, '_').substring(0, 255);
}

function generateSimpleChecksum(dataArray) {
    if (!Array.isArray(dataArray)) return 0;
    let checksum = 0;
    for (let i = 0; i < Math.min(dataArray.length, 1000); i++) {
        checksum = (checksum + (dataArray[i] || 0)) % 65536;
    }
    return checksum;
}

function isValidFormData(data) {
    if (!data || typeof data !== 'object') return false;

    // Validar campos obrigatórios
    const requiredFields = ['cpf', 'name', 'email'];
    for (const field of requiredFields) {
        if (!data[field] || typeof data[field] !== 'string') {
            return false;
        }
    }

    // Validar CPF básico (apenas números e tamanho)
    const cpfNumbers = data.cpf.replace(/\D/g, '');
    if (cpfNumbers.length !== 11) return false;

    // Validar email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) return false;

    return true;
}

function needsPopupCleanup(site) {
    return SITE_DEFINITIONS[site]?.hasPopupCleanup || false;
}

// Função de segurança para validar se estamos em um site MTR oficial
function isValidMTRSite() {
    const currentHost = window.location.hostname;
    const validMTRHosts = [
        'mtr.cetesb.sp.gov.br',
        'mtr.fepam.rs.gov.br',
        'mtr.ima.sc.gov.br',
        'mtr.sinir.gov.br',
        'mtr.inea.rj.gov.br',
        'mtr.meioambiente.mg.gov.br',
        'mtr.iema.es.gov.br'
    ];

    return validMTRHosts.includes(currentHost);
}

// Extrair configurações para compatibilidade
const siteConfigs = {};
Object.entries(SITE_DEFINITIONS).forEach(([name, data]) => {
    siteConfigs[name] = data.config;
});

// ===== GESTÃO DE POPUP PARA SITES COM msgSalva =====
function handlePopupCleanup(site) {
    // Validar se o site é confiável antes de qualquer operação
    if (!isValidMTRSite()) {
        console.warn('🔒 Site não reconhecido como MTR oficial - operação cancelada');
        return;
    }

    if (window.location.href.includes('msgSalva=')) {
        console.log(`🔧 ${site}: Detectado parâmetro msgSalva na URL inicial, removendo...`);

        // Usar history.replaceState em vez de window.location.href para evitar redirecionamento
        try {
            const url = new URL(window.location.href);
            url.searchParams.delete('msgSalva');

            // Método seguro: usar history API em vez de redirecionamento
            window.history.replaceState({}, document.title, url.toString());
            console.log('✅ Parâmetro msgSalva removido com segurança da URL');
        } catch (error) {
            console.error('❌ Erro ao remover parâmetro msgSalva:', error);
        }
        return;
    }

    // Restaurar estado após reload
    const savedState = localStorage.getItem(`${site.toLowerCase()}_cadastro_state`);
    if (savedState) {
        console.log(`🔄 ${site}: Restaurando estado de cadastro após reload...`);
        const state = JSON.parse(savedState);

        // Restaurar dados
        excelData = state.excelData;
        uploadedFileData = state.uploadedFileData;

        // Continuar processamento do próximo item
        setTimeout(() => {
            console.log(`🔄 Continuando cadastro do item ${state.currentIndex + 1}/${state.excelData.length}`);
            continueProcessingFromIndex(state.currentIndex + 1);
        }, 1000);
    }
}

// Aplicar popup cleanup se necessário
if (currentSiteInfo && currentSiteInfo.hasPopupCleanup) {
    handlePopupCleanup(currentSiteInfo.name.toUpperCase());
}

// ===== OBSERVERS PARA MUDANÇAS DE URL =====
function setupUrlObserver(site) {
    // Validar se o site é confiável
    if (!isValidMTRSite()) {
        console.warn('🔒 Observer não configurado - site não reconhecido como MTR oficial');
        return;
    }

    let lastUrl = location.href;
    new MutationObserver(() => {
        const currentUrl = location.href;
        if (currentUrl !== lastUrl) {
            lastUrl = currentUrl;
            if (currentUrl.includes('msgSalva=')) {
                console.log(`🔧 ${site}: URL mudou com msgSalva, removendo...`);
                setTimeout(() => {
                    try {
                        // Usar history API em vez de redirecionamento direto
                        const url = new URL(window.location.href);
                        url.searchParams.delete('msgSalva');
                        window.history.replaceState({}, document.title, url.toString());
                        console.log('✅ Parâmetro msgSalva removido com segurança via observer');
                    } catch (error) {
                        console.error('❌ Erro no observer ao remover msgSalva:', error);
                    }
                }, 500);
            }
        }
    }).observe(document, { subtree: true, childList: true });
}

// Configurar observer se necessário
if (currentSiteInfo && currentSiteInfo.hasPopupCleanup) {
    setupUrlObserver(currentSiteInfo.name.toUpperCase());
}


// ===== EVENT LISTENERS =====
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'processFileAndClick') {
        handleFileProcessAndClick(request)
            .then(result => sendResponse(result))
            .catch(error => sendResponse({ success: false, error: error.message }));
        return true;
    }

    if (request.action === 'pauseFillForms') {
        fillFormsPaused = true;
        sendResponse({ success: true });
    } else if (request.action === 'resumeFillForms') {
        fillFormsPaused = false;
        sendResponse({ success: true });
    } else if (request.action === 'stopFillForms') {
        fillFormsStopped = true;
        sendResponse({ success: true });
    }
});

// ===== FUNÇÕES PRINCIPAIS =====
async function handleFileProcessAndClick(request) {
    try {
        // Validações de segurança
        if (!request.fileName || !request.fileData || !Array.isArray(request.fileData)) {
            throw new Error('Dados do arquivo inválidos ou corrompidos');
        }

        // Validar tamanho do arquivo
        if (request.fileData.length > 10 * 1024 * 1024) { // 10MB max
            throw new Error('Arquivo muito grande');
        }

        // Validar timestamp (deve ser recente)
        if (request.timestamp && (Date.now() - request.timestamp > 60000)) { // 1 minuto max
            throw new Error('Dados do arquivo expirados');
        }

        // Validar checksum se fornecido
        if (request.checksum && generateSimpleChecksum(request.fileData) !== request.checksum) {
            throw new Error('Integridade do arquivo comprometida');
        }

        uploadedFileData = {
            name: sanitizeString(request.fileName),
            data: new Uint8Array(request.fileData),
            size: request.fileSize,
            uploadTime: new Date().toISOString(),
            validated: true
        };

        try {
            await waitForSheetJS();
            const workbook = XLSX.read(uploadedFileData.data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            excelData = XLSX.utils.sheet_to_json(worksheet);
        } catch (error) {
            excelData = [
                { cpf: '12345678901', name: 'João Silva', cargo: 'Desenvolvedor', email: 'joao@email.com' },
                { cpf: '98765432109', name: 'Maria Santos', cargo: 'Analista', email: 'maria@email.com' }
            ];
        }

        const button = findAddUserButton();
        if (!button) {
            throw new Error('Botão "Adicionar Usuário" não encontrado na página');
        }

        clickButton(button);
        await sleep(500);

        if (excelData && excelData.length > 0) {
            setTimeout(() => fillFormsWithExcelData(), 500);
        }

        return {
            success: true,
            message: 'Arquivo processado e botão clicado com sucesso',
            recordsCount: excelData ? excelData.length : 0,
            fileInfo: {
                name: uploadedFileData.name,
                size: uploadedFileData.size,
                uploadTime: uploadedFileData.uploadTime
            }
        };

    } catch (error) {
        return { success: false, error: error.message };
    }
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


function findAddUserButton() {
    const currentSite = getCurrentSite();

    if (currentSite && siteConfigs[currentSite]) {
        const selectors = siteConfigs[currentSite].addUserButton;
        for (const selector of selectors) {
            let button = null;

            if (selector.includes(':contains(')) {
                const text = selector.match(/:contains\(\"([^\"]+)\"\)/)?.[1];
                if (text) {
                    button = Array.from(document.querySelectorAll('button, a')).find(btn => btn.textContent.includes(text));
                }
            } else {
                button = document.querySelector(selector);
            }

            if (button) return button;
        }
    }

    // Fallback
    return Array.from(document.querySelectorAll('button, a')).find(btn => btn.textContent.includes('Adicionar Usuário')) ||
        document.querySelector('button[color="primary"][mat-raised-button]');
}

function clickButton(button) {
    button.click();
}

async function waitForSheetJS() {
    if (typeof XLSX !== 'undefined') return;

    let attempts = 0;
    while (typeof XLSX === 'undefined' && attempts < 10) {
        await sleep(100);
        attempts++;
    }

    if (typeof XLSX === 'undefined') {
        throw new Error('SheetJS não está disponível');
    }
}

async function fillFormsWithExcelData() {
    await continueProcessingFromIndex(0);
}

// Função auxiliar para aguardar durante pausa
async function waitForResumeOrStop() {
    let pauseWaitTime = 0;
    const maxPauseWaitTime = 120000; // 2 minutos
    const checkInterval = 500;

    // Loop com condição de saída garantida baseada em tempo
    while (pauseWaitTime < maxPauseWaitTime) {
        // Verificar condições de parada primeiro
        if (!fillFormsPaused || fillFormsStopped) {
            break; // Sair se não estiver pausado ou se foi parado
        }

        // Verificação de dados perdidos
        if (!excelData || excelData.length === 0) {
            console.warn('⚠️ Dados perdidos durante pausa - parando processamento');
            fillFormsStopped = true;
            break;
        }

        await sleep(checkInterval);
        pauseWaitTime += checkInterval;

        // Log de debug
        if (pauseWaitTime % 10000 === 0) {
            console.log(`⏸️ Processamento pausado há ${pauseWaitTime / 1000} segundos...`);
        }
    }

    // Timeout check - se chegou ao limite de tempo
    if (pauseWaitTime >= maxPauseWaitTime && fillFormsPaused) {
        console.warn('⚠️ Timeout aguardando retomada - parando processamento');
        fillFormsStopped = true;
    }
}

// Função auxiliar para verificar se deve parar o processamento
function shouldStopProcessing() {
    if (fillFormsStopped) {
        const currentSite = getCurrentSite();
        if (needsPopupCleanup(currentSite)) {
            localStorage.removeItem(`${currentSite}_cadastro_state`);
        }
        console.log('🛑 Processamento interrompido pelo usuário ou timeout');
        return true;
    }
    return false;
}

// Função auxiliar para salvar estado atual
function saveCurrentState(index) {
    const currentSite = getCurrentSite();
    if (needsPopupCleanup(currentSite)) {
        const state = {
            excelData,
            uploadedFileData,
            currentIndex: index
        };
        localStorage.setItem(`${currentSite}_cadastro_state`, JSON.stringify(state));
    }
}

// Função auxiliar para preparar próximo formulário
async function prepareNextForm(isLastRecord) {
    if (!isLastRecord) {
        await sleep(1000);
        const addUserButton = findAddUserButton();
        if (addUserButton) {
            clickButton(addUserButton);
            await sleep(1000);
        } else {
            console.error('❌ BOTÃO ADICIONAR USUÁRIO NÃO ENCONTRADO!');
        }
    } else {
        // Último registro - limpar estado
        const currentSite = getCurrentSite();
        if (needsPopupCleanup(currentSite)) {
            localStorage.removeItem(`${currentSite}_cadastro_state`);
        }
    }
}

// Função principal refatorada
async function continueProcessingFromIndex(startIndex) {
    if (!excelData || excelData.length === 0) return;

    fillFormsStopped = false;
    fillFormsPaused = false;

    for (let i = startIndex; i < excelData.length; i++) {
        await waitForResumeOrStop();

        if (shouldStopProcessing()) {
            break;
        }

        const record = excelData[i];

        try {
            saveCurrentState(i);

            const formData = mapExcelToFormFields(record);

            if (!isValidFormData(formData)) {
                console.error(`❌ Dados inválidos no registro ${i + 1}:`, formData);
                continue;
            }

            await fillAndSubmitForm(formData, i + 1);
            await prepareNextForm(i === excelData.length - 1);

        } catch (error) {
            console.error(`❌ ERRO no registro ${i + 1}:`, error);
        }
    }
}

async function closeSuccessPopup() {
    const currentSite = getCurrentSite();

    if (!currentSite || !siteConfigs[currentSite] || !siteConfigs[currentSite].closeSuccessPopup?.enabled) {
        return false;
    }

    // Para sites com popup cleanup, aguardar mais tempo pois a página pode estar recarregando
    if (needsPopupCleanup(currentSite)) {
        console.log(`🔧 ${currentSite.toUpperCase()}: Aguardando página estabilizar...`);
        await sleep(2000);

        if (window.location.href.includes('msgSalva=')) {
            console.log('🔧 Removendo parâmetro msgSalva da URL para fechar popup');
            const url = new URL(window.location.href);
            url.searchParams.delete('msgSalva');
            window.history.replaceState({}, document.title, url.toString());
            console.log('✅ Popup fechado via remoção de parâmetro URL');
            await sleep(1000);
            return true;
        }
    }

    // Fallback para outros métodos
    const config = siteConfigs[currentSite].closeSuccessPopup;
    await sleep(500);

    for (const selector of config.selectors) {
        const closeButton = document.querySelector(selector);
        if (closeButton && closeButton.offsetParent !== null) {
            console.log(`🔔 Fechando popup com seletor: ${selector}`);
            closeButton.click();
            await sleep(300);
            return true;
        }
    }

    return false;
}

function mapExcelToFormFields(record) {
    const currentSite = getCurrentSite();
    const formData = {};

    // Usar campos do site específico ou fallback
    let fields = ['cpf', 'name', 'cargo', 'email', 'senha', 'confirmaSenha'];

    if (currentSite && siteConfigs[currentSite] && siteConfigs[currentSite].fields) {
        fields = Object.keys(siteConfigs[currentSite].fields);
    }

    fields.forEach(field => {
        if (record[field] !== undefined && record[field] !== null && record[field] !== '') {
            formData[field] = record[field].toString();
        }
    });

    // Se não tem senha no Excel, usa valor padrão (apenas se o site tiver campos de senha)
    if (fields.includes('senha') && !formData.senha) {
        formData.senha = '123456';
        formData.confirmaSenha = '123456';
    }

    return formData;
}

function getFieldSelectors(fieldName) {
    const currentSite = getCurrentSite();

    // Se for um site configurado e tiver campos específicos, usa eles
    if (currentSite && siteConfigs[currentSite] && siteConfigs[currentSite].fields[fieldName]) {
        return siteConfigs[currentSite].fields[fieldName];
    }

    // Fallback para os seletores originais (SINIR)
    const selectorMap = {
        cpf: ['input[placeholder="CPF"]', 'input[mask="000.000.000-00"]'],
        name: ['input[formcontrolname="paaNome"]', 'input[placeholder="Nome"]'],
        cargo: ['input[formcontrolname="paaCargo"]', 'input[placeholder="Cargo"]', 'input[aria-label="Cargo"]'],
        email: ['input[formcontrolname="paaEmail"]', 'input[placeholder="Email"]'],
        senha: ['input[formcontrolname="paaSenha"]', 'input[type="password"]:first-of-type'],
        confirmaSenha: ['input[formcontrolname="paaConfirmaSenha"]', 'input[type="password"]:last-of-type']
    };

    return selectorMap[fieldName] || [`input[name="${fieldName}"]`, `input[placeholder*="${fieldName}"]`];
}

function findField(fieldName) {
    const selectors = getFieldSelectors(fieldName);
    for (const selector of selectors) {
        const field = document.querySelector(selector);
        if (field) return field;
    }
    return null;
}

function fillField(field, value, fieldName) {
    if (field.type === 'checkbox' || field.type === 'radio') {
        field.checked = Boolean(value);
    } else {
        field.focus();
        field.value = '';
        field.value = value;

        if (fieldName === 'cpf' && field.hasAttribute('mask')) {
            const cpfNumbers = value.replace(/\D/g, '');
            field.value = '';
            for (let i = 0; i < cpfNumbers.length; i++) {
                field.value += cpfNumbers[i];
                field.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }
    }

    ['input', 'change', 'blur', 'keyup'].forEach(eventType => {
        field.dispatchEvent(new Event(eventType, { bubbles: true }));
    });
}

// Função auxiliar para preencher todos os campos do formulário
function fillFormFields(formData) {
    Object.keys(formData).forEach(fieldName => {
        const value = formData[fieldName];
        const field = findField(fieldName);

        if (field) {
            fillField(field, value, fieldName);
        } else {
            console.warn(`⚠️ Campo ${fieldName} NÃO encontrado!`);
        }
    });
}

// Função auxiliar para encontrar botão submit com seletores específicos do site
function findSubmitButtonBySite(currentSite) {
    if (!currentSite || !siteConfigs[currentSite] || !siteConfigs[currentSite].submitButton) {
        return null;
    }

    const selectors = siteConfigs[currentSite].submitButton;
    for (const selector of selectors) {
        let button = null;

        if (selector.includes(':contains(')) {
            const text = selector.match(/:contains\(\"([^\"]+)\"\)/)?.[1];
            if (text) {
                button = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent.includes(text));
            }
        } else {
            button = document.querySelector(selector);
        }

        if (button) return button;
    }

    return null;
}

// Função auxiliar para encontrar botão submit com fallback
function findSubmitButton() {
    const currentSite = getCurrentSite();

    // Tentar seletores específicos do site primeiro
    let submitButton = findSubmitButtonBySite(currentSite);

    // Fallback para método original
    if (!submitButton) {
        submitButton = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent.includes('Salvar')) ||
            document.querySelector('button.btn.mat-raised-button.mat-primary');
    }

    return submitButton;
}

// Função auxiliar para executar submissão do formulário
async function executeFormSubmission(submitButton) {
    try {
        if (submitButton.disabled) {
            await sleep(500);
        }

        clickButton(submitButton);
        await sleep(2000); // Aguardar modal fechar
        await closeSuccessPopup();
        await sleep(500);

    } catch (clickError) {
        console.error('❌ ERRO ao clicar SALVAR:', clickError);
        throw clickError;
    }
}

// Função principal refatorada
async function fillAndSubmitForm(formData, recordNumber) {
    // Preencher campos do formulário
    fillFormFields(formData);
    await sleep(1000);

    // Encontrar botão de submissão
    const submitButton = findSubmitButton();

    if (submitButton) {
        await executeFormSubmission(submitButton);
    } else {
        console.error('❌ BOTÃO SALVAR NÃO ENCONTRADO!');
        throw new Error('Botão Salvar não encontrado');
    }
}

// ===== FUNÇÕES EXPOSTAS GLOBALMENTE =====
window.getUploadedFileData = () => uploadedFileData;
window.getExcelData = () => excelData;
window.pauseFillForms = () => fillFormsPaused = true;
window.resumeFillForms = () => fillFormsPaused = false;