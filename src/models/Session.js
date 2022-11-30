const {Model, DataTypes} = require('sequelize')

class Session extends Model {
    static init(connection) {
        super.init({
            id_customer:  DataTypes.INTEGER,
        }, {
            sequelize: connection,
            tableName: 'session',
        })
    }
}

module.exports = Session;