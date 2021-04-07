$(document).click(function (e) {
    try {
        if (e.target.tagName === "I") {
            $(".active").removeClass("active");
            $(`.${e.target.classList[1]}`).addClass("active");
        }
    } catch (err) {
        console.log(err);
    }
});