module.exports  =  {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Chinacus@17',
    database: 'assessment',
    define: {
        freezeTableName: true,
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        'createdAt': 'created_at',
        'updatedAt': 'updated_at',
    },
    dialectOptions: {
        timezone:  'America/Sao_Paulo',
    },
    timezone:  'America/Sao_Paulo',
}