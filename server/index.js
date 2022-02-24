const Fastify = require('fastify');
const { PrismaClient } = require('@prisma/client');

async function start(){
    const app = Fastify({ logger: true });
    // const prisma = new PrismaClient({});

    // app.decorate('prisma', prisma);
    await app.register(require('fastify-cors'), {})

    app.get('/log', async (req, res) => { 
        res.send({logged: true})    
    })

    app.get('*', async (req, res) => { 
        res.send([1,2,3,4,5])    
    })

    app.listen(3000, (err, address) => {
        if (err) {
			console.log('Failed to start server')
			throw err
		}
        console.log('Server started\n\n', address)
    })
}


start()