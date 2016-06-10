chrome.tabs.getSelected(null, function(tab){ 
chrome.runtime.onMessage.addListener(
  				function(request, sender, sendResponse) {
  					if(request.from=='importer'){
  					var sec = request.selec;var idd = request.id;var poss = request.pos;
  					var cd ='var bd = document.getElementsByTagName("body")[0];var htm = bd.innerHTML;var fin=htm;';
					for(i=0;i<sec.length;i++){
					//cd+='var tst = htm.substring(0,"'+poss[i]+'");var tst2=htm.substring("'+poss[i]+'");tst2.replace("'+sec[i]+'","<span id=\''+idd[i]+'\' style=\'background-color:red ; color:white\'>'+sec[i]+'</span>");fin=tst+tst2;';
					cd+='fin=fin.replace("'+sec[i]+'","<span id=\''+idd[i]+'\' style=\'background-color:red ; color:white\'>'+sec[i]+'</span>");';
					}
					cd+='document.getElementsByTagName("body")[0].innerHTML=fin;alert(fin)';
					chrome.tabs.executeScript(tab.id,{code:cd});
	  }}); 
});
chrome.browserAction.onClicked.addListener(function(tab){
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
