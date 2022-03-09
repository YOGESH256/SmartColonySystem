import express from 'express'
const router = express.Router()
import {getPropertyData , addPropertyData ,addReviewData , login , register ,
  allReviewsByType , getUser , getFiles , UploadFile , documentData , getAllRequest , tenantData , statusData , getTenantData} from '../controllers/Controller.js'
import {workerlogin , workerregister , getWorker , workerValidation,getWorkerByService,order} from '../controllers/ServicesController.js'
import multer from 'multer'
import passport from 'passport';
import {ensureAuthenticated ,forwardAuthenticated } from '../middleware/auth.js'




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
router.get('/allreviews'   ,  allReviewsByType)
router.post('/login' ,  login)
router.post('/register' , register)
router.get('/user'   ,  getUser)

router.get('/getAllRequest' , getAllRequest)
router.get("/api/getFiles",)
router.post("/tenant/register" ,  tenantData );
router.post("/tenant/status" , statusData );
router.post("/api/uploadFile" , upload.single("myFile"), UploadFile )
router.get('/getalltenants'   ,  getTenantData)



// Worker Routes

router.post('/workerlogin' ,    workerlogin)
router.post('/workerregister' , workerregister)
router.get('/worker' ,  getWorker)
router.post('/workervalidate' ,  workerValidation)
router.post('/getWorkerByService', getWorkerByService)
router.post('/order', order)





export default router
