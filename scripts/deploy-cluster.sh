#!/bin/bash

set -eo pipefail

source ./scripts/utils.sh

echo "Checking env variables"
envs=("POLLTAL_API_DB" "POLLTAL_API")
for env in ${envs[*]};
do
  if [[ -z "${!env}" ]]; then
    echo "${env} env variable is not defined"
    exit 1
  fi
done

echo "--- Deploying new version"
docker stack deploy \
  --compose-file docker-compose.deploy.yml \
  polltal --with-registry-auth
