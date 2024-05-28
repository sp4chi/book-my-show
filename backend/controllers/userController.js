import User from '../models/userModel.js';

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId).select('-password');

    res.status(200).json({
      status: 'success',
      message: 'User details fetched successfully',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message,
    });
  }
};
