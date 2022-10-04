let form;
let warnTextEl2;
let warnTextEl1;
let logoImg;
let numbers;
//---------------------------------------
function init() {
    form = document.getElementById("form");
    form.cvc.addEventListener("keyup", checkCvc);
    form.year.addEventListener("keyup", checkYear);
    form.month.addEventListener("keyup", checkMonth);
    form.fullName.addEventListener("keyup", checkName);
    warnTextEl2 = document.getElementById("numberWarn2");

    form.cardNumber.addEventListener("keyup", cardNumber);
    numbers = document.getElementById("numbers");
    logoImg = document.getElementById("logoImg");
    warnTextEl1 = document.getElementById("numberWarn1");
} window.addEventListener("load", init)
//End init

//Check Number of card
function cardNumber() {
    this.style.textTransform = "uppercase";
    let arr = this.value.split("");

    let compare = (Number(arr[0]));

    if (compare < 4) {
        logoImg.src = "/images/visa.png";
    } else if (compare >= 4 && compare <= 6) {
        logoImg.src = "/images/mastercard.png";
    } else if (compare >= 7) {
        logoImg.src = "/images/american-express.png";
    } else {
        logoImg.src = "/images/empty.png";
    }

    if (arr.length == 4) {
        this.value += " ";
    };
    if (arr.length == 9) {
        this.value += " ";
    };
    if (arr.length == 14) {
        this.value += " ";
    };

    let regex = /^(\d{1,4}) (\d{1,4}) (\d{1,4}) (\d{3,4})\d+$/gi;
    if (!regex.test(this.value)) {
        warnTextEl1.classList.add("warn")
    } else {
        warnTextEl1.classList.remove("warn")
    }

    numbers = document.getElementById("numbers");
    numbers.innerHTML = this.value;
}

//Check month field conteins only number
function checkMonth() {
    let expireDate = document.getElementById("expireDate").querySelectorAll("p");
    let regMonth = /^[1-9]{1,2}$/;
    let date = Number(this.value)

    if (date > 12 || !regMonth.test(this.value)) {
        this.style.backgroundColor = "";
        warnTextEl2.classList.add("warn")
    } else if (regMonth.test(this.value)) {
        warnTextEl2.classList.remove("warn")
    }

    expireDate[0].innerHTML = this.value + " /"
}

//Check year field conteins only number
function checkYear() {
    let expireDate = document.getElementById("expireDate").querySelectorAll("p");
    let regMonth = /^[0-9]{1,2}$/;
    if (regMonth.test(this.value)) {
        warnTextEl2.classList.remove("warn")
    } else if (!regMonth.test(this.value)) {
        this.style.backgroundColor = "";
        warnTextEl2.classList.add("warn")
    }
    expireDate[1].innerHTML = this.value
}

//Check CVC field conteins only number
function checkCvc() {
    let cvcNum = document.getElementById("csvNumber");
    let regCvc = /^[0-9]{3}$/;
    if (regCvc.test(this.value)) {
        warnTextEl2.classList.remove("warn")
    } else if (!regCvc.test(this.value)) {
        this.style.backgroundColor = "";
        warnTextEl2.classList.add("warn")
    }

    cvcNum.innerHTML = this.value
}

//Check Name field conteins only number
function checkName() {
    let nameElem = document.getElementById("holderName");
    this.style.textTransform = "capitalize";
    nameElem.innerHTML = this.value;
}

