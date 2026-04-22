import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js"
import { sendFriendRequest } from "../controllers/user.controller.js"
import {getRecommendedUsers,getMyFriends, sendFriendRequest,acceptFriendRequest,getFriendRequest} from "../controllers/user.controller.js"
const router=express.Router()
//apply auth middleware to all routes
router.use(protectRoute)
router.get('/',getRecommendedUsers)
router.get('/',getMyFriends)
router.post("/friend-request/:id",sendFriendRequest)
router.put("/friend-request/:id/accept",acceptFriendRequest)
router.get("/friend-requests",getFriendRequest)
export default router;
