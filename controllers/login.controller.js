import {validateUser} from "../service/userService.js"

const formLogin = document.querySelector("[data-form-login]")

formLogin.addEventListener('submit',(e)=>{
    e.preventDefault()
    const user = Object.fromEntries(new FormData(e.target))
    validateUser(user).then(res=>{
        if (res===true){
            window.location.href = "/products.html"
            window.sessionStorage.setItem("user",user.email)
        }
    })
})

