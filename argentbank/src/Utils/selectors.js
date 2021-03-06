// the differents selector used with the useSelector hook to retrive state properties
export const selectUserLogin = (state) => state.user.connected

export const selectUserData = (state) => state.user.userData

export const selectJWTtoken = (state) => state.user.JWTtoken

export const selectFirstName = (state) => state.user.userData.firstName

export const selectLastName = (state) => state.user.userData.lastName