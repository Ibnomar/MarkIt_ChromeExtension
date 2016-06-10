function genererString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
var txxt = window.getSelection().toString();
var code = genererString(8);
var range = window.getSelection().getRangeAt(0),
  content = range.extractContents(),
     span = document.createElement('span');
     span.setAttribute('id', code);
     span.setAttribute('style','background-color:red ; color:white');
span.appendChild(content);
var htmlContent = span.innerHTML;
range.insertNode(span);
var htm=document.getElementsByTagName('body')[0].innerHTML;
var posi = htm.search('<span id="'+code);
var count = 0;
var position = htm.indexOf('<span id="');

while ( position != -1 && position<posi) {
   count++;
   position = htm.indexOf( '<span id="',position + 1 );
}
posi=posi-count*70;
// 70 est la longueur de la balise <span id ... >
chrome.runtime.sendMessage({url: window.location.href, selection : txxt,id:code,pos:posi}
  , function(response) {
});
