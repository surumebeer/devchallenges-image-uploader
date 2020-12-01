import { Cors, RestApi, LambdaIntegration, Integration } from '@aws-cdk/aws-apigateway';
import { Bucket } from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';

const bucketName: string = 'image-uploader-bucket';

export class DevchallengesImageUploaderBackendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3
    const imageBucket = new Bucket(this, bucketName);

    // ApiGateway
    const api = new RestApi(this, 'RestApi', {
      restApiName: 'DevchakkengesImageUploaderBackend',
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
        allowCredentials: true,
        allowMethods: ['POST']
      },
      description: 'Devchallengesの画像POST用API'
    });

    // Lambda Function
    const uploadImageFunc = new NodejsFunction(this, 'devChallengeUploadFunc', {
      entry: './src/backend/src/index.ts',
      handler: 'handler',
      minify: true,
      environment: {
        "BUCKET_NAME": imageBucket.bucketName
      }
    });

    // Lambda Functionの接続先
    const uploadImageFuncInteg = new LambdaIntegration(uploadImageFunc);

    // API Gatewayにアタッチ&接続
    const imagePath = api.root.addResource('image');
    imagePath.addMethod("POST", uploadImageFuncInteg);

    // S3への権限をLambdaにアタッチ
    imageBucket.grantReadWrite(uploadImageFunc);
  }
}
