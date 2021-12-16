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

function clearStorage() {
  localStorage.clear();
  localStorage.setItem("number", []);
}
function handleButton(event) {
  const number = event.target.id;

  let operands = [];
  switch (number) {
    case "1":
      var storage = localStorage.getItem("number");
      var text = storage.split(",");
      console.log(typeof text);
      console.log(text);
      text.push(number);
      localStorage.setItem("number ", text);

    case "2":
      operation =
        document.querySelector(".calculator-screen").innerHTML + number;

    case "+":
      operands.push(document.querySelector(".calculator-screen").innerHTML);
  }

  let operand = transformObj(text);
  document.querySelector(".calculator-screen").innerHTML = operand;
}

function transformObj(str) {
  let sentence;
  str.map((character) => {
    sentence += character;
  });
  console.log("sentence transformed" + sentence);
  return sentence;
}
