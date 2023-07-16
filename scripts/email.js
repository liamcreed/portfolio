var email = "l.j.a.creed";
var domain = "gmail.com";

var email_link = document.getElementById("email_link");

var body = ""
email_link.href = `mailto:${email}@${domain}?body=${body}`;


