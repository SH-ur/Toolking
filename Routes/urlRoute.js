const {Router}= require('express');
const {getUrl} = require('../Controllers/getTheUrl');
const router = Router();

router.get('/getThatUrlShortened', async(req, res)=>{
    try{
const theInformation = await getUrl();

res.status(200).json(theInformation);
    }catch(error){
res.status(400).json({error: error.message})
    }
})

module.exports= router;