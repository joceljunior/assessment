const {Model, DataTypes} = require('sequelize')

class EvaluationOption extends Model {
    static init(connection) {
        super.init({
            id_question: DataTypes.INTEGER,
            id_session: DataTypes.INTEGER,
            id_option: DataTypes.INTEGER,
        }, {
            sequelize: connection,
            tableName: 'evaluationOption'
        })
    }
}

module.exports = EvaluationOption;