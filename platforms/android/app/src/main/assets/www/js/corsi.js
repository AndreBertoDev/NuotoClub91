$(document).ready(function () {
	$("#spinner").show();
	$("#bottom-info").hide();
	$("#internet").hide();
});

function isOnline(yes, no){
    var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp');
    xhr.onload = function(){
        if(yes instanceof Function){
            yes();
        }
    }
    xhr.onerror = function(){
        if(no instanceof Function){
            no();
        }
	}
	xhr.open("GET","http://www.nuotoclub91parma.it",true);
    xhr.send();
}

isOnline(
    function(){
    	//alert("you are online");
		$("#posts").show();
		$("#internet").hide();
		$(document).ready(function() {
			$('#posts').load('http://www.nuotoclub91parma.it/scuola-nuoto-federale/ #table-corsi-scuola-nuoto');
		});
		$("#spinner").hide();
		$("#bottom-info").show();
},
    function(){
        //alert("you are offline");
		$("#posts").hide();
		$("#internet").show();
		$("#bottom-info").hide();
		$("#spinner").hide();
    }
);

function refresh(){
	location.reload();
}