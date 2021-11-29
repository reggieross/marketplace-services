import { Handler } from 'aws-lambda';
import 'reflect-metadata';
import {lambdaServer} from "./GraphQL";

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this
// is likely due to a compressed response (e.g. gzip) which has not
// been handled correctly by aws-serverless-express and/or API
// Gateway. Add the necessary MIME types to binaryMimeTypes below


export const handler: Handler = lambdaServer.createHandler();