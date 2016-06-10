chrome.contextMenus.create({
	title : "Marquer le texte",
	contexts:["selection"],
	onclick : myFunction
});

//encodeURIComponent - type : "panel"
chrome.runtime.sendMessage(selectedText.selectionText);

function myFunction(selectedText){
	//chrome.tabs.create({url : "https://www.google.com/search?q="+encodeURIComponent(selectedText.selectionText)})
	/*chrome.windows.create({url : "https://www.google.com/search?q="+
		encodeURIComponent(selectedText.selectionText), type:"panel"})*/
	var txt = document.createTextNode(selectedText.selectionText);
	var body = document.getElementById('ok');
	alert(body.textContent);

}