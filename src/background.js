// Background Script (Service Worker)
console.log('Excel Upload Extension - Background script iniciado');

// Listener para quando a extensão é instalada
chrome.runtime.onInstalled.addListener((details) => {
    console.log('Extensão instalada:', details);

    if (details.reason === 'install') {
        console.log('Primeira instalação da extensão');
    } else if (details.reason === 'update') {
        console.log('Extensão atualizada de', details.previousVersion, 'para', chrome.runtime.getManifest().version);
    }
});

// Listener para mensagens de outros componentes da extensão
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Mensagem recebida no background:', request);

    // Aqui você pode adicionar lógica adicional conforme necessário
    // Por exemplo, armazenar dados, fazer requisições de rede, etc.

    if (request.action === 'storeFileData') {
        // Armazenar dados do arquivo no chrome.storage se necessário
        chrome.storage.local.set({
            lastUploadedFile: {
                name: request.fileName,
                size: request.fileSize,
                timestamp: Date.now()
            }
        }, () => {
            console.log('Dados do arquivo armazenados');
            sendResponse({ success: true });
        });

        return true; // Indica resposta assíncrona
    }

    if (request.action === 'getStoredFileData') {
        chrome.storage.local.get(['lastUploadedFile'], (result) => {
            sendResponse({
                success: true,
                data: result.lastUploadedFile || null
            });
        });

        return true; // Indica resposta assíncrona
    }
});

// Listener para mudanças de abas (opcional)
chrome.tabs.onActivated.addListener((activeInfo) => {
    console.log('Aba ativa mudou para:', activeInfo.tabId);
});

// Listener para atualizações de abas (opcional)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        console.log('Página carregada completamente:', tab.url);
    }
});

// Função auxiliar para obter a aba ativa
async function getActiveTab() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return tab;
}

// Função auxiliar para enviar mensagem para content script
async function sendMessageToActiveTab(message) {
    try {
        const tab = await getActiveTab();
        if (tab) {
            const response = await chrome.tabs.sendMessage(tab.id, message);
            return response;
        } else {
            throw new Error('Nenhuma aba ativa encontrada');
        }
    } catch (error) {
        console.error('Erro ao enviar mensagem para aba ativa:', error);
        throw error;
    }
}

// Exportar funções úteis (se necessário para debug)
globalThis.extensionUtils = {
    getActiveTab,
    sendMessageToActiveTab
};