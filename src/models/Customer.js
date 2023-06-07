const {Model, DataTypes} = require('sequelize')

class Customer extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            url: DataTypes.STRING,
            
        }, {
            sequelize: connection,
            tableName: 'customer'
        })
    }

    static associate(models) {
        this.belongsToMany(models.TemplateQuestion, {foreignKey: 'id_customer', through: 'customerquestion', as: 'questions'});
    }
}

module.exports = Customer;