const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vocabulary = sequelize.define('Vocabulary', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
            model: 'users',
            key: 'id'
        }
    },
    word: {
        type: DataTypes.STRING,
        allowNull: false
    },
    translation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false
    },
    context: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'vocabulary',
    timestamps: true,
    underscored: true
});

module.exports = Vocabulary;
