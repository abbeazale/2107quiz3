//const cors = require('micro-cors')(); // highlight-line
import {ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { typeDefs } from './schemas';
import { resolvers } from './resolvers';

const cors = Cors();


const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

export const config = {
    api: {
        bodyParser: false
    }
};

export default cors(
    async (req, res) => {
        if(req.method === 'OPTIONS'){
            res.end();

            return false;
        }

        try {
            await apolloServer.start();
        } catch(error) {}

        return apolloServer.createHandler({
            path: '/api/graphql'
        }) (req, res);

        
    }
);