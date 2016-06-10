function pasteSelection() {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function (response) {
      document.write(response.data);
      alert(response.data);
    });
  });
}
alert(response.data);