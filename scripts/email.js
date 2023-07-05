/* 1. define variables */
var email = "l.j.a.creed";
var domain = "gmail.com";

/* 2. find email link to replace */
var email_link = document.getElementById("email_link");

/* 3. replace link href with variables  */
var body = ""
email_link.href = `mailto:${email}@${domain}?body=${body}`;


