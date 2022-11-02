import { useDispatch, useSelector } from "react-redux";
import { login as _login, register as _register, selectUser, logout as _logout } from "src/app/User/user.slice";
import { UserCredentials } from "src/app/User/user.types";


const useAuth = () => {
    const dispatch = useDispatch<any>();
    const user = useSelector(selectUser);

    const login = (credendtials: UserCredentials) => dispatch(_login(credendtials));
    const register = (credendtials: UserCredentials) => dispatch(_register(credendtials));
    const logout = () => dispatch(_logout());
    const error = {
        IsError: user.AuthProcess.IsError,
        ErrorMessage: user.AuthProcess.ErrorMessage
    }
    return {
        user,
        login,
        register,
        error,
        logout
    }
}

export default useAuth;

