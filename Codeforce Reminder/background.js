 background.js (background script)
chrome.runtime.onInstalled.addListener(function() {
   This function runs when the extension is installed or updated.
});

chrome.runtime.onStartup.addListener(function() {
   This function runs when Chrome starts up.
});
