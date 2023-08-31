const Gallery = require('../models/Gallery')

// get clients
exports.getGallery = async(req,res)=>{
    console.log(req.params)
    const data =await Gallery.find({})
    console.log(data)
    res.json({data})
}