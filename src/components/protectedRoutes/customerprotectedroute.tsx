import {
    ReactNode,
    useEffect,
    useState,
    useContext,
    createContext,
  } from "react";
  import { useNavigate } from "react-router-dom";
  import axios from "axios";
  interface ProtectedRouteProps {
    children: ReactNode;
  }
  interface Customer {
    id: string;
    FirstName: string;
    LastName: string;
    email: string;
    password: string;
    phoneNumber: Number;
    
  }

  interface AuthContextProps {
    customerData?: Customer;
  }
  const AuthContext = createContext<AuthContextProps>({});
   
  export const useAuth = () => {
    return useContext(AuthContext);
  };
  export function CustomerProtectedRoute({ children }: ProtectedRouteProps) {
    const navigate = useNavigate();
    const [customerData, setCustomerData] = useState<Customer>();
   
    useEffect(() => {
      async function checkToken() {
        const authp = await axios.get(
          "http://localhost:4000/protected-routes/customer",
          {
            withCredentials: true,
          }
        );
        console.log(authp,authp.data.noTokenError, authp.data.tokenExpiredError, authp.data.verificationError )
           
        if 
          (
            authp.data.noTokenError ||
            authp.data.tokenExpiredError ||
            authp.data.verificationError
        ) {
          navigate("/customerlogin");
        } else if (authp.status === 200 && authp.data.customer) {
          console.log("authp.data.customer: ", authp.data.customer);
          setCustomerData(authp.data.customer);
        }
      }
      checkToken();
      return;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // check if the token is present and verify it from the backend
    const contextValue: AuthContextProps = {
      customerData,
    };
   
    return (
      <AuthContext.Provider value={contextValue}>
        <>{children}</>
      </AuthContext.Provider>
    );
  }