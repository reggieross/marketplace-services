#!/usr/bin/env bash

docker-compose down -v --remove-orphans

docker-compose up --build -d;

echo -e "${YELLOW}Waiting on gateway to start up${NC}"
sleep 3

EXIT_CODE=$(docker inspect $(docker-compose ps -q gateway) --format='{{.State.ExitCode}}')

if [ $EXIT_CODE -eq 1 ]
  then
    echo -e "${RED}There was an error building the gateway. You can find the error below${NC}"
    echo "=============================================="
    echo $(docker logs $(docker-compose ps -q gateway))
    echo "=============================================="
    exit $EXIT_CODE
  else
    echo -e "${GREEN}Built gateway successfully ${NC}"
fi


docker-compose down -v --remove-orphans

exit $EXIT_CODE;

