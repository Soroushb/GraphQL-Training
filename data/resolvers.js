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
        const newBook = new Books({
            name: input.name,
            description: input.description,
            price: input.price,
            soldout: input.soldout,
            inventory: input.inventory,
            stores: input.stores

        })

        newBook.id = newBook._id
        return new Promise((resolve) => {
            newBook.save((err) => {
                if(err) reject(err)
                else resolve(newBook)
            })
        })
    }
}

export default resolvers;