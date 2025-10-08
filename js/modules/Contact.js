
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!fullname || !email || !subject || !message) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }
    if (phone && !/^[0-9+\s()-]{6,20}$/.test(phone)) {
      alert("Numéro de téléphone invalide.");
      return;
    }


    const formData = {fullname,email,phone,subject,message,};

    try {
      const response = await fetch("send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Votre message a été envoyé avec succès !");
        form.reset();
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert(" Impossible de contacter le serveur.");
    }
  });
});



