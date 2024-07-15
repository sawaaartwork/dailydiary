const logoWhiteURL = "img/dd_white.svg";
const logoColorURL = "img/dd_color.svg";

window.onscroll = function(){

    let scroll_amount = document.documentElement.scrollTop;
    let fixedheader = document.getElementById("header");
    let logo = document.getElementById("logo");

    //ヘッダーのカラー変更
    if(550 > scroll_amount){

        fixedheader.classList.remove("section-header__onscroll");
        logo.src = logoWhiteURL;

    }else{

        fixedheader.classList.add("section-header__onscroll");
        logo.src = logoColorURL;
    }
}