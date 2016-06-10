chrome.storage.sync.get("value", function(data) {
	if(!data.value)
      chrome.tabs.create({ url: "http://google.com" });
      
    });