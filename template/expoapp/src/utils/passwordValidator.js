import * as yup from 'yup';

const passwordExp = /^(?=.*\d)(?=.*[a-z]).{6,30}$/
export const passwordSchema = yup.string().required("Password can't be empty.").matches(passwordExp, "Password format fial.");

export function passwordValidator(password) {
  return passwordSchema.validate(password);
}
