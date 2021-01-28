'use strict'

const filter = (data, pattern) => {
    return data.reduce((acc, currCountry) => {
        const peopleWithGoodAnimals = currCountry
            .people
            .reduce((acc, currPerson) => {
                const goodAnimals = currPerson
                    .animals
                    .filter(animal => animal.name.includes(pattern));

                if (goodAnimals.length === 0) {
                    return acc;
                }

                return acc.concat([{
                    name: currPerson.name,
                    animals: goodAnimals,
                }])
            }, [])

        if (peopleWithGoodAnimals.length === 0) {
            return acc;
        }

        return acc.concat([{
            name: currCountry.name,
            people: peopleWithGoodAnimals,
        }])
    }, []);
};

const count = (data) => {
    return data.map(country => {
        const people = country
            .people
            .map(person => ({
                name: `${person.name} [${person.animals.length}]`,
                animals: person.animals.map(animal => Object.assign({}, animal)), // to avoid object mutability issues
            }));
        return {
            name: `${country.name} [${people.length}]`,
            people,
        };    
    });
}

module.exports = {
    count,
    filter,
}