module.exports  =  {
    dialect: 'mysql',
    host: 'us-cdbr-east-06.cleardb.net',
    // host: 'localhost',
    port: 3306,
    username: 'b2cdb8f4d9de26',
    // username: 'root',
    password: '75984f56',
    // password: 'Chinacus@17',
    database: 'heroku_f85231217c42a64',
    // database: 'assessment',
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