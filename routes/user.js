import express from 'express';
import { createUser, getAllUser } from '../controllers/userController.js';


// express router
const router = express();


// router
router.route("/").get(getAllUser);
router.route("/").post(createUser);


// export default router
export default router;