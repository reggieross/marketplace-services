echo "Checking for changed files"
# latest commit
LATEST_COMMIT=$(git rev-parse HEAD)

# latest commit where bff was changed
CATALOG_GQL_CHANGE_COMMIT=$(git log -1 --format=format:%H --full-diff bff)

# latest commit ui was changed
SHARED_CHANGE_COMMIT=$(git log -1 --format=format:%H --full-diff shared)

# shellcheck disable=SC2086
if [[ $SHARED_CHANGE_COMMIT = "$LATEST_COMMIT" ]]
then
  echo "The fire nation attacked"
  {
    echo "export BUILD_CATALOG_GQL=true"
  } >> ./ci/new-env-vars
  exit 0
fi

if [ "$CATALOG_GQL_CHANGE_COMMIT" = "$LATEST_COMMIT" ]
then
  echo "The BFF Changed"
  echo "export BUILD_CATALOG_GQL=true" >> ./ci/new-env-vars
fi



