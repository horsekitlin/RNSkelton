export const handleYupSchema = (schema, payload, abortEarly) => {
  return schema.validateSync(payload, {abortEarly});
};

export const handleYupErrors = (errors) => {
  return errors.inner.reduce((currentError, nextError) => {
    const name = nextError.path;
    const message = nextError.message;
    return {...currentError, [name]: message};
  }, {});
};

export const validate = (schema, payload, abortEarly = false) => {
  try {
    handleYupSchema(schema, payload, abortEarly);
    return {isValid: true, errors: {}};
  } catch (error) {
    const errors = handleYupErrors(error);
    return {isValid: false, errors};
  }
};
