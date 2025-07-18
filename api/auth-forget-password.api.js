document.addEventListener('DOMContentLoaded', () => {
    const resetPassword = document.querySelector('#resetForm');
    resetPassword.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.querySelector('#email');
        
        const emailValue = email.value.trim();
        localStorage.setItem('email',emailValue);
        try {
            const fetchResetApi = await fetch('https://poster-2-23cy.onrender.com/api/auth/forgetpassword', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: emailValue })
            });
            const resetResponse = document.querySelector('#resetResponse');

            if (!fetchResetApi.ok) {
                resetPassword.innerHTML = `Email Not Found`
                return; 
            };

            const result = await fetchResetApi.json();
            if (!result) {

                resetResponse.innerHTML = 'Please Try again'
                return;
            };

            if (fetchResetApi.status === 200) {
                window.location.href = './auth-otp.html';

            };


        } catch (error) {
            console.log(`Error fetching email api ${error}`);
            alert("please try again")
            return;
        }
    })
})