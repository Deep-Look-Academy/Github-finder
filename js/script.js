let searchBtn = document.getElementById("searchBtn")
let searchUser = document.getElementById("searchUser")

let ui = new UI()


searchBtn.addEventListener("click",(e)=>{
    let userText = searchUser.value
    if(userText != ""){
        fetch(`https://api.github.com/users/${userText}`)
        .then(res => res.json())
        .then(user =>{
            if(user.message == "Not Found"){
                ui.showAlert("User Not Found","alert alert-danger")
            }else{
                ui.showProfile(user)
            }
        })
    }else{
        //clear profile
        ui.clearProfile()
    }
})