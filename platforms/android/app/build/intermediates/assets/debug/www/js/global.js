//fa scendere il dropdown
function Drop(x) {
    ChangeIcon(x);
    $("#myDropdown").slideToggle("fast");
}

//fa partire la transizione
function ChangeIcon(x) {
    x.classList.toggle("change");
}

function Traslation() {
    if (document.getElementById('social').style.left == "-40px") {
        document.getElementById('social').style.left = "0%";
    } else if (document.getElementById('social').style.left == "0%") {
        document.getElementById('social').style.left = "-40px";
    }
}

$("html").click(function() {
    var audio = new Audio('click.ogg');
    audio.play();
});