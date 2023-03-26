interface UserEndpoints {
  userEndpoint: string;
  loginEndpoint: string;
  registerEndpoint: string;
}

const userEndpoints: UserEndpoints = {
  userEndpoint: "/user",
  loginEndpoint: "/login",
  registerEndpoint: "/register",
};

export default userEndpoints;
