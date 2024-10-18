import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./features/user/userSlice"
import usersSlice from "./features/user/users/onlineUsers"

export default configureStore({
    reducer: {
        user: userSlice,
        onlineUsers: usersSlice
    },
})