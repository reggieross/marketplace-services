APP_LIST=("catalog-gql");

for APP in "${APP_LIST[@]}"
do
  DB_NAME="public";
  case $APP in "catalog-gql") DB_NAME="catalog";;
  "new-app") DB_NAME="another-db";;
  *) echo "public";;
  esac

  APP_PATH="./$APP"
  cd "$APP_PATH" || exit
  RUN_MIGRATION="DB_NAME=$DB_NAME APP_NAME=$APP DB_USERNAME=integration-test-user DB_PASSWORD=passw0rd DB_HOST=localhost knex seed:run --knexfile ./knexfile.local.js"
  eval "$RUN_MIGRATION";
done


exit 0

