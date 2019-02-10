var userName;
var pass;
var currentHours;

userName = prompt("Please, Log in!");
if (userName === "" || userName === null) {
    alert("Canceled");
} else if (userName.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
} else if (userName !== "User" && userName !== "Admin") {
    alert("I don't know you");
} else {
    pass = prompt("Please, write password for entering!");
    if (pass === "" || pass === null) {
        alert("Canceled");
    }
    if (userName === "Admin" && pass !== "RootPass") {
        alert("Wrong password");
    } else if (userName === "User" && pass !== "UserPass") {
        alert("Wrong password");
    } else {
        currentHours = new Date().getHours();
        if (currentHours < 20) {
            alert("Good day, dear " + userName + "!");
        } else {
            alert("Good evening, dear " + userName + "!");
        }
    }

}



