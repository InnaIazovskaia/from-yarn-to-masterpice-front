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

export const validateEmail = (value: string): string => {
  let error = "";

  if (!value) {
    error = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }

  return error;
};
