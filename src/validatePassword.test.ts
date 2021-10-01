import validatePassword from './validatePassword';

test('returns false for empty password', () => {
	expect(validatePassword('')).toBe(false);
});

// returns false for password without numbers

// returns false for password without letters

// returns true for password with numbers, letter, >= 8 characters

// returns false for password with numbers, letters, < 8 characters

// returns true for password with numbers, uppercase letters, and >= 8 characters

// returns true for password with numbers, uppercase and lowercase letters, and >= 8 characters
