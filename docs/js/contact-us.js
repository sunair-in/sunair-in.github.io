function contact_form_init(){
    const data = formGenerator();
    const element = document.getElementById("mail_to_ui");
    element.setAttribute("href", data);
    element.click()
}

function formGenerator(){
    const username = document.getElementById("name");
    const phoneNumber = document.getElementById("phone_number");
    const senderEmailId = document.getElementById("sender_emailId");
    const selectedService = document.getElementById("product_service");
    const details = document.getElementById("details");
    const receiverEmailId = "kanchanverma2810@gmail.com";

    const elementObj = {
        subject: `Inquire for ${selectedService.value}`,
        body: `Additional information -
                Name: ${username.value}
                Phone Number: ${phoneNumber.value}
                Email: ${senderEmailId.value}
                Inquire Details: ${details.value}`
    }
    mailtoString = `mailto:${receiverEmailId}?subject=${encodeURIComponent(elementObj.subject)}&body=${encodeURIComponent(elementObj.body)}`
    return mailtoString
}

let loginForm = document.getElementById("contact_us_form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contact_form_init();
  });

  function contactFormReset(){
    loginForm.reset();
  }