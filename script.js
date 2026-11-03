// Student Registration

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const student = {
            name: document.getElementById("name").value,
            dob: document.getElementById("dob").value,
            roll: document.getElementById("roll").value,
            course: document.getElementById("course").value,
            city: document.getElementById("city").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };

        let students = JSON.parse(
            localStorage.getItem("students") || "[]"
        );

        const exists = students.some(s =>
            s.email === student.email ||
            s.roll === student.roll
        );

       /* if (exists) {
            alert("Email or Roll Number already registered!");
            return;
        }*/

        students.push(student);

        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );

        alert("Registration Successful!");

        window.location.href = "index.html";
    });
}


// Student Login

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const roll = document.getElementById("loginRoll").value;
        const password = document.getElementById("loginPassword").value;

        const students = JSON.parse(
            localStorage.getItem("students") || "[]"
        );

        const student = students.find(s =>
            s.email === email &&
            s.roll === roll &&
            s.password === password
        );

        if (student) {

            alert("Login Successful! Welcome " + student.name);

            window.location.href = "home.html";

        }/* else {

            alert("Invalid Email, Roll Number or Password!");

        }*/

    });
}
