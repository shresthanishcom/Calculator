// navbar collapse and open
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

function handleButton(event) {
  const number = event.target.id;
  let operation = [];
  switch (number) {
    case "1":
      operation.push(number);
    case "2":
      operation.push(number);
  }

  document.querySelector(".calculator-screen").innerHTML = operation;
}
