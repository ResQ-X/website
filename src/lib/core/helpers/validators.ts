// VALIDATORS
// ==========

// USERNAME VALIDATOR
export function validateUserName(userName: string): boolean {
    const regex = /^[a-zA-Z0-9_]{5,}$/;
    return regex.test(userName);
}