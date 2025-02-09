# Awesome Project Build with TypeORM

Steps to run this project:

start node service: "typeorm_project_orders"

```bash
docker-compose up -d
```
** Require MySQL external server it's not present in the docker-compose

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

our 

```bash
npm run typeorm migration:create src/database/migrations/[migration_name]

npm run typeorm -- -d ./src/data-source.ts migration:run

npm run typeorm -- -d ./src/data-source.ts migration:revert

npx typeorm-ts-node-commonjs migration:run -d src/data-source
```

