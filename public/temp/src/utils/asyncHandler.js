const asyncHandler=()=>{
    return (err,rq,res,next)=>{
       Promise.resolve(requestHandler(err,req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}

// const asyncHandler=()=>{}
// const asyncHandler=(func)=>()=>{}
// const asyncHandler=(func)=>async()=>{}

// const asyncHandler=(fn)=>async(err,req,res,next)=>{
//     try{
//         await fn(err,req,res,next)
//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }