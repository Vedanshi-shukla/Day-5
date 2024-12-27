const form = document.getElementById('autoSaveForm');

        window.addEventListener('DOMContentLoaded', () => {
            const savedName = localStorage.getItem('name');
            const savedEmail = localStorage.getItem('email');

            if (savedName) document.getElementById('name').value = savedName;
            if (savedEmail) document.getElementById('email').value = savedEmail;
        });

        // Local Storage
        form.addEventListener('input', (event) => {
            const { id, value } = event.target;
            if (id) {
                localStorage.setItem(id, value);
            }
        });