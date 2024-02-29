import { Promise } from "mongoose"

// promises wala code
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}



// asyncHandler promises wala bhi ho sakta hae and trycatch wala bhi hosakta ha
// asyncHandler aek higher function order hae jo functions ko as a parameter bhi accept kar saktae hae ya phir usko return kar saktae hae ya phir asa a varaible hi treat kartae hae

// trycatch code

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
        
//     }
// }