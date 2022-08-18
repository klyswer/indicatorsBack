## Descripción

Micro servicio

## Estructura
```
.
├── README.md
├── docker-compose.yaml
├── env.d.ts
├── nest-cli.json
├── package-lock.json
├── package.json
├── src
│   ├── __test__
│   │   └── app.controller.spec.ts
│   ├── _common
│   │   ├── constants
│   │   │   └── index.ts
│   │   ├── decorators
│   │   │   └── index.ts
│   │   ├── dtos
│   │   │   └── index.ts
│   │   ├── entities 
│   │   │   ├── index.ts
│   │   ├── enums
│   │   │   └── index.ts
│   │   ├── guards
│   │   │   └── index.ts
│   │   ├── interfaces
│   │   │   └── index.ts
│   │   ├── migrations
│   │   └── pipes
│   │       └── index.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── auth
│   │   ├── __test__
│   │   │   ├── auth.controller.spec.ts
│   │   │   └── auth.service.spec.ts
│   │   ├── auth.controller.js
│   │   ├── auth.controller.ts
│   │   ├── auth.module.js
│   │   ├── auth.module.ts
│   │   ├── auth.service.js
│   │   ├── auth.service.ts
│   │   └── dto
│   └── main.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
├── tsconfig.json
└── type-orm-config.ts


```
## Installation

```bash
$ npm install
$ npm run composer-up
```

##Migraciones

###Correr migraciones
```bash
$ npm run typeorm:run-migrations
```

###Crear migracion
```bash
$ npm run typeorm:create-migration --name=nombre
```

###Generar migracion
```bash
$ npm run typeorm:generate-migration --name=nombre
```

###Revertir ultima migracion
```bash
$ npm run typeorm:revert-migration
```

##Archivo .env 
Se debe de generar un archivo tomando como base el .env.example y asignar los valores respectivos, el .env se toma dependiendo del ambiente, estos son los nombre de archivos validos
```bash
.env
.env.local
```


## Running the app

```bash
# development
$ npm run dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

