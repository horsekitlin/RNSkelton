import isEmpty from "lodash/isEmpty";

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email can't be empty."
  if (!re.test(email)) return 'Ooops! We need a valid email address.'
  return ''
}

export function phoneVaidator(phoneNumber) {
  if (isEmpty(phoneNumber)) return "Phone can't be empty";
  if (!phoneRegExp.test(phoneNumber)) return 'We need a valid phone number';
  return '';
}
