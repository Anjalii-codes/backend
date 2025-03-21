const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler()).catch((err) => next(err))
        
    }


}
export {asyncHandler}

/*const asyncHandler=(requestHandler)=> async(req,res,next) =>{
    try{
        await requestHandler(req,res,next)

    }catch(error){
        res.status(err.code || 500).json({
            success:false,
            message:err.message
        })
    }
}*/