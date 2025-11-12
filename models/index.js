const sequelize = require('../config/database');
const User = require('./User');
const SavedStory = require('./SavedStory');
const Vocabulary = require('./Vocabulary');
const QuizScore = require('./QuizScore');

// Define relationships
User.hasMany(SavedStory, {
    foreignKey: 'userId',
    as: 'savedStories',
    onDelete: 'CASCADE'
});

SavedStory.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

User.hasMany(Vocabulary, {
    foreignKey: 'userId',
    as: 'vocabulary',
    onDelete: 'CASCADE'
});

Vocabulary.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

User.hasMany(QuizScore, {
    foreignKey: 'userId',
    as: 'quizScores',
    onDelete: 'CASCADE'
});

QuizScore.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

// Sync database (creates tables if they don't exist)
async function syncDatabase() {
    try {
        await sequelize.sync({ alter: false }); // Use { force: true } to drop and recreate tables
        console.log('✅ Database tables synchronized successfully.');
    } catch (error) {
        console.error('❌ Error synchronizing database:', error);
    }
}

module.exports = {
    sequelize,
    User,
    SavedStory,
    Vocabulary,
    QuizScore,
    syncDatabase
};
