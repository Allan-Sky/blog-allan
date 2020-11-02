import multer from 'multer'
import path from 'path'
import multerS3 from 'multer-s3'
import aws from 'aws-sdk'


const storageType = {
    local: multer.diskStorage({
        destination: path.resolve(__dirname, '..' , '..' , 'tmp'),
        filename: (req , file, cb) =>  {
            const fileName = Date.now() + '-' + file.originalname.split(' ').join('')
            file.location = `http://localhost:3030/files/${fileName.split(' ').join('')}`
            cb(null, fileName)
        }
    }),
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'blog-allan',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req , file, cb) =>  {
            const fileName = Date.now() + '-' + file.originalname.split(' ').join('')
            cb(null, fileName)
        }
    })
}

const multerConfig = {
    storage: storageType['s3'],
    limits: {
        fileSize: 10 * 1024 * 1024
    },
    fileFilter: (req: any, file: any, cb: any) => {
        const allowMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ]

        if(allowMimes.includes(file.mimetype)){
            cb(null, true)
        }else {
            cb(new Error("Invalid file type"))
        }
    }
} 

export default multer(multerConfig)