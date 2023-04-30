const {Router} = require('express')
const router = Router()
import { getAllUsers, getUserById, addUser, loginUser, deleteUser, deleteAllUsers, loginTime, updateUserStatus } from '../controllers/userControllers';

router.get("/",getAllUsers)
router.get("/:id", getUserById)
router.post("/add", addUser)
router.post("/login", loginUser)
router.put("/:id", loginTime)
router.put("/dashboard/:id", updateUserStatus)
router.delete("/delete-all", deleteAllUsers)
router.delete("/:id", deleteUser)




module.exports = router;