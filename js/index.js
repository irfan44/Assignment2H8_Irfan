const editProfile = document.getElementById("editProfile");

const displayEditForm = () => {
  if (editProfile.style.display === "block") {
    editProfile.style.display = "none";
    return;
  }

  editProfile.style.display = "block";
};

const handleEditForm = () => {
  displayEditForm();

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
};

const updateProfile = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  for (const [key, value] of formData) {
    document.getElementById(key).innerText = value;
  }

  displayEditForm();
};

const profileForm = document.getElementById("profileForm");
profileForm.addEventListener("submit", updateProfile);
