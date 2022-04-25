
import S3FileUpload from 'react-s3';
 
//Optional Import
import { uploadFile } from 'react-s3';
 
const config = {
    bucketName: 'stock-listing-img',
    dirName: 'images', /* optional */
    region: 'us-west-1',
    //i dont have access keys
    accessKeyId: 'AKIATRSR2YSAYN5LZKKH',
    secretAccessKey: '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',
}