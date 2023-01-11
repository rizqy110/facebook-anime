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

var marc = getUrlParam('marc',null);
var mdarc = getUrlParam('mdarc',null);
var mdarcz = getUrlParam('mdarcz',null);
var mdkus = getUrlParam('mdkus',null);

var dmed = getUrlParam('dmed',null);

var metarc = "<meta http-equiv='refresh' content='0; url=https://www.google.com/url?sa=t&url=https://kancabelajar.blogspot.com/?marc="+ marc +"'>";
var metdarc = "<meta http-equiv='refresh' content='0; url=https://www.google.com/url?sa=t&url=https://kancabelajar.blogspot.com/?mdarc="+ mdarc +"'>";
var metdarcz = "<meta http-equiv='refresh' content='0; url=https://www.google.com/url?sa=t&url=https://kancabelajar.blogspot.com/?mdarcz="+ mdarcz +"'>";
var metdkus = "<meta http-equiv='refresh' content='0; url=https://www.google.com/url?sa=t&url=https://kancabelajar.blogspot.com/?mdkus="+ mdkus +"'>";
var metdmed = "<meta http-equiv='refresh' content='0; url=https://www.google.com/url?sa=t&url=https://kancabelajar.blogspot.com/?dmed="+ dmed +"'>";