window.onload = function(){
    let userNickName = document.querySelector('#userNickName');
    let userEmail = document.querySelector('#userEmail');
    let userPhoneNumber = document.querySelector('#userPhone');
    let submitBtn = document.querySelector('#submitBtn');

    let nickNameRegex = /^[a-zA-Z]{2,}$/;
    let emailRegex = /^[a-z0-9._]+@[a-z0-9._]+\.[a-z]{2,4}$/i;
    let phoneNumberRegex = /^\+380\d{9}$/;

function validate(){
    let nickName = userNickName.value;
    let email = userEmail.value;
    let phoneNumber = userPhoneNumber.value;

    let isNickNameValid = nickNameRegex.test(nickName);
    let isEmailValid = emailRegex.test(email);
    let isPhoneNumberValid = phoneNumberRegex.test(phoneNumber);

    submitBtn.disabled = !(isNickNameValid && isEmailValid && isPhoneNumberValid);
}

userNickName.addEventListener('input', validate);
userEmail.addEventListener('input', validate);
userPhoneNumber.addEventListener('input', validate);
}