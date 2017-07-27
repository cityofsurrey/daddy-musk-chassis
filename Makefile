up:
	@docker-compose up -d --build
	@docker-compose ps

down:
	@docker-compose down

ps:
	@docker-compose ps

logs:
	@docker logs --follow polltalapp_polltal-app_1

pull:
	@docker-compose pull
