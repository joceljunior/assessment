module.exports  =  {
    dialect: 'mysql',
    host: 'testesapirjh.c9puqxuvse9d.us-east-2.rds.amazonaws.com',
    // host: 'localhost',
    port: 3306,
    username: 'admin',
    // username: 'root',
    password: '?mfV?t}&P~&l)u>',
    // password: 'Chinacus@17',
    database: 'assessment',
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