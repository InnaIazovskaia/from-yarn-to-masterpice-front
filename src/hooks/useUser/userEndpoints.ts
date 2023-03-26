interface UserEndpoints {
  userEndpoint: string;
  loginEndpoint: string;
}

const userEndpoints: UserEndpoints = {
  userEndpoint: "/user",
  loginEndpoint: "/login",
};

export default userEndpoints;
