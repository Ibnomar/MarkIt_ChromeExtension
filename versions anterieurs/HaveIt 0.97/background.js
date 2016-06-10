chrome.runtime.onMessage.addListener(
  				function(request, sender, sendResponse) {
  					if(request.from=='importer'){
  					var sec = request.selec;var idd = request.id;var poss = request.pos;
  					chrome.runtime.sendMessage({from:'background',selec: sec, id:idd, pos:poss}
 						 , function(response) {
							});
	  				alert(sec[0]+idd[0]+poss[1]);
	  }});
chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.executeScript(null,{file:"colorer.js"});
	chrome.storage.sync.get("login1", function(data) {
	if(!data.login1){
		alert('Vous n\'êtes pas connectés ! \nVous serez redirigés vers la page de connexion');
      	chrome.windows.create({'url': 'http://localhost:8080/Marquage/connexion.jsp','width':420 , 'height':300, 'type': 'popup'}, function(window) {
 					});
  	}else{
  		var lien ;
  		chrome.tabs.executeScript(null,{file:"lien.js"});
  		chrome.runtime.onMessage.addListener(
 		 function(request, sender, sendResponse) {
 		 	if(request.from=='lien'){
  			lien = request.url;
  			chrome.windows.create({'url': 'http://localhost:8080/Marquage/Controleur?have=oui&lien='+lien+'&prop='+
  			data.login1,'width':420 , 'height':300, 'type': 'popup'}, function(window) {
 					});}
  		});
  	}
    });

});
