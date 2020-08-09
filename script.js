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

function callGitHub (pageName, id) {
    fetch("https://api.github.com/users/drammaster/repos")
        .then(response => {
            return response.json();
        })
        .then(repos => {
            for(let i = 0; i < repos.length; i++) {
                let rep = repos[i].name.split("-")
                console.log(pageName)
                console.log(rep[1])
                if(rep[1] == pageName) {
                    console.log("this is fine")
                    document.getElementById(id).innerHTML += '<li>' + rep[0] + '</li>';
                }
            }
        });
}

callGitHub('Python', 'python-list');
callGitHub('JavaScript', 'js-list');
callGitHub('ReactNative', 'reactnative-list');
callGitHub('HTMLCSS', 'htmlcss-list');