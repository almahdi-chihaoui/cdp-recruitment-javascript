const { expect, test } = require('@jest/globals');
const ops = require('..');
const testData = require('./data');

const getAnimals = (data) => {
  return data.reduce((acc, currCountry) => {
    const localAnimals = currCountry
      .people
      .reduce((acc, currPerson) => {
        return acc.concat(currPerson.animals)
      }, []);

    return acc.concat(localAnimals);  
  }, []);
}

test('Filter function', () => {
  const pattern = 'ry';

  const result = ops.filter(testData.data, pattern);

  // get all animals
  const animals = getAnimals(result);

  // expect each animal name to include the given pattern
  animals.forEach(animal => {
    expect(animal.name.includes(pattern)).toBeTruthy();
  });

});
