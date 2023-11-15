import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="bg-amber-600 w-20" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;