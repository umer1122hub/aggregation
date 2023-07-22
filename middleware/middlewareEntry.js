const budget = async (req,res,next)=>{
    const data = req.body.name
    if(data != undefined){
        next()
    }
    else{
        res.status(500).json({
            error: "Enter name"
        })
    }
}
module.exports = {budget}