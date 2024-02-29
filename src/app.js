import express from "express"
import cors from "cors"
// cookie-parsor ka kam itna sa hae kae mae mere server sae user ka jo browser hae uskae andar ki cookies ko access kar paoun and uski cookies set bhi kar paoun
import cookieparser from "cookie-parser"

const app  = express ()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true

}))
// configurations
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieparser())

export {app}


// 