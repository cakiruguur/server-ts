import {connect, connection} from "mongoose";
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const db = process.env.DB_NAME

connection.once('open',() => {
    console.log('Mongo Bağlandı...')
})


export default () => {
    connect(`mongodb://${host}:${port}/${db}`)
}