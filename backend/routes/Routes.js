import express from 'express'
const router = express.Router()
import {getPropertyData , addPropertyData} from '../controllers/Controller.js'

router.get('/' , getPropertyData);
router.post('/property/add' , addPropertyData);







export default router
