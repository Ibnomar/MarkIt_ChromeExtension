chrome.browserAction.onClicked.addListener(function(){
	chrome.storage.sync.get("login5", function(data) {
	if(!data.login5){
		alert('Vous n\'êtes pas connectés ! \nVous serez redirigés vers la page de connexion');
      	chrome.windows.create({'url': 'http://localhost:8080/Marquage/connexion.jsp','width':420 , 'height':300, 'type': 'popup'}, function(window) {
 					});
  	}else{
  		chrome.runtime.sendMessage('enioddkbfobjfngcmdpogibbgaolmajj', {prop: data.login5},
  		function(response) {
 		 });
  	}

    });
});
// Remarque : connexion directe avec le serveur peut causer une utilisation malveillente des hackers