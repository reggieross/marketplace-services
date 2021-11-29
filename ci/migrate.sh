APP_LIST=("catalog-gql");


if [ -z ${DB_USERNAME+x} ]; then DB_USERNAME=integration-test-user; else echo "DB_USERNAME is set to"; fi
if [ -z ${DB_PASSWORD+x} ]; then DB_PASSWORD=passw0rd; else echo "DB_PASSWORD is set to"; fi
if [ -z ${DB_HOST+x} ]; then DB_HOST=localhost; else echo "DB_HOST is set to"; fi



for APP in "${APP_LIST[@]}"
do
  DB_NAME="public";
  case $APP in "catalog-gql") DB_NAME="catalog";;
  "new-app") DB_NAME="another-db";;
  *) echo "public";;
  esac

  APP_PATH="./$APP"
  cd "$APP_PATH" || exit
  RUN_MIGRATION="DB_NAME=$DB_NAME APP_NAME=$APP DB_USERNAME=$DB_USERNAME DB_PASSWORD=$DB_PASSWORD DB_HOST=$DB_HOST knex migrate:latest --knexfile ./knexfile.js"
  eval "$RUN_MIGRATION";
done


exit 0

