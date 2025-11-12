const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SavedStory = sequelize.define('SavedStory', {
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
    storyText: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'story_text'
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gradeLevel: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'grade_level'
    },
    title: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'saved_stories',
    timestamps: true,
    underscored: true
});

module.exports = SavedStory;
