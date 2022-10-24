let userName = document.querySelector("#username").value
let password = document.querySelector("#password").value

let loginForm = document.querySelector(".loginForm")
let alertLogin = document.querySelector(".warning")


async function login(){
    let url = await fetch("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/login_and_regis")
    let response = await url.json()
    console.log(response);

    response.forEach((item, index) => {
        if (userName == item.username && password == item.password) {  
            window.location.href= "./manajemenVolunteer.html"
        }else{
            alertLogin.innerHTML = 
                `<div class="alert alert-danger" role="alert">
                    Username dan password anda salah!
                </div>`
        }
    });

   
}

loginForm.addEventListener("submit", (event) =>{

    event.preventDefault()
    login()
}) 
// for (let index = 0; index <= response.length; index++) {
    //     if (index.username == userName && index.password == password){
    //           window.location.href= "./manajemenVolunteer.html"
    //     }else{
    //         alertLogin.innerHTML = 
    //         `<div class="alert alert-danger" role="alert">
    //             Username dan password anda salah!
    //         </div>`
    //     }
    // }
// let data = JSON.stringify({
//     'username': userName.value,
//     'password': password.value
// })

// let auth = btoa(userName +":"+ password)

// function login(){
//     fetch("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/login_and_regis", {
//         headers:{
//             'Authorization': 'Basic' + auth
//         }
//     })
//     .then(function(data){
//         return data.json()
//     })
//     .then(function(data){
//         if(data.message == "Bad credentials"){
//             alert("wrong credentials")
//         }else{
//             window.location.href="./manajemenVolunteer.html"
//         }
//     })
// }