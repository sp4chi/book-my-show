import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(404).json({
        status: 'failed',
        message: 'User does not exist!',
      });
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(401).json({
        status: 'failed',
        message: 'Incorrect password!',
      });
      return;
    }

    const token = jwt.sign({ userId: user._id }, process.env.jwt_secret, {
      expiresIn: 1000 * 60 * 30 + '', //30 mins
    });

    res.status(200).json({
      status: 'success',
      message: 'Login successful!',
      data: token,
    });
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      status: 'failed',
      message: error.message,
    });
  }
};
export const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    await User.init();
    await User.create({ ...req.body, password: hash });

    // const { name, email, password, isAdmin, ...rest } = newUser._doc;

    res.status(200).json({
      status: 'success',
      message: 'User has been created!',
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: 'failed',
      message: 'Email already registered!',
    });
  }
};
