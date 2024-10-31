const editProfile = document.getElementById("editProfile");

const fillForm = () => {
  if (editProfile.style.display === "block") {
    editProfile.style.display = "none";
    return;
  }

  const fields = [
    "name",
    "role",
    "availability",
    "age",
    "location",
    "experience",
    "email",
    "phone",
  ];

  fields.forEach((field) => {
    document.getElementById(`form-${field}`).value =
      document.getElementById(field).innerText;
  });

  editProfile.style.display = "block";
};

const updateProfile = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);

  Object.keys(formProps).forEach(function (key) {
    document.getElementById(key).innerText = formProps[key];
  });

  editProfile.style.display = "none";
};

const profileForm = document.getElementById("profileForm");
profileForm.addEventListener("submit", updateProfile);
