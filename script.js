document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM е зареден");

    const form = document.querySelector("#registerForm");
    if (!form) {
        console.error("Формата не е намерена! Уверете се, че ID-то е правилно.");
        return;
    }

    console.log("Формата е намерена, добавяме слушател за submit...");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Спира презареждането
        console.log("Формата се изпраща...");

        let valid = true;
        let name = document.querySelector("#name");
        let facultyNumber = document.querySelector("#facultyNumber");
        let email = document.querySelector("#email");
        let dob = document.querySelector("#dob");
        let password = document.querySelector("#password");
        let confirmPassword = document.querySelector("#confirmPassword");
        let facultyError = document.querySelector("#facultyError");
        let passwordError = document.querySelector("#passwordError");
        let successMessage = document.querySelector("#successMessage");

        // Нулиране на съобщенията за грешки
        facultyError.textContent = "";
        passwordError.textContent = "";
        successMessage.style.display = "none";

        console.log("Проверка на задължителните полета...");
        if (!name.value.trim() || !facultyNumber.value.trim() || !email.value.trim() || !dob.value.trim() || !password.value.trim() || !confirmPassword.value.trim()) {
            alert("Моля, попълнете всички полета!");
            valid = false;
        }

        console.log("Проверка на факултетния номер...");
        if (!/^\d{6}$/.test(facultyNumber.value.trim())) {
            facultyError.textContent = "Факултетният номер трябва да е точно 6 цифри!";
            valid = false;
        }

        console.log("Проверка на паролата...");
        if (password.value.trim() !== confirmPassword.value.trim()) {
            passwordError.textContent = "Паролите не съвпадат!";
            valid = false;
        }

        if (valid) {
            console.log("Формата е валидна!");
            successMessage.style.display = "block";
            form.reset(); // Изчистване на формата след успешно изпращане
        } else {
            console.log("Открити са грешки във формата!");
        }
    });
});