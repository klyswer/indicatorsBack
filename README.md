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
│   │   │   ├── canal.entity.ts
│   │   │   ├── evento.entity.ts
│   │   │   ├── index.ts
│   │   │   ├── rol.entity.ts
│   │   │   ├── tipo-evento.entity.ts
│   │   │   ├── token-key.entity.ts
│   │   │   ├── token.entity.ts
│   │   │   ├── usuario-canal.entity.ts
│   │   │   └── usuario.entity.ts
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
## Instalacion

```bash
# Paquetes
$ npm install
# Contenedores de docker
$ npm run composer-up
```

##Migraciones

###Correr migraciones


```bash
# Producción
$ npm run typeorm:migration:run

# Local
$ npm run typeorm:migration:run:dev
```

###Crear migracion
```bash
$ npm run typeorm:migration:generate --name=nombre-migracion
```

###Revertir ultima migracion
```bash
#Producción 
$ npm run typeorm:migration:revert

# Local
$ npm run typeorm:migration:revert:dev
```

##Archivo .env
Se debe de generar un archivo tomando como base el .env.example y asignar los valores respectivos, el .env se toma dependiendo del ambiente, estos son los nombre de archivos validos
```bash
#Produción
.env

#Local
.env.local
```


## Correr el micro servicio

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

