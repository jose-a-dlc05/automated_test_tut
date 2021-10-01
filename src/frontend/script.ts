const form: HTMLInputElement | null = document.querySelector('#signupForm');
const passwordInput: HTMLInputElement | null = <HTMLInputElement>(
	document.querySelector('#passwordInput')
);
const usernameInput: HTMLInputElement | null = <HTMLInputElement>(
	document.querySelector('#usernameInput')
);
const serverMessage: HTMLInputElement | null = <HTMLInputElement>(
	document.querySelector('#serverMessage')
);

if (form !== null && passwordInput && usernameInput && serverMessage) {
	form.addEventListener('submit', async (event) => {
		event.preventDefault();

		const password = passwordInput.value;
		const username = usernameInput.value;

		const result = await fetch('http://localhost:8080/users', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		}).then((response) => response.json());

		if (result.message) {
			serverMessage.innerText = result.message;
			serverMessage.classList.replace('error', 'success');
		}
		if (result.error) {
			serverMessage.innerText = result.error;
			serverMessage.classList.replace('success', 'error');
		}
		console.log(result);
	});
}
