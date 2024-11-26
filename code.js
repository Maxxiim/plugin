// function load Fonts for Figma
async function loadFonts(fontNames) {
    if (Array.isArray(fontNames)) {
        for (const fontName of fontNames) {
            await figma.loadFontAsync(fontName);
        }
    } else {
        await figma.loadFontAsync(fontNames);
    }
}

figma.showUI(__html__, { width: 400, height: 250 });

let currentHeight = 250;

figma.ui.onmessage = async (msg) => {
    if (msg.type === 'block') {
        if (currentHeight === 250) {
            figma.ui.resize(400, 600);
            currentHeight = 600;
        }
    }

    if (msg.type === 'updateText') {
        const selectedNodes = figma.currentPage.selection;

        if (selectedNodes.length > 0) {
            for (const node of selectedNodes) {
                if (node.type === 'TEXT') {
                    try {
                        await loadFonts(node.fontName);
                        node.characters = msg.content;
                    } catch (error) {
                        figma.notify(`Ошибка загрузки шрифта: ${error.message}`);
                    }
                }
            }
        } else {
            figma.notify("Выберите текстовый объект, чтобы обновить имя.");
        }
    }
};