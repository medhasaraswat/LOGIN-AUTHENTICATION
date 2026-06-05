var username = "medha"
        var password = "medha123"
        function login() {
            var inputUsername = document.getElementById("username").value;
            var inputPassword = document.getElementById("password").value;
            if (inputUsername === username && inputPassword === password) {
                alert("Login successful!");
            } else {
                alert("Invalid username or password.");
            }
        }
