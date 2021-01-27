
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
}

module.exports = {
    filter,
}