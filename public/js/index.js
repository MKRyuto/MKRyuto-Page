// document.addEventListener("click", function (event) {
//     var elements = document.getElementsByClassName("active")
//     for (i = 0; i < elements.length; i++) {
//         var hidden = document.getElementsByClassName(elements[i].id);
//         elements[i].classList.remove('active');
//         for (i = 0; i < hidden.length; i++) {
//             hidden[i].classList.add('hidden');
//         }
//     }
//     const target = event.target.id;
//     document.getElementById(target).classList.add("active");
//     if (target === "home") {
//         var display = document.getElementsByClassName("home")
//         for (i = 0; i < display.length; i++) {
//             display[i].classList.add('flex');
//         }
//     }

//     if (target === "about") {
//         var display = document.getElementsByClassName("about")
//         for (i = 0; i < display.length; i++) {
//             display[i].classList.add('grid');
//         }
//     }
// })

$(document).click(function (e) { 
    try {
        $(".active").removeClass("active");
        $(`.${e.target.classList[1]}`).addClass("active");
    }catch(err){
        console.log(err);
    }
});

// let active = $(".active").removeClass("active");