/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
figma.showUI(__html__, { width: 400, height: 500 });
figma.ui.onmessage = (msg) => {
    console.log(msg);
    if (msg.type === 'change-name-by-id') {
        const layerById = figma.getNodeById(msg.nodeId);
        if (layerById) {
            layerById.name = msg.newNameForId;
            figma.notify(`Layer with Node ID ${msg.nodeId} renamed successfully!`);
        }
        else {
            figma.notify(`Layer with Node ID ${msg.nodeId} not found.`);
        }
    }
    if (msg.type === 'change-name') {
        const layerToRename = figma.currentPage.findOne(n => n.name === msg.selectedNameOfLayer);
        if (layerToRename) {
            layerToRename.name = msg.targetNameOfLayer;
            figma.notify('Layer renamed successfully!');
        }
        else {
            figma.notify('Layer not found.');
        }
    }
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQTtBQUNBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNDAwLCBoZWlnaHQ6IDUwMCB9KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgIGlmIChtc2cudHlwZSA9PT0gJ2NoYW5nZS1uYW1lLWJ5LWlkJykge1xuICAgICAgICBjb25zdCBsYXllckJ5SWQgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cubm9kZUlkKTtcbiAgICAgICAgaWYgKGxheWVyQnlJZCkge1xuICAgICAgICAgICAgbGF5ZXJCeUlkLm5hbWUgPSBtc2cubmV3TmFtZUZvcklkO1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KGBMYXllciB3aXRoIE5vZGUgSUQgJHttc2cubm9kZUlkfSByZW5hbWVkIHN1Y2Nlc3NmdWxseSFgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShgTGF5ZXIgd2l0aCBOb2RlIElEICR7bXNnLm5vZGVJZH0gbm90IGZvdW5kLmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2NoYW5nZS1uYW1lJykge1xuICAgICAgICBjb25zdCBsYXllclRvUmVuYW1lID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZE9uZShuID0+IG4ubmFtZSA9PT0gbXNnLnNlbGVjdGVkTmFtZU9mTGF5ZXIpO1xuICAgICAgICBpZiAobGF5ZXJUb1JlbmFtZSkge1xuICAgICAgICAgICAgbGF5ZXJUb1JlbmFtZS5uYW1lID0gbXNnLnRhcmdldE5hbWVPZkxheWVyO1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KCdMYXllciByZW5hbWVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeSgnTGF5ZXIgbm90IGZvdW5kLicpO1xuICAgICAgICB9XG4gICAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==