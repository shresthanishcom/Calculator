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

  let numbers = [1, 2];
  let operands = [];
  switch (number) {
    case "1":
      var storage = localStorage.getItem("number");
      var text = storage.split(",");
      console.log(text);
      text.push(number);
      localStorage.setItem("number", numbers);

    case "2":
      operation =
        document.querySelector(".calculator-screen").innerHTML + number;

    case "+":
      operands.push(document.querySelector(".calculator-screen").innerHTML);
  }
  document.querySelector(".calculator-screen").innerHTML = numbers;
}
