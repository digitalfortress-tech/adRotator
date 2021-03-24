help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install Dependencies
	@npm i

watch:	## Build for Dev environment and Watch files
	@npm run watch

lint:		## Lint all files
	@npm run lint

tests:		## Run all tests (unit + e2e)
	@npm run test-unit
	@npm run test-e2e

test-unit:		## Run unit tests (JEST)
	@npm run test-unit

test-e2e:		## Run e2e tests (Cypress CLI)
	@npm run test-e2e

test-e2e-gui:		## Run e2e tests (Cypress GUI)
	@npm run test-e2e-gui

prod:		## Build for Production environment
	@npm run prod

publish:	## Publish to NPM
	@make tests
	@make prod
	@npm publish
