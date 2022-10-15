module.exports  =  {
    dialect: 'mysql',
    host: 'us-cdbr-east-06.cleardb.net' || 'localhost',
    port: 3306,
    username: 'b8a3fb36eba90b' || 'root',
    password: '8e6e8c6b' || 'Chinacus@17',
    database: 'heroku_fcebc19a9678ceb' || 'assessment',
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