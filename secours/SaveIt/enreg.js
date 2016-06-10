var inp = document.getElementsByTagName('input');
var login = inp[0].value;
var password = inp[1].value;
chrome.storage.sync.set({'login4': login,'password1':password}, function() {
        });
alert('Vos données ont bien été enregistrés ! Vous pouvez maintenant enregistrer vos marques');
