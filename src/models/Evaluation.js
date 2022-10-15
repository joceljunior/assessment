const {Model, DataTypes} = require('sequelize')

class Evaluation extends Model {
    static init(connection) {
        super.init({
            id_question: DataTypes.INTEGER,
            id_customer: DataTypes.INTEGER,
            order: DataTypes.INTEGER,
            answer: DataTypes.INTEGER,
        }, {
            sequelize: connection
        })
    }
}

module.exports = Evaluation;