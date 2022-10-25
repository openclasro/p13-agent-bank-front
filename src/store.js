import { configureStore } from "@reduxjs/toolkit"
import meReducer from './features/me'



export default configureStore({
  reducer: {
    me: meReducer,
  },
})
