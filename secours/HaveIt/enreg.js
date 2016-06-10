if(window.location.href=='http://localhost:8080/Marquage/reussi.jsp'){
var inp = document.getElementsByTagName('input');
var login = inp[0].value;
var password = inp[1].value;
chrome.storage.sync.set({'login4': login,'password2':password}, function() {login
        });
}