import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  return (
    <div>
      {isAuthenticated ? (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}

      {isAuthenticated ? (
        <h2>Welcome to Groot Development</h2>
      ) : (
        <h2>You are not Loggedin</h2>
      )}
    </div>
  );
}

export default Home;
