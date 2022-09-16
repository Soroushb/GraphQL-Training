import { reject } from 'lodash';
import { Books } from './dbConnectors';

const resolvers = {

    getProduct: ({ id }) => {
        return new Promise((resolve) => {
            Books.findById({ _id: id}), (err, Product) => {
                if(err) reject(err)
                else resolve(Product)
            }
        });
    },

    createProduct: ({input}) => {
        // let id = require('crypto').randomBytes(10).toString('hex');
        // productDatabase[id] = input;
        // return new Product(id, input)
    }
}

export default resolvers;