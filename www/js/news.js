$(document).ready(function () {
	$("#titlenews").hide();
	$("#spinner").show();
	$("#bottom-info").hide();
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
		$("#posts").show();
		$("#titlenews").show();
		$("#internet").hide();
		$(document).ready(function() {
			$('#posts').load('http://www.nuotoclub91parma.it/appnews #main-container');
		});
		$("#spinner").hide();
		$("#bottom-info").show();
},
    function(){
        //alert("you are offline");
		$("#posts").hide();
		$("#internet").show();
		$("#titlenews").hide();
		$("#bottom-info").hide();
		$("#spinner").hide();
    }
);

function refresh(){
	location.reload();
}




//$(document).ready(function() {
//	$("a").click(function() {
//		this.href = "abjkk";
//	});
//});