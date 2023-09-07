export function handleErrorResponse(payload) {
  if (!payload) {
    return null;
  }
  if (payload.error) {
    console.log('SERVER ERROR', {
      serverError: payload.error.message,
      serverErrorDetails: payload.error
    });
    return {
      serverError: payload.error.message,
      serverErrorDetails: payload.error
    };
  }
  if (payload.errors) {
    console.log('VALIDATION ERROR', {
      serverError: payload.message,
      validationErrors: payload.errors
    });
    return {
      serverError: payload.message,
      validationErrors: payload.errors
    };
  }
  return null;
}

export const clearErrors = {
  serverError: null,
  serverErrorDetails: null,
  validationErrors: null
};
