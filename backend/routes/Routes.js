import express from 'express'
const router = express.Router()
import {getPropertyData , addPropertyData ,addReviewData , login , register , getUser , getFiles , UploadFile , documentData , getAllRequest} from '../controllers/Controller.js'
import multer from 'multer'




const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "files");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${file.originalname}`);
  },
});




const multerFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[1] === "pdf") {
    cb(null, true);
  } else {
    cb(new Error("Not a PDF File!!"), false);
  }
};

//Calling the "multer" Function
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});


router.get('/brochure' , getPropertyData);
router.post('/property/add' , addPropertyData);
router.post('/request' , documentData);
router.post('/addreview' , addReviewData);
router.post('/login' , login)
router.post('/register' , register)
router.get('/user' , getUser)
router.get('/getAllRequest' , getAllRequest)
router.get("/api/getFiles",)
router.post("/api/uploadFile" , upload.single("myFile"), UploadFile )








export default router
