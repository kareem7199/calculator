let Screen = document.getElementById("screen");
let elements = document.getElementsByClassName("number_button");
let c_button = document.getElementById("c");
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

c_button.onclick = () => reset();

for(let i = 0 ; i < elements.length ; i++)
    elements[i].onclick = ()=> elements[i].id === "equal"? calc_res() : calc(elements[i].id);  