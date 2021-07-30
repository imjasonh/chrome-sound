chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({
    audible: true,
    muted: false,
  }, function(tabs) {
    if (tabs.length == 0) { return; }
    // TODO: if there are multiple, cycle through them.
    chrome.tabs.highlight({
      tabs: tabs[0].index,
      windowId: tabs[0].windowId,
    });
  });
});

