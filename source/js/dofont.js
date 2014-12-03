// A gist by Kevin Dew, tries to fall back if loading google's webfont loader
// fails. Note that we also explicitly include a local webfont.js to fall back
// on that!

WebFont.load({
    google: {
        families: ['Source Sans Pro', 'Roboto', 'Nota Sans']
    }
});

(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
    // if after 500ms we haven't got anything show
    // the user something, a FOUT is better than nothing
    setTimeout(function() {
       // you can have the webfont.js  cached but still have no
       // classes fire and you will have  a window.WebFontConfig object
        if ( ! ("WebFont" in  window)) {
           // non wfl loader class name because their events could still  fire
           document.getElementsByTagName("html")[0].className += "wf-fail";
        }
    },500);
})();
