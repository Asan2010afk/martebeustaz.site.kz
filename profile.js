const username = localStorage.getItem("loggedInUser");
if (!username) location.href = "auth.html";

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const avatarImg = document.getElementById("avatar");
const avatarInput = document.getElementById("avatar-input");

const userData = JSON.parse(localStorage.getItem("userData_" + username)) || {
  name: username,
  email: "",
  avatar: "default-avatar.png"
};

nameInput.value = userData.name;
emailInput.value = userData.email;
avatarImg.src = userData.avatar;

function saveProfile() {
  const updatedData = {
    name: nameInput.value,
    email: emailInput.value,
    avatar: avatarImg.src
  };
  localStorage.setItem("userData_" + username, JSON.stringify(updatedData));
  alert("✅ Профиль сақталды!");
}

avatarInput.onchange = () => {
  const file = avatarInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    avatarImg.src = reader.result;
  };
  reader.readAsDataURL(file);
};

function logout() {
  localStorage.removeItem("loggedInUser");
  location.href = "auth.html";
}   