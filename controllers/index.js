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

const  deletePokemon  = async (req,  res)  =>  {
  console.log('deleting pokemon...');

  try {
     const pokemon = await models.pokemon.findOne({ where: { id: req.params.id } });
     if (pokemon) {
   console.log(pokemon);
         await pokemon.destroy();
     } 
     else {
        return res.status(200).json( { "error ": req.params.id  +  " no existe"});
     } 
     return res.status(200).json( { "deleted ": req.params.id });
  }
  catch  (error) {
     return res.status(500).send ( { error: error.message  } );
  }

};

const updatePokemon  = async (req,  res)  =>  {
  console.log('updating pokemon...');

  try {
     const pokemon = await models.pokemon.findOne({ where: { id: req.params.id } });
     if (pokemon) {
   console.log(pokemon);
         pokemon.name = req.body.name;
         pokemon.noPokedex = req.body.noPokedex;
         pokemon.tipo1 = req.body.tipo1;
         pokemon.tipo2 = req.body.tipo2;
         pokemon.habilidad = req.body.habilidad;
         pokemon.region = req.body.region;
         pokemon.descripcion = req.body.descripcion;
         await pokemon.save();
     }
     else {
        return res.status(200).json( { "error ": req.params.id  +  " no existe"});
     }

     return res.status(200).json( { "updated ": pokemon });
  }
  catch  (error) {
     return res.status(500).send ( { error: error.message  } );
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
  updatePokemon,
  deletePokemon,
  getAllPokemons,
};
