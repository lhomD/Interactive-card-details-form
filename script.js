/* Globa lvariaels and constants */
let formField;
let dateEl;
let spanEl;
/* Initialize web page before loading JavaScript */
function init() {
    formField = document.getElementById("formField");
    formField.cardHolderName.addEventListener("keyup", focusOnInput);
    formField.expMonth.addEventListener("keyup", focusOnMonth);
    formField.expYear.addEventListener("keyup", focusOnYear);
    formField.cvcNum.addEventListener("keyup", focusOnCvc);

    dateEl = document.querySelectorAll(".hero-front-info_month span");
    spanEl = document.getElementById("warningDate");

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