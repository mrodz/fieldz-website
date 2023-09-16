import { Auth } from 'aws-amplify';
import { writable } from "svelte/store";

import type { CognitoUser } from '@aws-amplify/auth';

export type User = CognitoUser & {
	attributes: {
		email: string,
		email_verified: string,
		name: string,
		picture: string,
		sub: string,
	},
};

// import { toastStore } from '@skeletonlabs/skeleton';

export const currentUser = writable<Promise<User> | undefined>(undefined);

export const removeUser = () => {
	currentUser.set(undefined);
}

export const pollUser = async () => {
	try {
		const user = Auth.currentAuthenticatedUser();

		console.log(`$$$ ${user}`);

		currentUser.set(user);
	} catch (error) {
		console.log(error);
		removeUser();
	}
} 

export function validatePassword(password: string) {
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

export function validateEmail(email: string) {
	if (email.length === 0) {
		throw "Please enter an email that we can verify"
	}

	// RFC-Compliant thanks to: https://stackoverflow.com/a/201378 
	const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

	if (!EMAIL_REGEX.test(email)) {
		throw "This can't be a valid email";
	}
}

export function validateFirstName(firstName: string) {
	if (firstName.length === 0) {
		throw "Please enter your first name";
	}
}

export function validateLastName(lastName: string) {
	if (lastName.length === 0) {
		throw "Please enter your last name";
	}
}

export type SignUpValidation = {
	messages: string[][];
	errorCount: number;
};

export function validateSignUpParamsCorrectness(firstName: string, lastName: string, email: string, password: string): SignUpValidation {
	let result: SignUpValidation = {
		messages: [],
		errorCount: 0,
	};

	try {
		validateFirstName(firstName);
	} catch (message) {
		result.messages[0] = [message as string];
		result.errorCount++;
	}

	try {
		validateLastName(lastName);
	} catch (message) {
		result.messages[1] = [message as string];
		result.errorCount++;
	}

	try {
		validateEmail(email);
	} catch (message) {
		result.messages[2] = [message as string];
		result.errorCount++;
	}

	try {
		validatePassword(password);
	} catch (message /* s (plural) */) {
		// we're expecting to catch a string[]
		// this is messy, but this validation solution doesn't
		// need to be outstanding because it's not going to be used
		// outside of the login form.
		result.messages[3] = message as string[];
		result.errorCount += (message as string[])?.length!;
	}

	return result;
}

