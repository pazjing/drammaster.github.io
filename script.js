/*Function to change a text field*/
function myFunction () {
    document.getElementById("mainfield").innerHTML = "You clicked on the Link"
};

/*Function to change #mainfield to random colors*/
function colorChange() {
    var mainfield = document.querySelector('#mainfield');
    mainfield.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
};

/*Function to generate Hex*/
function changeRandomColor () {
    var newHex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    document.getElementById("mainfield").innerHTML = "It works tho";
    document.getElementById("mainfield").innerHTML = newHex;
}

function changeBackgroundColor () {
    var main = document.querySelector("main");
    main.style.backgroundColor = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
}

function darkMode () {

}

/*Page changer function for single paged site*/
function changePage (selected) {
    var python = document.querySelector("#python");
    var aboutme = document.querySelector("#aboutme");
    var handCss = document.querySelector("#handCss");
    var reactNative = document.querySelector("#reactNative");
    var javaScript = document.querySelector("#javaScript");
    var tochange = document.querySelector(selected);
    aboutme.style.margin = "0 0 0 -900px";
    python.style.margin = "0 0 0 -900px";
    handCss.style.margin = "0 0 0 -900px";
    javaScript.style.margin = "0 0 0 -900px";
    reactNative.style.margin = "0 0 0 -900px";
    tochange.style.margin = "0 0 0 0px";
}