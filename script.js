export const generatePassword = (length, options) => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let setChar = '';
    if (options.includeUppercase) setChar += uppercase;
    if (options.includeLowercase) setChar += lowercase;
    if (options.includeNumbers) setChar += numbers;
    if (options.includeSpecialChars) setChar += specialChars;

    if (setChar === '') {
        throw new Error('At least one character type must be selected.');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * setChar.length);
        password += setChar[randomIndex];
    }

    return password;
};