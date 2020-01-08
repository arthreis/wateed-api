const User = require('../models/User');

module.exports = {
    async create(req, res){
      try {
        const user = new User({name: req.body.name});
        await user.save();
        res.status(201).json(user);
      } catch(err) {
        res.status(400).json({message: err.message});
      }
    },

    async get(req, res) {
      try {
        const user = await User.findById(req.params.id);
        res.json(user);
      } catch(err) {
        res.status(500).json({message: err.message});
      }
    },
    
    async getAll(req, res) {
      try {
        const users = await User.find();
        res.json(users);
      } catch(err) {
        res.status(500).json({message: err.message});
      }
    },

    async delete(req, res) {
      try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json(user);
      } catch(err) {
        res.status(500).json({message: err.message});
      }
    },

    async update(req, res) {
      if (req.body.name != null) {
        res.user.name = req.body.name;
      }

      try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    }
}