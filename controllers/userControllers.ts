const User = require('../models/Users.model')

const getAllUsers = async (req, res)=>{
  try {
    const users = await User.find()

    res.status(200).json({
      message:"success",
      users: users.reverse()
    })
  } catch (error) {
    res.send(error)
  }
}

const getUserById = async (req, res)=>{
  try {
    const user = await User.findById(req.params.id)

    if(!user){
      return res.status(404).json({
        message:'Not Found'
      })
    }

    res.status(200).json({
      message:"success",
      user
    })
  } catch (error) {
    res.send(error)
  }
}

const addUser = async (req, res)=>{
  try {
    const {userName, email, password } = req.body;
    const registrationTime = new Date().toLocaleString();
    const newUser = await User.create({
      userName,
      email,
      password,
      registrationTime,
      lastLogin:registrationTime,
      isBlocked: false
    })

    res.status(201).json({
      message:'Added new user',
      newUser
    })
  } catch (error) {
    res.send(error)
  }
}


const loginUser = async (req, res)=>{
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'User signed in successfully', user });
  } catch (error) {
    res.send(error);
  }
}

const loginTime = async (req, res)=>{
  try {
    const registrationTime = new Date().toLocaleString();
    const updatedLoginTime = await User.findByIdAndUpdate(req.params.id, {
    lastLogin:registrationTime
    })
    res.status(200).json({
      message: 'success',
      updatedLoginTime
    })
  } catch (err) {
    res.send(err)
  }
}

const updateUserStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.isBlocked = !user.isBlocked;
    const updatedUser = await user.save();
    res.status(200).json({
      message: 'User status updated successfully',
      updatedUser,
    });
  } catch (err) {
    res.status(500).send(err);
  }
}


const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id)
    res.status(200).json({
      message: 'Deleted',
    })
  } catch (err) {
    res.send(err)
  }
}

const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany({});
    res.status(200).json({
      message: 'All users deleted successfully',
    });
  } catch (err) {
    res.send(err);
  }
}

export { 
  getAllUsers, 
  getUserById, 
  addUser, 
  loginUser, 
  loginTime,
  deleteUser,
  deleteAllUsers,
  updateUserStatus };
