figma.showUI(__html__, { width: 400, height: 500 });

figma.ui.onmessage = (msg) => {
  console.log(msg);

  //Renaming via node id
  if (msg.type === 'change-name-by-id') {
    // Find the layer using the specific node ID
    const layerById = figma.getNodeById(msg.nodeId);

    if (layerById) {
      layerById.name = msg.newNameForId;
      figma.notify(`Layer with Node ID ${msg.nodeId} renamed successfully!`);
    } else {
      figma.notify(`Layer with Node ID ${msg.nodeId} not found.`);
    }
  }

    // Renaming via layer name
    if (msg.type === 'change-name') {
      const layerToRename = figma.currentPage.findOne(n => n.name === msg.selectedNameOfLayer);
  
      if (layerToRename) {
        layerToRename.name = msg.targetNameOfLayer;
        figma.notify('Layer renamed successfully!');
      } else {
        figma.notify('Layer not found.');
      }
    }

   // This closes the plugin upon after the operation
  //figma.closePlugin();
};
