import { createSlice } from '@reduxjs/toolkit'

const { reducer, actions } = createSlice({
    name: "me",
    initialState: null,
    reducers: {
        signIn(state, action) {
        console.log("action", action)
        return { token: action.payload.token }
        },
        setMe(state, action) {
        console.log("********************", action)
        state.profile = action.payload
        return state
        },
        logout() {
        return null
        },
    },
})
  

export const { signIn, setMe, logout } = actions

export default reducer
