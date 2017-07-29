#!/bin/bash

set -eo pipefail

source ./scripts/utils.sh

echo "--- Building app"
echo $POLLTAL_API

echo "--- Building app"
yarn install
yarn run build

VERSION=$(package_version)

echo "--- Building docker image"
docker build \
  --pull \
  --tag cityofsurrey/polltal-app:${VERSION} \
  .
