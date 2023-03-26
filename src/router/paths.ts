interface Routes {
  home: string;
  patterns: string;
  about: string;
  contact: string;
  account: string;
  login: string;
  register: string;
  cart: string;
}

const paths: Routes = {
  home: "/home",
  patterns: "/patterns",
  about: "/about",
  contact: "/contact",
  account: "/account",
  login: "/account/login",
  register: "/account/register",
  cart: "/cart",
};

export default paths;
