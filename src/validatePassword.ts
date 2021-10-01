const validatePassword = (password: string) => {
	// at least 8 characters long
	const validLength: boolean = password.length >= 8;
	// has at least one letter
	let hasLetter: boolean = false;
	const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
	for (const letter of alphabet) {
		if (password.includes(letter)) {
			hasLetter = true;
		}
	}
	// at least one number
	let hasNumber: boolean = false;
	const numbers: string = '0123456789';
	for (const number of numbers) {
		if (password.includes(number)) {
			hasNumber = true;
		}
	}

	const validPassword: boolean = hasNumber && hasLetter && validLength;
	return validPassword;
};

export default validatePassword;
