DOCKER=docker-compose -f docker-compose.yml

start:
	$(DOCKER) run --rm --service-ports react yarn start
