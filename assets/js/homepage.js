//START OF THE VARIABLES
var getUserRepos = function(){
    fetch("https://api.github.com/users/octocat/repos");
}

getUserRepos();