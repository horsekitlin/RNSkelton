export const handleYupSchema = async (schema, payload) =>
  schema.validate(payload, { abortEarly: false });

export const handleYupErrors = errors => {
  return errors.inner.reduce((currentError, nextError) => {
    const name = nextError.path;
    const message = nextError.message;
    return {
      ...currentError,
      [name]: message
    }
  }, {})
}