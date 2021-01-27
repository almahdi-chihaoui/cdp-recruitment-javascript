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

test('filter function', () => {
  const pattern = 'ry';

  const result = ops.filter(testData.data, pattern);

  // get all animals
  const animals = getAnimals(result);

  // expect each animal name to include the given pattern
  animals.forEach(animal => {
    expect(animal.name.includes(pattern)).toBeTruthy();
  });
});

test('count function', () => {
  const result = ops.count(testData.data);

  const regExp = /\[(\d*?)\]$/;

  result.forEach(country => {
    // check country's name
    const numb = country.name.match(regExp);
    expect(Number(country.name.match(regExp)[1])).toEqual(country.people.length);

    // check people names
    country.people.forEach(person => {
      expect(Number(person.name.match(regExp)[1])).toEqual(person.animals.length);
    })
  })
});
