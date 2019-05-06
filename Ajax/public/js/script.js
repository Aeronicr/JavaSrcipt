        document.getElementById("submit").addEventListener("click", function (e) {
             e.preventDefault();
            let registerForm = document.forms["registerForm"];
            let userName = registerForm.elements["userName"].value;
            let userAge = registerForm.elements["userAge"].value;
            let user = JSON.stringify({userName: userName, userAge: userAge});
            let request = new XMLHttpRequest();
             request.open("POST", "/user", true);   
             request.setRequestHeader("Content-Type", "application/json");
             request.addEventListener("load", function () {
                 let receivedUser = JSON.parse(request.response);
                 result.append(receivedUser.userName, "-", receivedUser.userAge);   // смотрим ответ сервера
             });
             request.send(user);
         });