import { configureStore } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export const meSlice = createSlice({
  name: "me",
  initialState: null,
  reducers: {
    signIn(state, action) {
      return { token: action.payload }
    },
    setMe(state, action) {
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
