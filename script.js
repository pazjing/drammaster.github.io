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

function callGitHub () {
    fetch("https://api.github.com/users/drammaster/repos")
        .then(response => {
            return response.json();
        })
        .then(repos => {
            console.log(repos);
        });
}

callGitHub();