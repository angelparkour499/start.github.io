
window.onload = function display_circle() {
    const circle = document.querySelectorAll("svg path")
    setTimeout(function() {circle.forEach((e) => {e.style.animationPlayState = "running"})}, 1000)
    
}

setTimeout(function() {
    const h1 = document.getElementById("show-text")
    const circle = document.getElementsByClassName("half-circle")

    for(let i = 0; i < circle.length; i++){
        circle[i].style.fill = "aliceblue"
    }
    h1.style.animationPlayState = "running"
    setTimeout(function(){ welcome_end() }, 3000)
    /*document.getElementsByTagName("svg")[0].style.filter = "drop-shadow(0 0 0.75rem #5584aa)"*/
}, 2500)

const welcome_end = () => {
    const circle = document.getElementsByClassName("half-circle")
    const middle_line = document.getElementsByClassName("expanding-line")[0]

    for(let i = 0; i < circle.length; i++){
        circle[i].style.animation = "end-of-start 2s forwards" 
       setTimeout(function() { circle[i].style.fill = "transparent" }, 1000)
    }
    setTimeout(function() {middle_line.style.animation = "retract-line 2s forwards"
    setTimeout(function() {document.getElementById("create-scroll").scrollIntoView(true)}, 1000)
}, 2000)
}

