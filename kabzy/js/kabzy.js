function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
        
function logout(){
    var auth = getCookie('session');
    $.ajax({
        url: encodeURI('https://www.track.kabzy.com/api/logout'),
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authenticate', auth);
        },
        data: {},
        success: function (data) { window.location = "login.html";},
        error: function (data) { console.error(data);},
    });
    
}

//Makes a GET request and returns data via a promise
function getURL(url){
    //Using promises to return the result of async request
    return $.ajax({
        url: encodeURI(url),
        type: 'GET',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authenticate', getCookie('session'));
        },
        data: {},
        success: function (data) { /*console.log(data);*/ },
        error: function (data) { console.error(data);},
    });
}



