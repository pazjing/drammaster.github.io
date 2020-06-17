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