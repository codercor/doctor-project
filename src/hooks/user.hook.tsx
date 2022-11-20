import { useDispatch, useSelector } from "react-redux";
import { selectUser, fetchUser, updateUser as _updateUser, updateUserBillingDetail as _updateUserBillingDetail, updateUserPassword as _updateUserPassword } from "src/app/User/user.slice";
import { UserBillingDetail, UserInformation } from "src/app/User/user.types";


const useUser = () => {
    const dispatch = useDispatch<any>();
    const user = useSelector(selectUser);
    const refetchUser = () => dispatch(fetchUser());

    const updateUser = (data: UserInformation) => dispatch(_updateUser(data));

    const updateUserBillingDetail = (data: UserBillingDetail) => dispatch(_updateUserBillingDetail(data));

    const updateUserPassword = (newPassword:string)=>dispatch(_updateUserPassword(newPassword))

    return {
        user,
        refetchUser,
        updateUser,
        updateUserBillingDetail,
        updateUserPassword
    }
}

export default useUser;

