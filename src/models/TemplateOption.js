const {Model, DataTypes} = require('sequelize')

class TemplateOption extends Model {
    static init(connection) {
        super.init({
            name:  DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'templateoption',
        })
    }
    static associate(models) {
        this.belongsToMany(models.TemplateQuestion, {foreignKey: 'id_option', through: 'questionoptions', as: 'options'});
    }
}

module.exports = TemplateOption;