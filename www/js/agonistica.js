$(document).ready(function () {
    $("#titlenews").hide();
    $("#spinner").show();
    $("#internet").hide();
    $("#bottom-info").hide();
    $(".titolo").hide();
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
            $('#posts').load('http://www.nuotoclub91parma.it/agonistica/ #table-agonistica');
        });
        $(".titolo").show();
        $("#spinner").hide();
        $("#bottom-info").show();
},
    function(){
        //alert("you are offline");
        $("#posts").hide();
        $("#internet").show();
        $("#titlenews").hide();  //sostituisci
        $("#bottom-info").hide();
        $("#spinner").hide();
    }
);

function refresh(){
    location.reload();
}

    // Wait for device API libraries to load
    //
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() {
        // Now safe to use device APIs
    }