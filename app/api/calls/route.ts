import { NextApiRequest, NextApiResponse } from 'next';
import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';

const Bucket = process.env.AWS_BUCKET_NAME;
const s3 = new S3Client({
 region: process.env.AWS_REGION,
});

interface fileResponseObject {
    Key: string,
    LastModified: string,
    ETag: string,
    Size: number,
    StorageClass: string,
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 if (req.method === 'GET') {
    try {
      const response = await s3.send(new ListObjectsCommand({ Bucket, Prefix: 'leaping-recordings-exe/' }));
      const files = response.Contents?.map((item: fileResponseObject) => (item)) || [];
      res.status(200).json(files);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch files from S3' });
    }
 } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
 }
}