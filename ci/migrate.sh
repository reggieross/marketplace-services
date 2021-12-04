#!/bin/bash
set -e

APP_LIST=("catalog-gql");

runCatalogGQLMigation () {
  cd ./catalog-gql
#  if [ -z ${DB_USERNAME+x} ]; then export DB_USERNAME=integration-test-user; else echo "DB_USERNAME is set"; fi
#  if [ -z ${DB_PASSWORD+x} ]; then export DB_PASSWORD=passw0rd; else echo "DB_PASSWORD is set"; fi
#  if [ -z ${DB_HOST+x} ]; then export DB_HOST=localhost; else echo "DB_HOST is set"; fi
#  if [ -z ${DB_NAME+x} ]; then export DB_NAME=MarketplaceCatalog; else echo "DB_NAME is set"; fi
  npm i knex
  npm run migrate
}

newAppMigation () {
  echo "Running migration for new App"
}

runMigrationForApp () {
  APP=$1
  case $APP in "catalog-gql") runCatalogGQLMigation;;
  "new-app") newAppMigation;;
  *) echo "public";;
  esac
}


for APP in "${APP_LIST[@]}"
do
  runMigrationForApp "$APP"
done

exit 0

