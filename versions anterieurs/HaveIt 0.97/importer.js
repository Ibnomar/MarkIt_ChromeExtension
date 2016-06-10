if(window.location.href=='http://localhost:8080/Marquage/marques.jsp'){
	var selecs = document.getElementsByName('selec');
	var ids = document.getElementsByName('id');
	var posi = document.getElementsByName('pos');
	var select = [];var idss = [];var position = [];
	var count = 0;
	var i =0;
	for(i=0;i<selecs.length;i++){
		select.push(selecs[i].value);
		idss.push(ids[i].value);
		position.push(posi[i].value+count*70);
		count++;
	}
	//alert(select[0]+position[1]);
		chrome.runtime.sendMessage({from: 'importer',selec: select,id:idss,pos:position}
  			, function(response) {
			});

	}
