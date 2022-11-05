import Fastify from "fastify"
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { poolRoutes } from "./routes/pool"
import { authRoutes } from "./routes/auth"
import { gameRoutes } from "./routes/game"
import { guessRoutes } from "./routes/guess"
import { userRoutes } from "./routes/user"

async function bootstrap() {
    const fastify = Fastify({
        logger: true // Vai soltando logs de tudo que acontece na aplicação
    })

    await fastify.register(cors, {
        /** Define que qualquer aplicação pode acessar os dados do backend.
         * Em produção é melhor colocar um domínio
        */
        origin: true,
    })

    await fastify.register(jwt, {
        secret: 'nlwcopa' // Em produção isso precisa ser uma variável ambiente
    })

    await fastify.register(poolRoutes)
    await fastify.register(authRoutes)
    await fastify.register(gameRoutes)
    await fastify.register(guessRoutes)
    await fastify.register(userRoutes)

    //startar o servidor e passando a porta
    await fastify.listen({ port: 3333, host: '0.0.0.0' }) // host é para funcionar no mobile android
}

bootstrap()