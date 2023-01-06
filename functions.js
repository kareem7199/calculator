let Screen = document.getElementById("screen");
let zero = document.getElementById("0");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let c_button = document.getElementById("c");
let plus = document.getElementById("+");
let equal = document.getElementById("equal");
let multiply = document.getElementById("*");
let subtraction = document.getElementById("-");
let division = document.getElementById("/");
let dot = document.getElementById(".");
let screenText = document.getElementById("screentext");
let res = "";
let ope = false;
let neg = false;
function calc(num) {
    if (isNaN(+num)) {
        if (ope) {
            res = res.slice(0 , res.length-1);
            if (neg) {
                if (num === "-") {
                    num = "+";
                }
                neg = false;
            }
            else if (num === "-") {
                neg = true;
            }
        }
        else{
            ope = true;
        }
    }
    else {
        ope = false;
        neg = false;
    }
    res += num;
    screenText.innerHTML = res;
}

function reset() {
    res = "";
    ope = false;
    neg = false;
    screenText.innerHTML = res;
}

function calc_res() {
    res = isNaN(+res[res.length-1]) ? res.slice(0 , res.length-1):res;
    res = isNaN(+res[0]) ? res.slice(1 , res.length):res;
    res = eval(res);
    ope = false;
    neg = false;
    if(res === undefined)
    {
        alert("enter valid operator")
        res = "";
    }
    screenText.innerHTML = res;
    res = res.toString();
}

zero.onclick = () => calc("0");
one.onclick = () => calc("1");
two.onclick = () => calc("2");
three.onclick = () => calc("3");
four.onclick = () => calc("4");
five.onclick = () => calc("5");
six.onclick = () => calc("6");
seven.onclick = () => calc("7");
eight.onclick = () => calc("8");
nine.onclick = () => calc("9");
dot.onclick = () => calc(".");
subtraction.onclick = () => calc("-");
multiply.onclick = () => calc("*");
plus.onclick = () => calc("+");
division.onclick = () => calc("/");
c_button.onclick = () => reset();
equal.onclick = () => calc_res();
