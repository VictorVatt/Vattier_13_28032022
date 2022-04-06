import ApiProvider from "../Api/ApiPorvider";

import { logIn, setUser, logOut } from "./reducers/userReducer";

import { useDispatch } from "react-redux";

function RememberLogin() {
    const dispatch = useDispatch()

    async function loginInRememeberUser() {
        const JWTtoken = sessionStorage.getItem("JWTtoken")

        if (JWTtoken) {
            const response = await new ApiProvider().getUserProfileData(JWTtoken)

            if (response.status !== 200) {
                dispatch(logOut())
                sessionStorage.clear()
            }
            dispatch(logIn(JWTtoken))
            dispatch(setUser(response.data.body))
        }
    }
    loginInRememeberUser()
}

export default RememberLogin