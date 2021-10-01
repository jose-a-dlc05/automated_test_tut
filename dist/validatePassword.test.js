"use strict";
const validatePassword = require('./validatePassword');
test('returns false for empty password', () => {
    expect(validatePassword('')).toBe(false);
});
