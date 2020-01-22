function changeProfile() {

    const profileScreen = document.querySelector(".profile__screen");
    const profile_avatar = document.querySelector(".profile__avatar");
    const profile_name = document.querySelector(".profile__name");
    const btnPage = localStorage.getItem("link");
    if (localStorage.getItem("avatarPath") !== null) {
        const path = "url(" + localStorage.getItem("avatarPath") + ")";
        document.querySelector(".header__back-btn").setAttribute("href", btnPage);
        profileScreen.style.background = "linear-gradient( to bottom, rgba(101, 101, 114, 0.6) 100%, rgba(0, 0, 0, 0.6))," + path;
        profileScreen.style.backgroundSize = "cover";
        profile_avatar.querySelector("img").setAttribute("src", localStorage.getItem("avatarPath"));
        profileScreen.style.overflow = "hidden";
        profile_name.innerText = localStorage.getItem("incomminguser");
    }
    localStorage.removeItem("avatarPath");
    localStorage.removeItem("incomminguser");
    localStorage.removeItem("link");
}


function getImgsrc() {

    const friend_img = document.querySelector(".message__avatar");
    const avatar = friend_img.querySelector("img");
    localStorage.setItem("avatarPath", avatar.src);
    const incomminguser = document.querySelector(".message__author");
    localStorage.setItem("incomminguser", incomminguser.innerText);


}

function init() {
    const friend_img = document.querySelector(".message__avatar");

    if (friend_img !== null) {
        localStorage.setItem("link", document.location.href);
        friend_img.addEventListener("click", getImgsrc);

    } else {
        changeProfile();
    }
}

init();