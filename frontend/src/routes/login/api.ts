function validatePicture(picture: unknown) {
	throw "Not sure how to validate a picture yet";
}

function validatePassword(password: string) {
	let messages: Array<string> = [];

	if (password.length < 7) 
		messages.push("Password must be at least 7 characters");

	if (password.toUpperCase() == password) 
		messages.push("Password must contain a lower case letter");

	if (password.toLowerCase() == password) 
		messages.push("Password must contain an upper case letter");

	if (!/[0-9]/.test(password)) 
		messages.push("Password must contain a number");

	if (password.trim() != password) 
		messages.push("Password must not contain a leading or trailing space");

	if (messages.length != 0) 
		throw messages;
}

function validateEmail(email: string) {
	if (email.length === 0) {
		throw "Please enter an email that we can verify"
	}

	// RFC-Compliant thanks to: https://stackoverflow.com/a/201378 
	const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

	if (!EMAIL_REGEX.test(email)) {
		throw "This can't be a valid email";
	}
}

function validateFirstName(firstName: string) {
	if (firstName.length === 0) {
		throw "Please enter your first name";
	}
}

function validateLastName(lastName: string) {
	if (lastName.length === 0) {
		throw "Please enter your last name";
	}
}

export const SIGN_UP_FIELDS_VALIDATED = 5;

export function validateSignUpParamsCorrectness(firstName: string, lastName: string, email: string, password: string, picture: unknown): string[][] {
	let messages: string[][] = [];
	
	try {
		validateFirstName(firstName);
	} catch (message) {
		messages[0] = [message];
	}

	try {
		validateLastName(lastName);
	} catch (message) {
		messages[1] = [message];
	}

	try {
		validateEmail(email);
	} catch (message) {
		messages[2] = [message];
	}

	try {
		validatePassword(password);
	} catch (message /* s (plural) */) {
		// we're expecting to catch a string[]
		// this is messy, but this validation solution doesn't
		// need to be outstanding because it's not going to be used
		// outside of the login form.
		messages[3] = message;
	}

	try {
		validatePicture(picture);
	} catch (message) {
		messages[4] = [message];
	}

	return messages;
}

