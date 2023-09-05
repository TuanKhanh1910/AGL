const statusMenu = Object.freeze({
  ACTIVE: "block",
  DISABLE: "none",
  SHOW: "1000px",
  HIDE: "0px",
  ANIMATION_HIDE: "max-height 0.5s ease-out",
  ANIMATION_SHOW: "max-height 0.5s ease-in",
});

const widthDevice = Object.freeze({
  MOBILE: 767,
  LAPTOP: 1920,
});

const handleMenu = () => {
  let idMenu = document.getElementById("menu");
  widthScreen = window.innerWidth;
  displayMenu = idMenu.style.maxHeight;
  // console.log(displayMenu === "");
  if (widthScreen < widthDevice.MOBILE) {
    if (displayMenu === statusMenu.SHOW) {
      // idMenu.style.display = statusMenu.DISABLE;
      // displayMenu = statusMenu.DISABLE;
      idMenu.style.maxHeight = statusMenu.HIDE;
      idMenu.style.transition = statusMenu.ANIMATION_HIDE;
    } else {
      // idMenu.style.display = statusMenu.ACTIVE;
      // displayMenu = statusMenu.ACTIVE;
      idMenu.style.maxHeight = statusMenu.SHOW;
      idMenu.style.transition = statusMenu.ANIMATION_SHOW;
    }
  }
};

// const handleSubMenu = (index) => {
//   let listItemToggle = document.querySelectorAll(".item__toggle");
//   let iconDown = document.querySelectorAll(".fa-chevron-down");
//   let iconRight = document.querySelectorAll(".fa-angle-right");
//   displayItemToggle = listItemToggle[index - 1].style.maxHeight;
//   widthScreen = window.innerWidth;
//   computedStyle = getComputedStyle(listItemToggle[index - 1]);
//   if (widthScreen < widthDevice.MOBILE) {
//     if (displayItemToggle === statusMenu.SHOW) {
//       if (computedStyle.maxHeight == "0px") {
//         listItemToggle[index - 1].style.maxHeight = statusMenu.SHOW;
//         // displayItemToggle = statusMenu.SHOW;
//         listItemToggle[index - 1].style.transition = statusMenu.ANIMATION_SHOW;
//         iconDown[index - 1].style.display = statusMenu.ACTIVE;
//         iconRight[index - 1].style.display = statusMenu.DISABLE;
//       } else {
//         listItemToggle[index - 1].style.maxHeight = statusMenu.HIDE;
//         // displayItemToggle = statusMenu.HIDE;
//         listItemToggle[index - 1].style.transition = statusMenu.ANIMATION_HIDE;

//         iconDown[index - 1].style.display = statusMenu.DISABLE;
//         iconRight[index - 1].style.display = statusMenu.ACTIVE;
//       }
//     } else {
//       listItemToggle[index - 1].style.maxHeight = statusMenu.SHOW;
//       // displayItemToggle = statusMenu.SHOW;
//       listItemToggle[index - 1].style.transition = statusMenu.ANIMATION_SHOW;
//       iconDown[index - 1].style.display = statusMenu.ACTIVE;
//       iconRight[index - 1].style.display = statusMenu.DISABLE;
//     }
//   }
// };
const handleSubMenu = (index) => {
  let listItemToggle = document.querySelectorAll(".item__toggle");
  let icon = document.querySelectorAll(".item__icon");
  displayItemToggle = listItemToggle[index - 1].style.maxHeight;
  widthScreen = window.innerWidth;
  computedStyle = getComputedStyle(listItemToggle[index - 1]);
  if (widthScreen < widthDevice.MOBILE) {
    if (displayItemToggle === statusMenu.SHOW) {
      if (computedStyle.maxHeight == "0px") {
        listItemToggle[index - 1].style.maxHeight = statusMenu.SHOW;
        // displayItemToggle = statusMenu.SHOW;
        listItemToggle[index - 1].style.transition = statusMenu.ANIMATION_SHOW;
        icon[index - 1].innerHTML = "<i class='fa-solid fa-chevron-down'></i>";
      } else {
        listItemToggle[index - 1].style.maxHeight = statusMenu.HIDE;
        // displayItemToggle = statusMenu.HIDE;
        listItemToggle[index - 1].style.transition = statusMenu.ANIMATION_HIDE;
        icon[index - 1].innerHTML = "<i class='fa-solid fa-angle-right'></i>";
      }
    } else {
      listItemToggle[index - 1].style.maxHeight = statusMenu.SHOW;
      // displayItemToggle = statusMenu.SHOW;
      listItemToggle[index - 1].style.transition = statusMenu.ANIMATION_SHOW;
      icon[index - 1].innerHTML = "<i class='fa-solid fa-chevron-down'></i>";
    }
  }
};
