class UI {
    constructor() {
        this.profile = document.getElementById("profile")
    }
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-3" src="${user.avatar_url}" alt="">
                    <a href="${user.html_url}" class ="btn btn-primary mb-4 d-block" target="_blank" rel="noopener noreferrer">View Profile</a>
                </div>
            <div class="col-md-9 ">
                <span class="badge p-2 bg-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge p-2 bg-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge p-2 bg-success">Followers: ${user.followers}</span>
                <span class="badge p-2 bg-info">Following: ${user.following}</span>
                <br><br>

                <ul class="list-group">
                <li class="list-group-item">Name: ${user.login}</li>
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">WebSite/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
            </div>
        </div>
        `
    }
    clearProfile(){
        this.profile.innerHTML = ""
    }
    showAlert(msg,cls){
        this.profile.innerHTML = `<div class = "${cls} mt-3">${msg}</div>`

    }
}