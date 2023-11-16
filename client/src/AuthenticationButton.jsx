import LoginButton from "./LoginButton.jsx";
import LogoutButton from "./LogoutButton.jsx";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>;
};

export default AuthenticationButton;
