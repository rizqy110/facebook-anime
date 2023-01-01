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

var watch = getUrlParam('watch',null);
var watch2 = getUrlParam('watch2',null);
var mwatch = getUrlParam('mwatch',null);
var mwatch2 = getUrlParam('mwatch2',null);

var metanime = "<meta http-equiv='refresh' content='0; url=/anime/?watch="+ mwatch +"'>";
var metanime2 = "<meta http-equiv='refresh' content='0; url=/anime/?watch2="+ mwatch2 +"'>";

var kstream = "<video id='plyr' style='display:inline' autoplay='' controlslist='nodownload' controls='' playsinline='' webkit-playsinline='' src='https://s1.requisitor.xyz/anime2/"+ watch +".mp4' type='video/mp4'></Video><a class='tl p-a' href='https://poplarwindowsmasculine.com/yr9b40rx0v?key=ff0d80b75e8501a204c539222406f2fb' target='_blank'><img width='35%' height='auto' src='https://freepngimg.com/download/download_now_button/25706-2-download-now-button-orange.png'/></a>";
var kstream2 = "<video id='plyr' style='display:inline' autoplay='' controlslist='nodownload' controls='' playsinline='' webkit-playsinline='' src='https://s2.requisitor.xyz/anime2/"+ watch2 +".mp4' type='video/mp4'></Video><a class='tl p-a' href='https://poplarwindowsmasculine.com/yr9b40rx0v?key=ff0d80b75e8501a204c539222406f2fb' target='_blank'><img width='35%' height='auto' src='https://freepngimg.com/download/download_now_button/25706-2-download-now-button-orange.png'/></a>";