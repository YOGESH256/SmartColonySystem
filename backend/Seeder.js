import mongoose from 'mongoose'
import dotenv from 'dotenv'
import property from './data/Propertydata.js'
import Property from './models/Property.js'
import connectDB from './connect.js';



dotenv.config();

connectDB()

const importData  = async () =>{
  try {
    connectDB()
    await Property.deleteMany()




    const sampleProperty = property.map(propert => {
      return {...propert}
    })

    await Property.insertMany(sampleProperty)

    console.log('Data imported')
    process.exit()


  } catch (e) {
    console.error(e.message);
    process.exit(1)

  }
}


const destroyData = async() => {
  try {
    await Property.deleteMany()



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
