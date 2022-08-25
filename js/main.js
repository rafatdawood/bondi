let nav_ul = document.querySelectorAll(".navbar .nav-item a");
let li_b = document.querySelectorAll(".our-work ul li");

nav_ul.forEach((li) => {
    li.addEventListener("click", (a) => {
        removeActive()
        a.target.classList.add("active")
    })
})

function removeActive() {
    nav_ul.forEach((li) => {
        li.classList.remove("active")
    })
}

li_b.forEach((li) => {
    li.addEventListener("click", (a) => {
        removeActive2()
        a.target.classList.add("active")
    })
})

function removeActive2() {
    li_b.forEach((li) => {
        li.classList.remove("active")
    })
}

