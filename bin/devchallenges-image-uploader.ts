#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DevchallengesImageUploaderStack } from '../lib/devchallenges-image-uploader-stack';

const app = new cdk.App();
new DevchallengesImageUploaderStack(app, 'DevchallengesImageUploaderStack');
