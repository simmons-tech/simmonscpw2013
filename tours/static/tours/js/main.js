document.onkeypress = checkkey;

function newRequest() {
    $.ajax({
	url: "/tours/new",
	success: function( data ) {location.reload();}
    });
}

function claimRequest() {
    $.ajax({
	url: "/tours/claim",
	success: function( data ) {location.reload();}
    });

}
function notifycheckNotify() {
    $.ajax({
	url: "/tours/notify",
	success: function( data ) {}
    });
}


/*
Keys to Functions
*/

function onW(evt) {
    newRequest();
}

function onA(evt) {
    claimRequest();
}

function onS(evt) {
}

function onD(evt) {
}


function checkkey(evt)
{
    var evt  = (evt) ? evt : ((event) ? event : null); 
    if ((evt.keyCode == 119)){onW(evt);}
    else if (evt.keyCode == 97) {onA(evt);}
    else if (evt.keyCode == 115)  {onS(evt);}
    else if (evt.keyCode == 100)  {onD(evt);}
}

$(document).ready(function(){
    $('#IDofTextInput').bind('keyup',checkkey);
});



window.setInterval(function(){
    checkNotify();
}, 600000);