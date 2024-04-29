import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const Bucket = process.env.AWS_BUCKET_NAME;
const Prefix = process.env.AWS_FOLDER_NAME;
console.log("TCL: Bucket", Bucket, Prefix)


interface fileResponseObject {
  Key: string,
  LastModified: string,
  ETag: string,
  Size: number,
  StorageClass: string,
}

const input = { // ListObjectsV2Request
  Bucket: Bucket, // required
  Prefix: Prefix
};

const config = {
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  }
};
const client = new S3Client(config);

console.log("TCL: s3", client)

export async function GET(request: Request) {
	console.log("TCL: GET -> request", request)
  try {
    const response = await client.send(new ListObjectsCommand({ Bucket, Prefix })).promise();
		console.log("TCL: GET -> response", response)
    const files = response.Contents.map((file) => (file));
    return NextResponse.json({files})
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 400 })
  }
}