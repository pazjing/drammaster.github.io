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
                let linker = "https://github.com/Drammaster/" + rep[0]
                if(rep[1] == pageName) {
                    document.getElementById(id).innerHTML += '<li class="repo_item">' + '<container>' + '<p>Name: ' + '<a target="_blank" href=' + linker + ' >' + rep[0] + '</a>' + '</p><p>Language: ' + rep[1] + '</p></container>' + '</li>';
                }
            }
        });
}

callGitHub('Python', 'python-list');
callGitHub('JavaScript', 'js-list');
callGitHub('ReactNative', 'reactnative-list');
callGitHub('HTMLCSS', 'htmlcss-list');