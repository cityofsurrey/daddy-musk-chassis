#!/bin/bash

set -eo pipefail

source ./scripts/utils.sh

VERSION=$(package_version)

echo "--- Tagging docker image with version ${VERSION}"
docker tag \
  cityofsurrey/polltal-app:${VERSION} \
  cityofsurrey/polltal-app

echo "--- Pushing docker image to Dockerhub"
docker push cityofsurrey/polltal-app
