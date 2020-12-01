#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { DevchallengesImageUploaderBackendStack } from "../lib/devchallenges-image-uploader-backend-stack";

const app = new cdk.App();
new DevchallengesImageUploaderBackendStack(
  app,
  "DevchallengesImageUploaderBackendStack"
);
