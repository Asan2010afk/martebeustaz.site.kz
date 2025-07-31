const user = localStorage.getItem("loggedInUser");
if (!user) {
  location.href = "auth.html";
}