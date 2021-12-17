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

// function clearStorage() {
//   localStorage.clear();
//   localStorage.setItem("number", []);
// }
// function handleButton(event) {
//   const number = event.target.id;

//   let operands = [];
//   switch (number) {
//     case "1":
//       var storage = localStorage.getItem("number");
//       var text = storage.split(",");
//       console.log(typeof text);
//       console.log(text);
//       text.push(number);
//       localStorage.setItem("number ", text);

//     case "2":
//       operation =
//         document.querySelector(".calculator-screen").innerHTML + number;

//     case "+":
//       operands.push(document.querySelector(".calculator-screen").innerHTML);
//   }

//   let operand = transformObj(text);
//   document.querySelector(".calculator-screen").innerHTML = operand;
// }

function clearStorage() {
  localStorage.clear();
  localStorage.setItem("number", "");
  localStorage.setItem("numberArray", "");
  localStorage.setItem("operator", "");
  localStorage.setItem("fullArray", "");
}
function handleButton(event) {
  const number = event.target.id;

  switch (number) {
    case "1":
      setStorage(number);
      displayIndividual();
      break;

    case "2":
      setStorage(number);

      displayIndividual();

      break;

    case "3":
      setStorage(number);
      displayIndividual();

      break;
    case "4":
      setStorage(number);
      displayIndividual();

      break;
    case "5":
      setStorage(number);
      displayIndividual();

      break;
    case "6":
      setStorage(number);
      displayIndividual();

      break;
    case "7":
      setStorage(number);
      displayIndividual();

      break;
    case "8":
      setStorage(number);
      displayIndividual();

      break;
    case "9":
      setStorage(number);
      displayIndividual();

      break;
    case "0":
      setStorage(number);
      displayIndividual();

      break;

    case "+":
      // let numberArrayString = getStorage("numberArray");
      // let numberArray = numberArrayString.split(",");
      // numberArray.push(getStorage("number"));
      // localStorage.setItem("number", "");
      // console.log(numberArray);
      // localStorage.setItem("numberArray", numberArray);

      let previousNumber = getStorage("number");

      display(previousNumber, number); //agadi ko number + operator 123 +

      let numberArray = getStorage("numberArray");

      numberArray += `,${previousNumber}`;
      localStorage.setItem("numberArray", numberArray);

      console.log(getStorage("numberArray"));

      if (getStorage("operator") !== "") {
        let operator = getStorage("operator");
        switch (operator) {
          case "+":
            let oldNumber = getStorage("numberArray");
            let calculatedValue = 0;
            oldNumber.split(",").map((singleNumber) => {
              calculatedValue += +singleNumber;
            });
            displayResult(calculatedValue);
            localStorage.setItem("numberArray", calculatedValue);
            localStorage.setItem("operator", "");

            break;
        }
      }

      localStorage.setItem("number", "");
      localStorage.setItem("operator", number);
      break;

    default:
      console.log("wrong data entered");
  }
}

const setStorage = (number) => {
  let storage = getStorage("number");
  storage += number;
  localStorage.setItem("number", storage);
};
const getStorage = (itemName) => {
  return localStorage.getItem(itemName);
};

const displayIndividual = () => {
  let previousArray = getStorage("fullArray");
  let previousNumber = getStorage("number");
  previousArray += previousNumber;
  document.getElementById("calculator-operation").innerHTML = previousArray;
};

const display = (previousNumber, operator) => {
  let previousArray = getStorage("fullArray");
  previousArray += ` ${previousNumber} ${operator}`;
  localStorage.setItem("fullArray", previousArray);
  document.getElementById("calculator-operation").innerHTML = previousArray;
};
const displayResult = (result) => {
  document.getElementById("calculator-result").innerHTML = result;
};
