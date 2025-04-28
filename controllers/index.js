const models = require("../database/models");

const createPokemon = async (req, res) => {
  try {
    const pokemon = await models.pokemon.create(req.body);
    return res.status(201).json({
      pokemon
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllPokemons = async (req, res) => {
  console.log('getting pokemons');
  try {
    const pokemons = await models.pokemon.findAll({
      include: [
      ]
    });
    return res.status(200).json({ pokemons });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createPokemon,
  getAllPokemons
};
