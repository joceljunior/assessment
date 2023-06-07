const {Model, DataTypes} = require('sequelize')

class Evaluation extends Model {
    static init(connection) {
        super.init({
            id_question: DataTypes.INTEGER,
            id_customer: DataTypes.INTEGER,
            id_session: DataTypes.INTEGER,
            answer: DataTypes.DOUBLE,
            comment: DataTypes.INTEGER,
        }, {
            sequelize: connection,
            tableName: 'evaluation'
        })
    }
}

module.exports = Evaluation;