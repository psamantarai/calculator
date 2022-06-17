let display = document.querySelector("#input");

let buttons = Array.from(document.getElementsByClassName("button"));
var toEval = "";
let ans = "";

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.value = "";
        toEval = "";
        break;
      case "DEL":
        if (display.value) {
          display.value = display.value.slice(0, -1);
        }
        break;
      case "√":
        val = display.value;
        display.value = "√(" + val + ")";
        toEval = display.value.replace("√", "Math.sqrt");
        break;

      case "%":
        val = display.value;
        display.value = "(" + val + ")" + "%";
        toEval = display.value.replace("%", "*100").replace("÷", "/");
        break;

      case "±":
        val = display.value;
        if (val > 0) {
          display.value = "-" + val;
        } else {
          display.value = val.replace("-", "");
        }
        break;

      case "Enter":
        try {
          console.log(toEval);
          display.value =
            eval(toEval.replace("ans", ans)) ||
            eval(display.value.replace("÷", "/").replace("ans", ans));
          toEval = "";
        } catch {
          display.value = "Error!";
        }
        break;
     
    }
  });
});
console.log(ans);
