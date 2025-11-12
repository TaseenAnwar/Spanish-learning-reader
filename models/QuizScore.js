const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const QuizScore = sequelize.define('QuizScore', {
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
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalQuestions: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'total_questions'
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gradeLevel: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'grade_level'
    }
}, {
    tableName: 'quiz_scores',
    timestamps: true,
    underscored: true
});

module.exports = QuizScore;
