
Steps to run this project:

start node service: "typeorm_project_orders"

```bash
docker-compose up -d
```

\*\* Requires an external MySQL server, which is not included in docker-compose. Provide the connection details in the .env file.

# TypeOrm cli

### Create a new migration

```bash
npm run typeorm:create --migration_name=[name]
```

### run migrations

```bash
npm run typeorm:migrate
```

### revert migrations

```bash
npm run typeorm:revert
```

or

```bash
npm run typeorm migration:create src/database/migrations/[migration_name]

npm run typeorm -- -d ./src/data-source.ts migration:run

npm run typeorm -- -d ./src/data-source.ts migration:revert

npx typeorm-ts-node-commonjs migration:run -d src/data-source
```

### Format all files

```bash
npm run format

# Check the formatting
npm run format:check

# Format source code only
npm run format:src
```
