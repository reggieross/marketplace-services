#!/usr/bin/env bash

docker-compose down -v --remove-orphans

docker-compose up --build -d;

echo -e "${YELLOW}Waiting on gateway to start up${NC}"
sleep 5

docker-compose run catalog-gql npm run test:integration

docker-compose down -v --remove-orphans

exit 0;



