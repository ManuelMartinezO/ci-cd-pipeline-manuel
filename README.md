**INSTALACION**

npm install

npm start

**TESTS**

npm test

**ESTRUCTURA**

ci-cd-pipeline-manuel/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── config/
│   ├── development.env        # Variables para entorno de desarrollo
│   ├── production.env         # Variables para producción
│   └── testing.env            # Variables para testing
├── src/
│   ├── app.js                 # Archivo principal de la aplicación Express
│   ├── routes/
│   │   └── calc.js            # Rutas para suma, resta, mult y división
│   └── utils/
│       └── calc.js            # Funciones de cálculo
├── tests/
│   ├── calc.test.js           # Tests unitarios para funciones matemáticas
│   └── routes.test.js         # Tests de integración para rutas
├── docs/
│   
├── .env                       # Archivo para seleccionar entorno activo
├── .gitignore                 # Ignorar node_modules, .env, etc.
├── package.json               # Dependencias, scripts y configuración general
├── README.md                  # Descripción del proyecto


**RUTAS**

 http://localhost:3000/api/calc/suma?a=5&b=3 → 8

 http://localhost:3000/api/calc/resta?a=10&b=2 → 8

 http://localhost:3000/api/calc/mult?a=4&b=3 → 12

 http://localhost:3000/api/calc/div?a=10&b=2 → 5

 http://localhost:3000/api/calc/div?a=10&b=0 → error


