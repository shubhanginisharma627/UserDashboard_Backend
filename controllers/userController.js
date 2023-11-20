import User from '../models/User.js';

export async function getAllUsers(req, res) {
  try {
    const users = await User.find();
   // console.log("users",users)
    res.json(users);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


export async function getUserById(req, res) {
  try {
    const user = await findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}

export async function createUser(req, res) {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function updateUser(req, res) {
  try {
    const updatedUser = await findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteUser(req, res) {
  try {
    await findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
