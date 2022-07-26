const {get_all_prices} = require("./module");

module.exports = {
    GET:async (req,res)=>{
        try{
            const allPrices =  await get_all_prices();
            console.log(allPrices)
            if(allPrices){
                res.status(200).json({success:true,allPrices})
            }else{
                res.status(400).json({success:false,message:'Not Found'})
            }
        }catch (err){
            res.json({success:false,message:err.message})
        }
    }
}