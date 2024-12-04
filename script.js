document.querySelector(".menu-toggle").addEventListener("click", () => {
  const menu = document.querySelector(".menu-items");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

document.getElementById("registerButton").addEventListener("click", () => {
  const form = document.getElementById("registrationForm");
  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  const message = `
        Registration Details:
        Name: ${data.fullName}
        DOB: ${data.dob}
        Email: ${data.email}
        Phone: ${data.phone}
        Guardian: ${data.guardianName}
        Guardian Phone: ${data.guardianPhone}
        Previous School: ${data.prevSchool}
        Graduation Year: ${data.graduationYear}
        Enrollment Type: ${data.enrollmentType}
        Course: ${data.course}
    `;

  const whatsappNumber = "2347068185172"; // Replace with the actual WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
});
