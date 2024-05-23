const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
})

/*
try {
    sequelize.authenticate()
    console.log('Conectamos ao Sequelize')
} catch (error) {
    console.log('Falha ao conectar o Sequelize', error)
}
*/

module.exports = sequelize