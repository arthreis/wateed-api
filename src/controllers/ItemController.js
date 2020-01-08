module.exports = {
    async create(req, res){
      try {
        const user = new Item({name: req.body.name});
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

    },

    async delete(req, res) {

    },

    async update(req, res) {
      
    }
}