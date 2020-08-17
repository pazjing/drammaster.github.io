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

/*Github Repo call*/
function callGitHub () {
    fetch("https://api.github.com/users/drammaster/repos")
        .then(response => {
            return response.json();
        })
        .then(repos => {
            for(let i = 0; i < repos.length; i++) {
                let rep = repos[i].name.split("-")
                let linker = "https://github.com/Drammaster/" + repos[i].name
                document.getElementById("repo-list").innerHTML += '<li class="repo_item">' + '<a target="_blank" href=' + linker + ' >' + '<container>' + '<h3>' + rep[0] + '</h3><p class="c-lang">' + rep[1] + '</p><p>' + repos[i].description + '</p></container>' + '</a>' + '</li>';
            }
        });
}

callGitHub();