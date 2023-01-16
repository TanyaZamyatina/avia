
$("#menu").on("click", function () {
    $(".list").toggleClass("change");
});

$("#switchMode").on("click", function () {
    if ($("#theme").attr("href") == "css/main.min.css") {
        $("#theme").attr("href", "css/dark.min.css");
    } else {
        $("#theme").attr("href", "css/main.min.css");
    }
});



