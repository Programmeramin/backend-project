import multer from "multer";


// create multer configure
const storage = multer.diskStorage({
      filename : (cb, req, file) =>{
        cb(null, Date.now() + "_" + file.filename)
      }
});

    
// user photo
export const userPhoto = multer({storage}).single("userphoto");