import ApiProvider from "../Api/ApiPorvider";

import { logIn, setUser, logOut } from "./reducers/userReducer";

import { useDispatch } from "react-redux";

function RememberLogin() {
    const dispatch = useDispatch()

    async function loginInRememeberUser() {
        const JWTtoken = localStorage.getItem("JWTtoken") // retrieve the JWTtoken from the localStorage

        if (JWTtoken) {
            const response = await new ApiProvider().getUserProfileData(JWTtoken)

            if (response.status !== 200) {
                dispatch(logOut()) // if error dispatch a logout
                sessionStorage.clear() // and clear the localStorage
            }
            dispatch(logIn(JWTtoken)) // dispatch the token if a token is stored in the localStorage
            dispatch(setUser(response.data.body)) // and dispatch the response
        }
    }
    loginInRememeberUser()
}

export default RememberLogin