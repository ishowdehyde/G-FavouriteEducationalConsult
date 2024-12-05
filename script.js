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

  const messages = `
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
    messages
  )}`;

  let message = "New Registration:\n";
  formData.forEach((value, key) => {
    message += `${key}: ${value}\n`;
  });

  // Encode message for WhatsApp URL

  // Send the message silently (hidden from the user)
  const sendWhatsAppMessage = () => {
    const link = document.createElement("a");
    link.href = whatsappUrl;
    link.target = "_blank";
    link.style.display = "none"; // Hide link from the user
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Display success message
  alert(
    "Your registration is successful with G-Favourite Educatioanal Consultancy👍❤💑!"
  );

  // Call the function to send the WhatsApp message
  sendWhatsAppMessage();

  // Optionally, reset the form
  form.reset();
});

// document.addEventListener("DOMContentLoaded", () => {
//   // Attach an event listener to the form submit button
//   const registerButton = document.getElementById("registerButton");

//   registerButton.addEventListener("click", (e) => {
//     e.preventDefault(); // Prevent default form submission behavior

//     // Gather form data
//     const form = document.getElementById("registrationForm");
//     const formData = new FormData(form);

//     // Format data into a WhatsApp message
//     let message = "New Registration:\n";
//     formData.forEach((value, key) => {
//       message += `${key}: ${value}\n`;
//     });

//     // Encode message for WhatsApp URL
//     const whatsappNumber = "2347068185172"; // Replace with the desired WhatsApp number
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

//     // Send the message silently (hidden from the user)
//     const sendWhatsAppMessage = () => {
//       const link = document.createElement("a");
//       link.href = whatsappURL;
//       link.target = "_blank";
//       link.style.display = "none"; // Hide link from the user
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     };

//     // Display success message
//     alert("Your registration is successful with G Favourite!");

//     // Call the function to send the WhatsApp message
//     sendWhatsAppMessage();

//     // Optionally, reset the form
//     form.reset();
//   });
// });
