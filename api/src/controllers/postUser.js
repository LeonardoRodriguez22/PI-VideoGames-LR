const { User } = require("../db");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).send("faltan datos buey");

    await User.findOrCreate({ where: { email, password } });

    return res.json({ access1: true });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
