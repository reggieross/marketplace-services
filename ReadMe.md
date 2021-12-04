## Goals
- Allow for a monorepo of services of different languages
- Deploy services independently based on changes in specific repos
- Allow for sharing of resources between services of the same language
- Contract test between services

##Setup 
### Catalog GQL
- cd catalog-gql
- npm i
- nodemon


## Resources

## General Notes
- When Configuring the DB I ran into a few issues the main one being the class instance i selected didn't 
match the postgres version I selected. Below is the list of the possible configuation settings available for a 
replication cluster
  - ##### [RDS DB Class configuration](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html)
- When configuring codebuild to pull from github there are a few gotchas
  - OATH doesn't work for github. This setting is primarily meant for bitbucket. When
  I setup my cloudformation I still had to manually go into codebuild and establish a connection to github.
  Hopefully this is fixed soon
 
