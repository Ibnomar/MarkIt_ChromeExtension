
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {alert();
  	if(request.from=='background'){
  	alert(request.selec[0]+request.pos[1]);
  }
  });
