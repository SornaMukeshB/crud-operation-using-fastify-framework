const fastify=require('fastify')({logger: true}) 

const swagger = require('@fastify/swagger');
const swaggerUI = require('@fastify/swagger-ui');

// Register Swagger (generates the docs)
fastify.register(swagger, {
  swagger: {
    info: {
      title: 'Fastify API',
      description: 'API documentation using Swagger',
      version: '1.0.0',
    },
  },
});

// Register Swagger UI (shows the docs in browser)
fastify.register(swaggerUI, {
  routePrefix: '/docs',
  exposeRoute: true,
});

const PORT=3000;
fastify.register(require('./routes/items'))

const start=async()=>{
    try{
        await fastify.listen({port : PORT})
    }catch(error){
        fastify.log.error(error)
        process.exit(1)
    }
}

start()