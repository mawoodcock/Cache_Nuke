chrome.browserAction.onClicked.addListener(function(browsingData) {
var callback = function () {
  console.log("Win");
};

var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
var oneWeekAgo = (new Date()).getTime() - millisecondsPerWeek;
chrome.browsingData.remove({
  "since": oneWeekAgo
}, {
  "appcache": false,
  "cache": true,
  "cookies": true,
  "downloads": true,
  "fileSystems": true,
  "formData": false,
  "history": false,
  "indexedDB": false,
  "localStorage": true,
  "pluginData": false,
  "passwords": false,
  "webSQL": false
}, callback);

});
