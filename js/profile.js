function changeProfile() {

    const profileScreen = document.querySelector(".profile__screen");
    const profile_avatar = document.querySelector(".profile__avatar")
    const profile_name = document.querySelector(".profile__name");
    const profile_detaile = document.querySelector(".profile__detaile");
    const btnPage = localStorage.getItem("link");
    if (localStorage.getItem("avatarPath") !== null) {
        const path = "url(" + localStorage.getItem("avatarPath") + ")";
        document.querySelector(".header__back-btn").setAttribute("href", btnPage);
        profileScreen.style.background = "linear-gradient( to bottom, rgba(101, 101, 114, 0.6) 100%, rgba(0, 0, 0, 0.6))," + path;
        profileScreen.style.backgroundSize = "cover";
        profile_avatar.querySelector("img").setAttribute("src", localStorage.getItem("avatarPath"));
        profileScreen.style.overflow = "hidden";
        profile_name.innerText = localStorage.getItem("incomminguser");
        if (localStorage.getItem("avatarstatus") !== null) {
            profile_detaile.innerText = localStorage.getItem("avatarstatus");

        }
    }
    localStorage.removeItem("link");
}

function getFriendsImg() {

    friend_avata = document.querySelectorAll(".friend__avatar");
    friend_avata.forEach(element => {
        element.addEventListener("click", handleClickEvent);
    });
    friend_name = document.querySelectorAll(".friend__name");
    friend_name.forEach(element => {
        element.addEventListener("click", handleClickEvent);
    });
    friend_status = document.querySelectorAll(".friend__status");
    friend_status.forEach(element => {
        element.addEventListener("click", handleClickEvent);
    });
}

function handleClickEvent(event) {
    console.log(event);
    console.log(event.target.parentElement.parentElement.querySelector(".friend__content").querySelector(".friend__name").innerText);
    localStorage.setItem("link", document.location.href);
    localStorage.setItem("avatarPath", event.target.parentElement.parentElement.querySelector(".friend__avatar").querySelector("img").src);
    localStorage.setItem("incomminguser", event.target.parentElement.parentElement.querySelector(".friend__content").querySelector(".friend__name").innerText);
    localStorage.setItem("avatarstatus", event.target.parentElement.parentElement.querySelector(".friend__content").querySelector(".friend__status").innerText);

}

function getChatImgsrc() {

    const friend_img = document.querySelector(".message__avatar");
    const avatar = friend_img.querySelector("img");
    localStorage.setItem("avatarPath", avatar.src);
    const incomminguser = document.querySelector(".message__author");
    localStorage.setItem("incomminguser", incomminguser.innerText);


}

function init() {
    const friend_img = document.querySelector(".message__avatar");

    const firend_list = document.querySelectorAll(".frineds__friend");
    if (friend_img !== null) {
        localStorage.setItem("link", document.location.href);
        friend_img.addEventListener("click", getChatImgsrc);

    } else if (firend_list.length !== 0) {
        getFriendsImg();
    } else {
        changeProfile();
    }
}

init();