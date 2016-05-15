/**
 * Created by HP240 on 15/05/2016.
 */
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('departamento', {
        id_Departamento: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nota: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'departamento',
        timestamps: false
    });
};