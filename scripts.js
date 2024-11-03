document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const notification = document.querySelector('.notification');
    let registrations = 0;
    const maxRegistrations = 100; // Limit number of registrations

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (registrations < maxRegistrations) {
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;

            // Simulate registration (can be replaced with actual server call)
            registrations += 1;
            notification.textContent = `Thank you, ${name}! You are on the waitlist.`;
            form.reset();
        } else {
            notification.textContent = "Sorry, pre-registration is now closed.";
        }
    });
});
