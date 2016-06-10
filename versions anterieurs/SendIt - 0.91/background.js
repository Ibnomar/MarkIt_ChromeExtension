
chrome.browserAction.onClicked.addListener(function(){
	chrome.storage.sync.get("login", function(data) {
	if(!data.login){
		//alert('Vous n\'êtes pas connectés ! \nVous serez redirigés vers la page de connexion');
      	//chrome.tabs.create({ url: "https://www.google.com/" });
      	chrome.runtime.sendMessage('enioddkbfobjfngcmdpogibbgaolmajj', {test: true},
  		function(response) {
 		 });
  	}else{



  	}

    });
});
// Remarque : connexion directe avec le serveur peut causer une utilisation malveillente des hackers