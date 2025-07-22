import { Router } from 'express'
import { AuthController } from '../controllers/AuthController.js'
import authMiddleware from '../middlewares/Authenticate.js'
import ProfileController from '../controllers/ProfileController.js'
import { NewsController } from '../controllers/NewsController.js'
import redisCache from '../DB/redis.config.js'
const router = Router()

// Auth Routes : User Login API 
router.post("/auth/register", AuthController.register); // ✅ correct name
router.get("/auth/login", AuthController.login);
//sending email 
router.get("/send-email",AuthController.sendTestEmail)


//protected routes
//to get the current logged in user
router.get("/profile", authMiddleware, ProfileController.index)
//to update the profile picture of the user
router.put("/profile/:id", authMiddleware, ProfileController.update)

//news routes
//will expire after 30 secs
router.get("/news", redisCache.route({expire:60*30}) ,NewsController.index)
//creating new news
router.post("/news", authMiddleware, NewsController.store)
//getting a single news
router.get("/news/:id", NewsController.show)
//updating news
router.put("/news/:id",authMiddleware, NewsController.update)
//deleting news
router.delete("/news/:id",authMiddleware, NewsController.destroy)




export default router