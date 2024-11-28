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
            figma.ui.resize(430, 600);
            currentHeight = 600;
        }
    }

    if (msg.type === 'updateText') {
        const selectedNodes = figma.currentPage.selection;

        if (selectedNodes.length > 0) {
            const generatedTexts = new Set();

            for (const node of selectedNodes) {
                if (node.type === 'TEXT') {
                    try {
                        if (node.fontName && typeof node.fontName === 'object') {
                            await figma.loadFontAsync(node.fontName);
                        } else {
                            console.error('fontName не найден или имеет неправильный формат', node.fontName);
                            figma.notify('Ошибка: Шрифт для узла не найден.');
                            continue;
                        }

                        let uniqueText;
                        do {
                            uniqueText = generateName({
                                lang: msg.lang || 'en',
                                gender: msg.gender || 'male',
                                length: msg.length || 'random',
                                formatName: msg.formatName || 'full',
                                transform: msg.transform || 'none',
                            });
                        } while (generatedTexts.has(uniqueText));

                        generatedTexts.add(uniqueText);
                        node.characters = uniqueText;
                    } catch (error) {
                        console.error('Ошибка при обработке текста:', error);
                        figma.notify('Ошибка обработки текста или загрузки шрифта.');
                    }
                }
            }
        } else {
            figma.notify("Выберите текстовый объект, чтобы обновить имя.");
        }
    }
};