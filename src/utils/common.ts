export function validatePhoneNumber(phoneNumber: string) {
  const internationalPattern = /^\+(\d{1,4})[-.\s]?(\d{1,14})(?:[-.\s]?\d+)*$/;
  const indiaPattern = /^\+91[-.\s]?\d{10}$/;

  if (internationalPattern.test(phoneNumber)) {
    return 'Phone number is valid (international format)';
  } else if (indiaPattern.test(phoneNumber)) {
    return 'Phone number is valid (India format)';
  } else {
    return 'Invalid phone number format';
  }
}
