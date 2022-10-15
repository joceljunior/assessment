const {Model, DataTypes} = require('sequelize')

class Sector extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'sector',
        })
    }

    // static associate(models) {
    //     this.hasMany(models.CustomerQuestion, {foreignKey: 'id_sector', as: 'sectors'});
    // }
}

module.exports = Sector;