// coding implementation
const inputEmail = document.querySelector("#email");
const inputComment = document.querySelector("#com");
const inputRating = document.querySelector("#rate");

inputEmail.onchange = (e) => {
    let value = e.target.value;
    if (!validateEmail(value) || !validateBlank(value)) {
        alert("Phần Email phải đúng format và không được bỏ trống")
        
    }
}

inputRating.onchange = (e) => {
    let value = e.target.value;
    console.log(value);
    if (!validateNumber(value) || !validateBlank(value)) {
        alert("Phần rating chỉ dùng số và không được bỏ trống")
    }
}

inputComment.onchange = (e) => {
    let value = e.target.value;
    if (!validateBlank(value)) {
        alert("Phần Comments chỉ dùng số và không được bỏ trống")
    }
}

function validateEmail(string) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(string)
}

function validateBlank(string) {
    if (string != "") {
        return true
    } else {
        return false
    }


}

function validateNumber(string) {
    const regEx = /[0-9]/;
    return regEx.test(string)
}








// end coding implementation