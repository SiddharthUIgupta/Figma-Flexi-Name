import React from 'react';
import '../styles/ui.css'; // Import the CSS file for styling

const App = () => {
  // Function to handle renaming layers by name
  const handleRename = () => {
    const selectedNameOfLayer = (document.getElementById('selectedNameInputBox') as HTMLInputElement).value;
    const targetNameOfLayer = (document.getElementById('targetNameInputBox') as HTMLInputElement).value;
    parent.postMessage({ pluginMessage: { type: 'change-name', selectedNameOfLayer, targetNameOfLayer } }, '*');
  };

  // Function to handle renaming the specific layer by node ID; currenty hard coding the node ID for required 3 layers
  const handleRenameById = (nodeId: string, inputFieldId: string) => {
    const newNameForId = (document.getElementById(inputFieldId) as HTMLInputElement).value;
    parent.postMessage({ pluginMessage: { type: 'change-name-by-id', newNameForId, nodeId } }, '*');
  };

  return (
    <div>

<h2>Rename Layers by Node ID</h2>
      <form>
        <label>
          New Name for 'Button node':
          <input type="text" id="nameForNodeId1" name="new-name" />
        </label>
        <br />
        
        <input type="button" value="Rename" onClick={() => handleRenameById('I2:12355;7219:98547', 'nameForNodeId1')} />
        <br /><br />
        </form>
        <form>

        <label>
          New Name for 'Service Tile node':
          <input type="text" id="nameForNodeId2" name="new-name" />
        </label>
        <br />
        <input type="button" value="Rename" onClick={() => handleRenameById('I2:12357;9134:152932;9124:6511;9127:8954', 'nameForNodeId2')} />
        <br /><br />
        </form>
        <form>

        <label>
          New Name for 'List Item node':
          <input type="text" id="nameForNodeId3" name="new-name" />
        </label>
        <br />
        <input type="button" value="Rename" onClick={() => handleRenameById('I2:12359;9149:167728', 'nameForNodeId3')} />
      </form>



      
      <h2>Rename Layer</h2>
      <form>
        <label>
          Layer Name:
          <input type="text" id="selectedNameInputBox" name="selected-name" />
        </label>
        <br />
        <label>
          New Name:
          <input type="text" id="targetNameInputBox" name="target-name" />
        </label>
        <br /><br />
        <input type="button" id="renameLayerButton" value="Rename" onClick={handleRename} />
      </form>

    </div>
  );
};

export default App;
