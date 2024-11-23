figma.showUI(__html__, { width: 500, height: 230 });

let currentHeight = 250;

figma.ui.onmessage = (msg) => {
    if (msg.type === 'toggle-block') {
        if (currentHeight === 250) {
            figma.ui.resize(500, 600);
            currentHeight = 600;
        } else {
            figma.ui.resize(500, 250);
            currentHeight = 250;
        }
        figma.notify('Block toggled!');
    }
};