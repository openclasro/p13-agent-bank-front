import { configureStore } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export const meSlice = createSlice({
  name: "me",
  initialState: null,
  reducers: {
    signIn(state, action) {
      console.log(action)
      return { token: action.payload.token }
    },
    setMe(state, action) {
      console.log(action)
      state.profile = action.payload
      return state
    },
  },
})

export default configureStore({
  reducer: {
    me: meSlice.reducer,
  },
})
