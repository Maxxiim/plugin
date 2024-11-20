figma.showUI(__html__);

figma.ui.postMessage("Hello from Figma Plugin");

figma.ui.onmessage = (msg) => {
    if (msg === 'close') {
        figma.closePlugin();
    }
};