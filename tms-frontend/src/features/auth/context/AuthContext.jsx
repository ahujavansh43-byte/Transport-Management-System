import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  loginUser,
  logoutUser,
  getCurrentUser,
} from "@/api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] =
    useState(true);

  const login = async (formData) => {
    const res = await loginUser(formData);

    setUser(res.data.data);

    return res;
  };

  const logout = async () => {
    await logoutUser();

    setUser(null);
  };

  const fetchCurrentUser = async () => {
    try {
      const res = await getCurrentUser();

      setUser(res.data.data);

    } catch (error) {

      setUser(null);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    fetchCurrentUser();

  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        fetchCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);