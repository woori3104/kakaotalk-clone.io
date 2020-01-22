function init() {
    const chatsList = document.querySelectorAll(".chats__chat");
    if (chatsList.length !== 0) {
        getFriendsInfo();
    } else {
        changeChatScreen();
    }
}

function getFriendsInfo() {
    friend_avata = document.querySelectorAll(".friend__avatar");
    friend_avata.forEach(element => {
        element.addEventListener("click", changeChatProfile);
    });
    friend_name = document.querySelectorAll(".friend__name");
    friend_name.forEach(element => {
        element.addEventListener("click", changeChatProfile);
    });
    friend_status = document.querySelectorAll(".friend__bottom-text");
    friend_status.forEach(element => {
        element.addEventListener("click", changeChatProfile);
    });
}

function changeChatProfile(event) {

    localStorage.setItem("link", document.location.href);
    localStorage.setItem("avatarPath", event.target.parentElement.parentElement.querySelector(".friend__avatar").querySelector("img").src);
    localStorage.setItem("incomminguser", event.target.parentElement.parentElement.querySelector(".friend__content").querySelector(".friend__name").innerText);
}

function changeChatScreen() {

    const message_avatar = document.querySelectorAll(".message__avatar")
    const message_author = document.querySelectorAll(".message__author");

    if (localStorage.getItem("avatarPath") !== null) {
        message_avatar.forEach(element => {
            element.querySelector("img").setAttribute("src", localStorage.getItem("avatarPath"));

        });
        message_author.forEach(element => {
            element.innerText = localStorage.getItem("incomminguser");
        });
    }
    document.querySelector(".header__title").innerText = localStorage.getItem("incomminguser");
}

init();