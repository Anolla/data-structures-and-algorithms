const snorlaxData = {
    stats: [{
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/6/',
                name: 'speed',
            },
            effort: 5,
            baseStat: 30,
        },
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/5/',
                name: 'special-defense',
            },
            effort: 2,
            baseStat: 110,
        },
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/4/',
                name: 'special-attack',
            },
            effort: 9,
            baseStat: 65,
        },
    ],
    name: 'snorlax',
    weight: 4600,
};

const getBaseStatGreaterThan = (arr, minBaseStat) => {
    // Solution code here...

};

getBaseStatGreaterThan(snorlaxData.stats, 75)
    // results [{ stat: { url: 'https://pokeapi.co/api/v2/stat/5/', name: 'special-defense' }, effort: 2, baseStat: 110 }]