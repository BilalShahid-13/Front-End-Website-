var popup = document.querySelector(".popup")
// setTimeout(function(){
//     alert('Popup')
// },2000)
popup.classList.toggle('active')

// signup.addEventListener("click",function(){
//     alert("click")
// })

var login = document.querySelector(".login")
var login_p = document.querySelector(".login p")
login.addEventListener("mouseenter",function(){
    login_p.style.color = "white"
});
login.addEventListener("mouseleave",function(){
    login_p.style.color = "#333"
});

var left = document.querySelector(".left")
var right = document.querySelector(".right")
var signup_btn = document.querySelector(".signup")
var signup_p = document.querySelector(".signup > p")
var h = document.querySelector(".login > p")
var reg = document.querySelector(".reg-form")
var login = document.querySelector(".login-form")
signup_btn.addEventListener("click",function(){

    login.style.display = "none"
    var tl = gsap.timeline({ repeat: 1, yoyo: true })
    tl.to(left, { duration: 1, x: 0 }) // Move right
      .to(left, { duration: 1, x: 505 })
      
        setTimeout(function(){
            // h.textContent = "SignUp"
            reg.style.display = "flex"
            login.style.display = "none"
            signup_p.textContent = "Login"
        },3000)
})
