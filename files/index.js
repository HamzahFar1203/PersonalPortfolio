window.onload = function () {
    var list_of_langs = document.querySelectorAll("#languages_list li").length;
    for (var i = 0; i < list_of_langs; i++) {
        document.querySelectorAll("#languages_list li")[i].setAttribute("class", "known_languages");
    }
}

$(function() {
    $("#profile_pic_div, #profile_content p, #center_content").fadeIn(1000);
});