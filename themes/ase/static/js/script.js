function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

var arc = getUrlParam('arc',null);
var lh3 = getUrlParam('lh3',null);

var encryptarc = decodeURIComponent(arc);

var astream = "<video id='plyr' class='p-a w-f' autoplay='' controls='' playsinline='' webkit-playsinline='' src='https://archive.org/download/"+ encryptarc +".mp4' type='video/mp4'></Video><span class='tl p-a bc1 c1 p-5 br-11'>Donghua Indo</span>";
var lh3stream = "<video id='plyr' class='p-a w-f' autoplay='' controls='' playsinline='' webkit-playsinline='' src='https://lh3.googleusercontent.com/pw/"+ lh3 +"' type='video/mp4'></Video><span class='tl p-a bc1 c1 p-5 br-11'>Donghua Indo</span>";