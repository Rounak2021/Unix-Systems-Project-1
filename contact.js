function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "monstersphinx20@gmail.com",
    Password : "nnduofkkusvbljfr",
    // SecureToken : "c8d79a36-7d94-4141-b982-8f42cfc762aa",
    To : 'rounak.chakraborty2019@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New contact form enquiry",
    Body : "Name: " + document.getElementById("name").value +
            "<br> Email: " + document.getElementById("email").value +
            "<br> Phone Number: " + document.getElementById("phone").value +
            "<br> Message: " + document.getElementById("message").value
}).then(
  message => click
);
}$('#click').on('click', function(){
            Swal.fire({
                      title: 'success!',
                      text: 'Message Sent Successfully',
                      icon: 'success',
                      confirmButtonText: 'Okay'
            })
})