#!/bin/bash

error_exit()
{
    echo "$1" 1>&2
    exit 1
}

CODEBUILD_PROJECT_NAME=$1
SOURCE_VERSION=$2

echo "Starting CodeBuild project. Project name is ${CODEBUILD_PROJECT_NAME}. Source version is ${SOURCE_VERSION}"

START_RESULT=`aws codebuild start-build --project-name ${CODEBUILD_PROJECT_NAME} --source-version=${SOURCE_VERSION} --profile deployment`
if [ "$?" != "0" ]; then
    error_exit "Could not start CodeBuild project. Exiting."
else
    echo "Build started successfully."
fi

BUILD_ID=`echo ${START_RESULT} | jq '.build.id' -r`

BUILD_STATUS="IN_PROGRESS"
while [ "$BUILD_STATUS" == "IN_PROGRESS" ]; do
    sleep 10
    echo "Checking build status."
    BUILD=`aws codebuild batch-get-builds --ids ${BUILD_ID} --profile deployment`
    BUILD_STATUS=`echo $BUILD | jq '.builds[0].buildStatus' -r`
    if [ "$BUILD_STATUS" == "IN_PROGRESS" ]; then
        echo "Build is still in progress, waiting..."
    fi
done

if [ "$BUILD_STATUS" != "SUCCEEDED" ]; then
    LOG_URL=`echo $BUILD | jq '.builds[0].logs.deepLink' -r`
    error_exit "Build failed, please review job output. Logs are available at $LOG_URL."
else
    echo "Build succeeded."
fi