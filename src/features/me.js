import { createSlice } from "@reduxjs/toolkit"

const { reducer, actions } = createSlice({
  name: "me",
  initialState: null,
  reducers: {
    setMe(state, action) {
      console.log("********************", action)
      return action.payload
    },
    logout() {
      return null
    },
  },
})

export const { setMe, logout } = actions

export default reducer
