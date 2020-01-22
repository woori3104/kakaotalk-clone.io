
function sentMessage(event) {
 
    const li =sentMessage.appendChild(li);
    li.setAttribute('class','sent-message');
    const timespan = li.appendChild(span);
    timespan.setAttribute('class','message__timestmp');
    const contentsDiv = li.appendChild(div);
    contentsDiv.setAttribute('class','message__content');
    var bubbleDiv = contentsDiv.appendChild(div);
    bubbleDiv.setAttribute('class','message__bubble');
    bubbleDiv.innerText = event.target.innerText;
}

function handleProfileImg() {
    
    
}
function getImgsrc() {

    const friend_img = document.querySelector(".message__avatar");
    const avatar = friend_img.querySelector("img");
    localStorage.setItem("avatarPath", avatar.src);
    

}

function init() {
    const friend_img = document.querySelector(".message__avatar");
    if (friend_img !== null){
        friend_img.addEventListener("click",getImgsrc);
    } else {
        const profileScreen = document.querySelector(".profile__screen");
        const profile_avatar = document.querySelector(".profile__avatar");
        if (localStorage.getItem("avatarPath") !== "") {
            const path = "url(" + localStorage.getItem("avatarPath")+")";
            
            profileScreen.style.background="linear-gradient( to bottom, rgba(101, 101, 114, 0.6) 100%, rgba(0, 0, 0, 0.6)),"+path;
            profileScreen.style.backgroundSize="cover";
            profile_avatar.querySelector("img").setAttribute("src", localStorage.getItem("avatarPath"));
            profileScreen.style.overflow="hidden";
        }        
        localStorage.removeItem("avatarPath");
    }
}

init();