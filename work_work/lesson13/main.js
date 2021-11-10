(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_wyRyeoeTmUZd0jvEFTbqY');
})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_4vu5z99', 'template_w63yxv8', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}