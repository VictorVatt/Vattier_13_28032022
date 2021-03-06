import { createReducer, createAction } from '@reduxjs/toolkit'

const initialState = { // set an initial state for the feature
    connected: false,
    JWTtoken: null,
    userData: {},
}
// set the differents actions creators
export const logIn = createAction('logIn')
export const setUser = createAction('setUser')
export const updateUser = createAction('updateUser')
export const logOut = createAction('logOut')

export default createReducer(initialState, (builder) =>
    builder
    .addCase(logIn, (draft, JWTtoken) => { // 
        if (draft.connected === false) {
            draft.connected = true
            draft.JWTtoken = JWTtoken.payload
            return
        }
        if (draft.connected === true) {
            return  
        }
    })
    .addCase(logOut, (draft) => {
        if (draft.connected === true) {
            draft.connected = false
            draft.userData = {}
            draft.JWTtoken = null
            return
        }
        if (draft.connected === false) {
            return
        }
    })
    .addCase(setUser, (draft, userData) => {
        draft.userData = userData.payload
    })
    .addCase(updateUser, (draft, userData) => {
        draft.userData.firstName = userData.payload.firstName
        draft.userData.lastName = userData.payload.lastName
    })
)