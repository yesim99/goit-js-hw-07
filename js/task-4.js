const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);//olay işleyicisi

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;//olayı tetikleyen DOM öğesi
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (email === "" || password ==="" ) {
        alert('All form fields must be filled in');
        return;
    }
    const data = {
        email = email,
        password = password,
    };
    console.log(data);
    form.reset();
}



//login yerine email kullanılmalı
//" " yerine "" + trim() kontrolü yapılmalı
