import { Router } from 'express'
import { AuthController } from '../controllers/AuthController.js'
import authMiddleware from '../middlewares/Authenticate.js'
import ProfileController from '../controllers/ProfileController.js'
import { NewsController } from '../controllers/NewsController.js'
const router = Router()

// Auth Routes : User Login API 
router.post("/auth/register", AuthController.register); // ✅ correct name
router.get("/auth/login", AuthController.login);

//protected routes
//to get the current logged in user
router.get("/profile", authMiddleware, ProfileController.index)
//to update the profile picture of the user
router.put("/profile/:id", authMiddleware, ProfileController.update)

//news routes
router.get("/news",NewsController.index)
//creating new news
router.post("/news", authMiddleware, NewsController.store)
//getting a single news
router.get("/news/:id", NewsController.show)
//updating news
router.put("/news/:id",authMiddleware, NewsController.update)
//deleting news
router.delete("/news/:id",authMiddleware, NewsController.destroy)

export default router