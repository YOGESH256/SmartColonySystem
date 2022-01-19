import mongoose from 'mongoose'
import dotenv from 'dotenv'
import tenant from './data/Tenantdata.js'
import Tenant from './models/Tenant.js'
import connectDB from './connect.js';



dotenv.config();

connectDB()

const importData  = async () =>{
  try {
    connectDB()
    await Tenant.deleteMany()




    const sampleProperty = tenant.map(propert => {
      return {...propert}
    })

    await Tenant.insertMany(sampleProperty)

    console.log('Data imported')
    process.exit()


  } catch (e) {
    console.error(e.message);
    process.exit(1)

  }
}


const destroyData = async() => {
  try {
    await Tenant.deleteMany()



    console.log('Data Destroyed')
    process.exit()


  } catch (e) {
    console.error(e.message);
    process.exit(1)

  }


}
if(process.argv[2] === "-d")
{
  destroyData()
}
else {
  importData()
}
