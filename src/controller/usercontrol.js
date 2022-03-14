const store = require("mongoose/lib/promise_provider");
const user = require("../model/user");

module.exports = {
  async index(req, res) {
    const users = await user.find(); //select * from user
    res.json(users);
  },

  async detail(req, res) {
    const { _id } = req.params;
    const users = await user.findOne({ _id }); //select * from user
    res.json(users);
  },

  async store(req, res) {
    const { name, password } = req.body;
    let dataCreate = {};
    dataCreate = { name, password };
    const users = await user.create(dataCreate);
    res.json(users);
  },

  async delete(req, res) {
    const { _id } = req.params;
    const users = await user.findByIdAndDelete({ _id }); //select * from user
    res.json(users);
  },

  async update(req, res) {
    const { _id, name, password } = req.body;
    let dataUpdate = {};
    dataUpdate = { name, password };
    const users = await user.findByIdAndUpdate({_id}, dataUpdate, {new: true});
    res.json(users);
  },

};
