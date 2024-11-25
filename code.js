figma.showUI(__html__, { width: 400, height: 250 });

let currentHeight = 250;

figma.ui.onmessage = (msg) => {
    if (msg.type === 'block') {
        if (currentHeight === 250) {
            figma.ui.resize(400, 600);
            currentHeight = 600;
        }
    }

    if (msg.type === 'generateName') {
        const { settings } = msg;
        const name = generateName(settings);  // Генерация имени
        figma.ui.postMessage({
            type: 'generatedName', // Отправка результата обратно в UI
            name: name
        });
    }
};