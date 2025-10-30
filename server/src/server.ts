import "reflect-metadata"
import { config } from "dotenv"

import fastify from "fastify"
import mercurius from "mercurius"


// import schema
import { buildSchema } from "type-graphql"

// import resolvers
import { ClearanceResolver as ClearanceResolvers } from "./models/clearanceResolver.js"
import { OfficialResolver as OfficialResolvers } from "./models/officialResolvers.js"

const app = fastify({
    logger: true,
    pluginTimeout: 10000
})

const gqlSchema = await buildSchema({
    resolvers: [ClearanceResolvers, OfficialResolvers],
    validate: false,
})

app.register(mercurius, {
    schema: gqlSchema,
    graphiql: true,
})

const start = async () => {
    try {
        const port = process.env.PORT || 3000
        await app.listen({ port: Number(port) })
        console.log(`Server is running on port ${port}/graphql`)
        console.log(`GraphiQL is available at http://localhost:${port}/graphiql`)
    } catch (error) {
        console.error(`Error starting server: ${error}`)
    }
}

start()