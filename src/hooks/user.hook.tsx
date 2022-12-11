import { useDispatch, useSelector } from "react-redux";
import { selectUser, fetchUser, updateUser as _updateUser, updateUserBillingDetail as _updateUserBillingDetail, updateUserPassword as _updateUserPassword, fetchUsersTrainings, adminUpdateBanner, getUserOrderHistory } from "src/app/User/user.slice";
import { BannerData, UserBillingDetail, UserInformation } from "src/app/User/user.types";


const useUser = () => {
    const dispatch = useDispatch<any>();
    const user = useSelector(selectUser);
    const refetchUser = () => dispatch(fetchUser());

    const updateUser = (data: UserInformation) => dispatch(_updateUser(data));

    const updateUserBillingDetail = (data: UserBillingDetail) => dispatch(_updateUserBillingDetail(data));

    const updateUserPassword = (newPassword: string) => dispatch(_updateUserPassword(newPassword))

    const getUsersTrainings = () => dispatch(fetchUsersTrainings());

    const getOrderHistory = () => dispatch(getUserOrderHistory());

    return {
        user,
        refetchUser,
        updateUser,
        updateUserBillingDetail,
        updateUserPassword,
        getUsersTrainings,
        adminUpdateBanner: (data: BannerData) => dispatch(adminUpdateBanner(data)),
        getOrderHistory
    }
}

export default useUser;

