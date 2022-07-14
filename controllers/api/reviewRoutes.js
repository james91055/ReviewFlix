const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');

// require user to be logged in to post a review.
router.post('/', withAuth, async (req, res) => {
  try {
    // create new review with the information passed in the body. pass the current user_id when creating a new Review object. 
    const newReview = await Review.create({
      ...req.body,
      // 
      user_id: req.session.user_id,
    });
    

    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
