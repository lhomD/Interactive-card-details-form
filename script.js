/* Globa lvariaels and constants */
let formField;
let dateEl;
let spanEl;
let numSpanEl;
/* Initialize web page before loading JavaScript */
function init() {
    formField = document.getElementById("formField");
    formField.cardHolderName.addEventListener("keyup", focusOnInput);
    formField.expMonth.addEventListener("keyup", focusOnMonth);
    formField.expYear.addEventListener("keyup", focusOnYear);
    formField.cvcNum.addEventListener("keyup", focusOnCvc);
    formField.cardNumber.addEventListener("keyup", checkCardNumber);

    let submitBtn = document.getElementById("submitForm");
    submitBtn.addEventListener("click", submutForm)

    dateEl = document.querySelectorAll(".hero-front-info_month span");
    spanEl = document.getElementById("warningDate");
    numSpanEl = document.getElementById("warningNumber");

} //End init
window.addEventListener("load", init);

/* Focus on cardholder input fields */
function focusOnInput() {
    let cardHolder = document.querySelector(".hero-front-info_name");
    cardHolder.innerHTML = this.value;
} //End focusOnInput

/* Focus on Month input fields */
function focusOnMonth() {
    let arr = this.value.split("");
    let newValue = this.value.slice(0, -1);
    if (arr.length > 2) {
        this.value = newValue;
    }
    dateEl[0].innerHTML = this.value;

    /* Regex controll */
    let regex = /\d{2}/gi;
    if (arr.length > 1) {
        if (!regex.test(this.value)) {
            this.style.borderColor = "red";
            spanEl.innerHTML = "Only numbers";
            spanEl.style.opacity = 1;
        } else {
            this.style.borderColor = "#8e8593";
            spanEl.innerHTML = "&nbsp;"
            spanEl.style.opacity = 0;
        }
    }
} //End focusOnMonth

/* Focus on Year input fields */
function focusOnYear() {
    let arr = this.value.split("");
    let newValue = this.value.slice(0, -1);
    if (arr.length > 3) {
        this.value = newValue;
    }
    dateEl[2].innerHTML = this.value;

    /* Regex controll */
    let regex = /\d{2}/gi;
    if (arr.length > 1) {
        if (!regex.test(this.value)) {
            this.style.borderColor = "red";
            spanEl.innerHTML = "Only numbers";
            spanEl.style.opacity = 1;
        } else {
            this.style.borderColor = "#8e8593";
            spanEl.innerHTML = "&nbsp;"
            spanEl.style.opacity = 0;
        }
    }
} //End focusOnYear

/* Focus on CVC input fields */
function focusOnCvc() {
    let arr = this.value.split("");
    let newValue = this.value.slice(0, -1);
    let cvcEl = document.querySelector(".hero-back_cvc");
    if (arr.length > 3) {
        this.value = newValue;
    }
    cvcEl.innerHTML = this.value;

    /* Regex controll */
    let regex = /\d{3}/gi;
    if (arr.length > 2) {
        if (!regex.test(this.value)) {
            this.style.borderColor = "red";
            spanEl.innerHTML = "Only numbers";
            spanEl.style.opacity = 1;
        } else {
            this.style.borderColor = "#8e8593";
            spanEl.innerHTML = "&nbsp;"
            spanEl.style.opacity = 0;
        }
    }
} //End focusOnCvc

/* Focus on Card Number Field */
function checkCardNumber() {
    let spanEl = document.getElementById("warningNumber");
    let arr = this.value.split("");

    let newValue = this.value.slice(0, -1);
    if (arr.length > 16) {
        this.value = newValue;
    }

    let regex = /\d{16}/gi;
    if (arr.length > 15) {
        if (!regex.test(this.value)) {
            this.style.borderColor = "red";
            numSpanEl.innerHTML = "Only numbers";
            numSpanEl.style.opacity = 1;
        } else {
            this.style.borderColor = "#8e8593";
            numSpanEl.innerHTML = "&nbsp;"
            numSpanEl.style.opacity = 0;
        }
    }

    let numberEl = document.querySelectorAll(".hero-front-numbers-part_number");
    for (let i = 0; i < arr.length; i = i + 3) {
        if (arr.length >= 4) {
            numberEl[0].innerHTML = arr[0] + arr[1] + arr[2] + arr[3]
        }
        if (arr.length >= 8) {
            numberEl[1].innerHTML = arr[4] + arr[5] + arr[6] + arr[7]
        }
        if (arr.length >= 12) {
            numberEl[2].innerHTML = arr[8] + arr[9] + arr[10] + arr[11]
        }
        if (arr.length >= 16) {
            numberEl[3].innerHTML = arr[12] + arr[13] + arr[14] + arr[15]
        }
    }
} //End checkCardNumber

/* Submit form function */
function submutForm(e) {
    e.preventDefault();
    let fields = formField.getElementsByTagName("input");
    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value == "") {
            fields[i].style.borderColor = "red";
            return;
        }
    }

    let greatingEl = document.getElementById("greating");
    formField.style.opacity = "0"
    setTimeout(() => {
        formField.classList.add("confirmed");
        greatingEl.style.display = "flex"
    }, 300);

    let submitBtn2 = document.getElementById("submitForm2");
    submitForm2.addEventListener("click", () => {
        formField.classList.remove("confirmed");
        greatingEl.style.display = "none"
        setTimeout(() => {
            formField.style.opacity = "1"
        }, 300);
    })
}