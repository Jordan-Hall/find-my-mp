import { S3 } from 'aws-sdk';
import { IFileStorage } from './file-storage.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class S3File implements IFileStorage {
    private s3: S3;
    private bucketName: string;
    constructor(accessKeyId: string, secretAccessKey: string, bucketName: string) {
        this.s3 = new S3({accessKeyId, secretAccessKey});
        this.bucketName = bucketName;
    }

    async saveFile(key: string, file: NodeJS.ReadableStream): Promise<boolean> {
        try {
            await this.s3.upload({Key: key, Bucket: this.bucketName, Body: file}).promise();
            return true;
        } catch (error) {
            return false;
        }
    }
    
    async getFile(key: any): Promise<NodeJS.ReadableStream> {
        return this.s3.getObject({ Bucket: this.bucketName, Key: key }).createReadStream();
    }
}