const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController')

module.exports = function (){
    // get gallery Get
    router.get('/gallery', galleryController.getGallery)
    return router
}