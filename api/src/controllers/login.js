
const { User } = require("../db");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) return res.status(400).send("faltan datos buey");

    const user = await User.findOne({ were: { email } });

    if (!user) return res.status(404).send("usuario no encontrado");

    return user.password === password
      ? res.json({ access: true })
      : res.status(403).send("contraseña invalida");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
