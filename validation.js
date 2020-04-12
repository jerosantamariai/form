// function validation(){
//     var inputcard, CVC, amount, inputfirstname, inputlastname, e;
//     inputcard = document.getElementById("inputcard").value;
//     CVC = document.getElementById("CVC").value;
//     amount = document.getElementById("amount").value;
//     inputfirstname = document.getElementById("inputfirstname").value;
//     inputlastname = document.getElementById("inputlastname").value;

//     if (inputcard === "" || CVC === "" || amount === "" || inputfirstname === "" || inputlastname === ""){
//         alert("Campo necesarios vacios");
//         return false;
//     }
// }

function validation() {
    let enviar = true;

    let form = document.getElementById("formContainer");

    /*console.log(form.Card.value); me muestra el valor que tengo dentro de creditcard*/

    /*let Card = document.getElementsByName ("Card");

    console.log(Card);*/

    if (!form.Card.value.trim().length > 0) {
        enviar = false;
        form.Card.focus();
        form.Card.classList.add("bd-danger");
    } else {
        form.Card.classList.remove("bd-danger");
        form.Card.classList.add("is-valid");
    }

    if (!form.CVC.value.trim().length > 0) {
        enviar = false;
        form.CVC.focus();
        form.CVC.classList.add("bd-danger");
    } else {
        form.CVC.classList.remove("bd-danger");
        form.CVC.classList.add("is-valid");
    }

    if (!form.Amount.value.trim().length > 0) {
        enviar = false;
        form.Amount.focus();
        form.Amount.classList.add("bd-danger");
    } else {
        form.Amount.classList.remove("bd-danger");
        form.Amount.classList.add("is-valid");
    }

    if (!form.firstName.value.trim().length > 0) {
        enviar = false;
        form.firstName.focus();
        form.firstName.classList.add("bd-danger");
    } else {
        form.firstName.classList.remove("bd-danger");
        form.firstName.classList.add("is-valid");
    }

    if (!form.lastName.value.trim().length > 0) {
        enviar = false;
        form.lastName.focus();
        form.lastName.classList.add("bd-danger");
    } else {
        form.lastName.classList.remove("bd-danger");
        form.lastName.classList.add("is-valid");
    }

    if (!form.City.value.trim().length > 0) {
        enviar = false;
        form.City.focus();
        form.City.classList.add("bd-danger");
    } else {
        form.City.classList.remove("bd-danger");
        form.City.classList.add("is-valid");
    }

    if (!form.inputState.value.trim().length > 0) {
        enviar = false;
        form.inputState.focus();
        form.inputState.classList.add("bd-danger");
    } else {
        form.inputState.classList.remove("bd-danger");
        form.inputState.classList.add("is-valid");
    }

    if (!form.postalCode.value.trim().length > 0) {
        enviar = false;
        form.postalCode.focus();
        form.postalCode.classList.add("bd-danger");
    } else {
        form.postalCode.classList.remove("bd-danger");
        form.postalCode.classList.add("is-valid");
    }


    return enviar;
}