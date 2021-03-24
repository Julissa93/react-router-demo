const { Sequelize } = require('sequelize')

const db = new Sequelize('postgres://localhost:5432/router-demo')

const Puppy = db.define('puppy', {
    name: Sequelize.STRING,
})

const Kitten = db.define('kitten', {
    name: Sequelize.STRING
})

module.exports = {
    db,
    Puppy,
    Kitten
}