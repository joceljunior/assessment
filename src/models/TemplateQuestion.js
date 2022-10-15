const {Model, DataTypes} = require('sequelize')

class TemplateQuestion extends Model {
    static init(connection) {
        super.init({
            question:  DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'templatequestion',
        })
    }
    static associate(models) {
        this.belongsToMany(models.Customer, {foreignKey: 'id_question', through: 'customerquestion', as: 'customers'});
    }
}

module.exports = TemplateQuestion;