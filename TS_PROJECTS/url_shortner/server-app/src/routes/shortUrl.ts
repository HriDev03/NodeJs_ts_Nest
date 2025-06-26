import  express  from "express";
import { createUrl, deleteUrl, getAllUrl, getUrl } from "../controllers/shortUrl";
const router=express.Router()

//router to create a short url , when ever we are getting a long url we want to make a short form of it 
// and enter itin the mongo dbdatabase

// to make short url 
router.post("/shorturl",createUrl);
//to show short/full urls 
router.get("/shorturl",getAllUrl);
//when we click on any short url we want the full url 
router.get("/shorturl/:id",getUrl);
//to delete url that we made
router.delete("/shorturl/:id",deleteUrl)
export default router
