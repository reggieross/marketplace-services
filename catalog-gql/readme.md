Catalog  GQL
-
### Purpose
- This service will provide all the information to display products on the page. It is apart of a 
federation of GQL services so it should only be accessible by the gateway. 

### Structure
- Service
    - handles all business logic
- Repository
    - an abstraction to handle data manipulation if necessary
- DAO 
    - Handles direct data access for a specific entity
### Running
- `npm run start` or `nodemon`

### Testing
- Integration Tests
    - Integration test follow the naming convention `name.ispec.ts`. These will be tests that need to DB in order to run.
    When creating these tests ensure that you create the appropriate migrations and seeds to populate the data with 
    the correct info. If any id's are used ensure they are scoped to the test in question. We don't want to create data
    that is dependent between tests to ensure they don't become flakey
- Unit Tests
    - knexfile.jsThis tests follow the naming convention `name.spec.ts`. These tests are scoped to a function or two. Any dependencies
    that the function in question is using should be mocked and needed. 
- Gateway Smoke Test
    - We want to ensure that this file didn't introduce any new breaking schema changes. We have a shell script that pulls
    the latest gateway and ensures that we can run our updated service against it.
- Contract tests
    - Since the client will be using `apollo-client-codegen` it will inspect this schema for any changes and update the client
    service factory to match any schema updates. So if new changes were made, the client will always know before a new version is pushed.
    This however doesn't stop a new new service from being pushed with breaking schema changes. :(
    