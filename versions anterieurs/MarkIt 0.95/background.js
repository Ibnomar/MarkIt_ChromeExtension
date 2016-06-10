chrome.contextMenus.create({
	title : "Marquer le texte",
	contexts:["selection"],
	onclick : colorer
});
var selec = [];
var liens = [];
var ids = [];
var pos = [];
var prop = 'smile';

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	selec.push(request.selection);
  	liens.push(request.url);
  	ids.push(request.id);
  	pos.push(request.pos);
  });

function colorer(selectedText){
		chrome.tabs.executeScript(null,{file:"coloration.js"});
}

chrome.browserAction.onClicked.addListener(function(){
		chrome.tabs.executeScript(null,{file:"coloration.js"});
});

chrome.runtime.onMessageExternal.addListener(
 			 function(request, sender, sendResponse) {
 			 	var lurl = 'http://localhost:8080/Marquage/Controleur';
 			 	lurl+='?length='+selec.length+'&prop='+prop;
 			 	var i = 0;
 			 	while(i<selec.length){
 			 		lurl+='&selec'+i+'='+selec[i].toString();
 			 		lurl+='&liens'+i+'='+liens[i].toString();
 			 		lurl+='&ids'+i+'='+ids[i].toString();
 			 		lurl+='&pos'+i+'='+pos[i].toString();
 			 		i++;
 			 	}
 			 	alert(lurl);
 				chrome.windows.create({'url': lurl,'width':420 , 'height':300, 'type': 'popup'}, function(window) {
 					selec = [];
					liens = [];
					ids = [];
					pos = [];
 				});
 			 });
// Remarque : connexion directe avec le serveur peut causer une utilisation malveillente des hackers