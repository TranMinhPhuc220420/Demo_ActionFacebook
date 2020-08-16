const btn_likeAction = document.getElementById("btn_action");
const like_reaction_icon = document.getElementById("like_reaction_icon");
const reaction_selector = document.getElementsByClassName("action-item");

//add action show when hover in btn_action
btn_likeAction.addEventListener("mouseover", function () {
  like_reaction_icon.classList.add("show");
});

//remove action show when hover in btn_action
btn_likeAction.addEventListener("mouseout", function () {
  like_reaction_icon.classList.remove("show");
});

btn_likeAction.addEventListener("click", function () {
  like_reaction_icon.classList.remove("show");
  
  //Set information for button
  btn_likeAction.innerHTML = 'Thích';
  btn_likeAction.style.color = '#2078f4';
});

//add action show when hover in like_reaction_icon
like_reaction_icon.addEventListener("mouseover", function () {
  like_reaction_icon.classList.add("show");
});

//remove action show when hover in like_reaction_icon
like_reaction_icon.addEventListener("mouseout", function () {
  like_reaction_icon.classList.remove("show");
});

//Get element and add event listeners for it
for (let i = 0; i < reaction_selector.length; i++) {
  reaction_selector[i].addEventListener("click", (event) => {
    let txt_btn = "",
      color = "";

    switch (reaction_selector[i].dataset.action) {
      case "like":
        txt_btn = "Thích";
        color = "#2078f4";
        break;
      case "haha":
        txt_btn = "Haha";
        color = "#f7b125";
        break;
      case "love":
        txt_btn = "Yêu Thích";
        color = "#f33e58";
        break;
      case "angry":
        txt_btn = "Phẫn nộ";
        color = "#e9710f";
        break;
      default:
        console.log("error, other action");
        break;
    }

    //Check if action has
    if (btn_likeAction.innerHTML == txt_btn) {
      (txt_btn = "Thích"), (color = "black");
    }

    //Set information for button
    btn_likeAction.innerHTML = txt_btn;
    btn_likeAction.style.color = color;
  });
}
