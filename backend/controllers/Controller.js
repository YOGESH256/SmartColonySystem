import Property from '../models/Property.js'




const getPropertyData = async(req, res) => {
  const products = await Property.find({});
  console.log(products);
  res.json(products)
}

const addPropertyData = async(req, res) => {
  const op = req.body;
  console.log(op);

const ol = new Property(op);

await ol.save();

  res.json({
    message: "Added sucessfully"
  });
}





export  {getPropertyData , addPropertyData};
