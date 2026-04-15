const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);//olay işleyicisi

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;//olayı tetikleyen DOM öğesi
    const login = form.elements.login.value;
    const password = form.elements.password.value;
    if (login === " " || password ===" " ) {
       return  console.log('All form fields must be filled in');
    }
    console.log(`Login: ${login},Password: ${password}`);
    form.reset();
}
