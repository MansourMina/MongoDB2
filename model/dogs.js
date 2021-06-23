const { Dog } = require('./schemas');

const getDogs = async (query) => {
  if (query.gender) {
    return Dog.find({ sex: { $eq: query.gender } });
  }
  if (query.datebornsince) {
    const dogs = await Dog.find({ born: { $gt: query.datebornsince } });
    return dogs.map(({ name, born }) => ({ name, born }));
  }
  if (query.favFood) {
    const dogs = await Dog.find({ favFoods: query.favFood });
    return dogs.map(({ name, favFoods }) => ({ name, favFoods }));
  }
  return Dog.find();
};

const deleteDog = async (name) => {
  await Dog.deleteOne({ name: { $eq: name } });
  return 'deleted';
};

module.exports = { getDogs, deleteDog };
