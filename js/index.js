function listIcon() {
  if (document.querySelector(".Nav-dropdown").style.display === "block") {
    document.querySelector("i").style = "transform:rotate(0deg);";
    document.querySelector(".Nav-dropdown").style = "display:none;";
  } else {
    document.querySelector("i").style = "transform:rotate(90deg);";
    document.querySelector(".Nav-dropdown").style =
      "display:block;background-color:black;position:fixed;width:100%";
  }
}
