if [ "$BUILD_CATALOG_GQL" = "true" ]
then
echo "Starting Catalog GQL build"
cd ./catalog-gql || exit
npm run build
else
echo "No Catalog GQL build needed"
fi
