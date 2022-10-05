let form;
let warnTextEl2;
let warnTextEl1;
let logoImg;
let numbers;
let confirmBtn;
let continueBtn;
//---------------------------------------
function init() {
    form = document.getElementById("form");
    form.cvc.addEventListener("keyup", checkCvc);
    form.year.addEventListener("keyup", checkYear);
    form.month.addEventListener("keyup", checkMonth);
    form.fullName.addEventListener("keyup", checkName);
    warnTextEl2 = document.getElementById("numberWarn2");

    form.cardNumber.addEventListener("keyup", cardNumber);
    numbers = document.querySelectorAll(".numbers");
    logoImg = document.getElementById("logoImg");
    warnTextEl1 = document.getElementById("numberWarn1");

    confirmBtn = document.getElementById("btnConf");
    confirmBtn.addEventListener("click", greating);

    continueBtn = document.getElementById("continue");
    continueBtn.addEventListener("click", thanks);
}
window.addEventListener("load", init);
//End init

//Confirm function
function greating() {
    let inputs = form.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == 0) {
            inputs[i].style.borderColor = "red";
        } else {
            form.parentNode.classList.add("greating");
        }
    }
}
//hide thanks
function thanks() {
    form.parentNode.classList.remove("greating");
}
//Check Number of card
function cardNumber() {
    let regex = /^(\d{0,16})\d+$/gi;
    if (!regex.test(this.value)) {
        warnTextEl1.classList.add("warn");
    } else {
        warnTextEl1.classList.remove("warn");
    }

    let numberToField = this.value;
    let arr = this.value.split("");

    for (let i = 0; i < arr.length; i++) {
        if (numbers[i]) {
            numbers[i].innerHTML = arr[i];
        }
    }

    if (arr.length == 17) {
        this.value = numberToField.slice(0, -1);
    }
}

//Check month field conteins only number
function checkMonth() {
    let expireDate = document
        .getElementById("expireDate")
        .querySelectorAll("p");
    let date = Number(this.value);

    if (date > 12) {
        this.style.backgroundColor = "";
        warnTextEl2.classList.add("warn");
    } else if (date < 10) {
        warnTextEl2.classList.remove("warn");
        expireDate[0].innerHTML = this.value + " /";
    }
}

//Check year field conteins only number
function checkYear() {
    let expireDate = document
        .getElementById("expireDate")
        .querySelectorAll("p");
    let regMonth = /^[0-9]{1,2}$/;
    if (regMonth.test(this.value)) {
        warnTextEl2.classList.remove("warn");
    } else if (!regMonth.test(this.value)) {
        this.style.backgroundColor = "";
        warnTextEl2.classList.add("warn");
    }
    expireDate[1].innerHTML = this.value;
}

//Check CVC field conteins only number
function checkCvc() {
    let cvcNum = document.getElementById("csvNumber");
    let regCvc = /^[0-9]{3}$/;
    if (regCvc.test(this.value)) {
        warnTextEl2.classList.remove("warn");
    } else if (!regCvc.test(this.value)) {
        this.style.backgroundColor = "";
        warnTextEl2.classList.add("warn");
    }

    cvcNum.innerHTML = this.value;
}

//Check Name field conteins only number
function checkName() {
    let nameElem = document.getElementById("holderName");
    this.style.textTransform = "capitalize";
    nameElem.innerHTML = this.value;
}
