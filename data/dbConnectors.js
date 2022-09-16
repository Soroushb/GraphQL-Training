import mongoose, { mongo } from "mongoose";
import { Sequelize, DataTypes} from 'sequelize'
import _ from 'lodash'
import casual from 'casual' 

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/books', {
    useNewUrlParser: true
})


const bookSchema = new mongoose.Schema({

    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    soldout: {
        type: String
    },
    inventory: {
        type: String
    },
    stores: {
        type: Array
    }
})

const Books = mongoose.model('books', bookSchema)

const sequelize = new Sequelize('sqlite::memory');

const Categories = sequelize.define('categories', {
    category: DataTypes.STRING,
    description: DataTypes.STRING
})

Categories.sync({ force: true}).then(() => {
    _.times(5, (i) => {
        Categories.create({
            category: casual.word,
            description: casual.sentence
        })
    })
})

export { Books, Categories }
