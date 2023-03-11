export const validateUsername = (value: string): string => {
  let error = "";

  if (!value) {
    error = "Username is required";
  }

  return error;
};

export const validatePassword = (value: string): string => {
  let error = "";

  if (!value) {
    error = "Password is required";
  } else if (value.length < 8) {
    return "Password should be 8 characters minimum";
  }

  return error;
};
