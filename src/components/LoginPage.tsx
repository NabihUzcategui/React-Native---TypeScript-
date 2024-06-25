import {useEffect} from "react";
import {useAuthStore} from "../store/auth.store";

export const LoginPage = () => {
  const authStatus = useAuthStore((state) => state.status);
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  }, []);

  if (authStatus === "checking") {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h3>LoginPage</h3>
      {authStatus === "authenticated" ? (
        <div>
          El usuario esta autenticado como: {JSON.stringify(user, null, 2)}
        </div>
      ) : (
        <div>El usuario no esta autenticado! </div>
      )}
      <br />

      {authStatus === "authenticated" ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login("joe@gmail.com", "123")}>Login</button>
      )}
    </>
  );
};
