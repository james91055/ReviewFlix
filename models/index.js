const User = require('./User');
const Movie = require('./Movie');
const Review = require('./Review');
// a user can post many reviews
User.hasMany(Review, {
    foreignKey: 'user_id'
});
// a movie can have many reviews
Movie.hasMany(Review, {
    foreignKey: 'movie_id'
})
// a review belongs to one movie
Review.belongsTo(Movie, {
  foreignKey: 'movie_id',
});
// a review belongs to one user
Review.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Movie, Review };

