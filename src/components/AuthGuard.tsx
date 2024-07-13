import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ReactNode } from "react";

interface AuthGuardProps {
  component: ReactNode | any;
}

const AuthGuard = ({ component }: AuthGuardProps) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>Redirecting to login page</div>,
  });

  return <Component />;
};

export default AuthGuard;
