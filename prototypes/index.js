const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');

// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(pets) {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    return pets
      .filter(pet => {
        return pet.color === 'orange';
      })
      .map(pet => {
        return pet.name;
      });

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge(pets) {
    // Sort the kitties by their age

    return pets.sort((a, b) => b.age - a.age);

    // Annotation:
    // Write your annotation here as a comment
  },

  growUp(pets) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    return pets.map(pet => {
      pet.age += 2;
      return pet;
    });
  }
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(data) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    return data.reduce((acc, { club, members }) => {
      members.forEach(member => {
        acc[member] = acc[member] || [];
        acc[member].push(club);
      });
      return acc;
    }, {});

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    return mods.reduce((acc, { mod, students, instructors }) => {
      let result = { mod: 0, studentsPerInstructor: 0 };
      result.mod = mod;
      result.studentsPerInstructor = students / instructors;
      acc.push(result);
      return acc;
    }, []);

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    return cakes.reduce((acc, { cakeFlavor, inStock }) => {
      acc.push({
        flavor: cakeFlavor,
        inStock: inStock
      });
      return acc;
    }, []);

    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    return cakes.filter(cake => cake.inStock);

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    return cakes.reduce((acc, currentCake) => {
      return (acc += currentCake.inStock);
    }, 0);

    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    return [...new Set(cakes.flatMap(cake => cake.toppings))];

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    return cakes.reduce((acc, { toppings }) => {
      toppings.forEach(topping => {
        if (!acc[topping]) acc[topping] = 0;
        acc[topping]++;
      });
      return acc;
    }, {});

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    return classrooms.filter(({ program }) => program === 'FE');

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }
    let result = { feCapacity: 0, beCapacity: 0 };

    classrooms.forEach(({ program, capacity }) => {
      if (program === 'FE') {
        result.feCapacity += capacity;
      } else {
        result.beCapacity += capacity;
      }
    });

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    return classrooms.sort((a, b) => a.capacity - b.capacity);

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(books) {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    const nonViolentBooks = books.filter(book => {
      return book.genre !== 'Horror' && book.genre !== 'True Crime';
    });

    return nonViolentBooks.map(book => book.title);

    // Annotation:
    // Write your annotation here as a comment
  },
  getNewBooks(books) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const newBooks = [];

    books.forEach(({ title, published }) => {
      let result = { title: null, year: 0 };
      if (published >= 1990) {
        result.title = title;
        result.year = published;
        newBooks.push(result);
      }
    });

    return newBooks;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data.
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const newBooks = [];

    books.forEach(({ title, published }) => {
      let result = { title: null, year: 0 };
      if (published >= year) {
        result.title = title;
        result.year = published;
        newBooks.push(result);
      }
    });

    return newBooks;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]
    // (high + low) / 2

    const allTemps = weather.map(location => {
      return location.temperature;
    });

    const averageTemps = allTemps.map(location => {
      return (location.high + location.low) / 2;
    });

    return averageTemps;

    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const sunnyPlaces = weather.filter(location => {
      return location.type === 'sunny' || location.type === 'mostly sunny';
    });

    const statements = sunnyPlaces.map(location => {
      return `${location.location} is ${location.type}.`;
    });

    return statements;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const allHumidites = weather.map(location => {
      return location.humidity;
    });

    const mostHumidLocation = weather.find(location => {
      return location.humidity === allHumidites.sort()[allHumidites.sort().length - 1];
    });

    return mostHumidLocation;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const record = nationalParks.reduce(
      (acc, { name, visited }) => {
        visited ? acc.parksVisited.push(name) : acc.parksToVisit.push(name);
        return acc;
      },
      { parksToVisit: [], parksVisited: [] }
    );

    return record;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    const result = nationalParks.reduce((acc, { location, name }) => {
      let newObj = {};
      newObj[location] = name;
      acc.push(newObj);
      return acc;
    }, []);

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    return [...new Set(nationalParks.flatMap(({ activities }) => activities))];

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    return breweries.reduce((acc, { beers }) => {
      beers.forEach(beer => {
        if (beer) acc++;
      });
      return acc;
    }, 0);

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    return breweries.reduce((acc, { name, beers }) => {
      acc.push({ name: name, beerCount: beers.length });
      return acc;
    }, []);

    // Annotation:
    // Write your annotation here as a comment
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5

    let result;
    breweries.forEach(({ name, beers }) => {
      if (breweryName === name) result = beers.length;
    });

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
    let highest = { name: null, type: null, abv: 0, ibu: 0 };
    const allBeers = breweries.flatMap(({ beers }) => beers);
    allBeers.forEach(beer => {
      if (beer.abv > highest.abv) {
        highest = beer;
      }
    });

    return highest;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type.
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    const gameList = boardGames[type].map(game => {
      return game.name;
    });

    return gameList;

    // Annotation:
    // Write your annotation here as a comment
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified
    // type, sorted alphabetically.
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]

    const gameList = boardGames[type].map(game => {
      return game.name;
    });

    return gameList.sort();

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    const highestRated = boardGames[type].sort((a, b) => {
      return a.rating - b.rating;
    });

    return highestRated[highestRated.length - 1];

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    const averageScore = boardGames[type].reduce((acc, current) => {
      return acc + current.rating;
    }, 0);

    return averageScore / boardGames[type].length;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    const filteredGames = boardGames[type].filter(games => {
      return games.maxPlayers === maximumPlayers;
    });

    const averageScore = filteredGames.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0);

    return averageScore / filteredGames.length;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    return instructors.reduce((acc, { name, module }) => {
      cohorts.forEach(cohort => {
        let newObj = {};
        if (cohort.module === module) {
          newObj.name = name;
          newObj.studentCount = cohort.studentCount;
          acc.push(newObj);
        }
      });
      return acc;
    }, []);

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    return cohorts.reduce((acc, { cohort, module, studentCount }) => {
      let numInstructors = 0;
      instructors.forEach(instructor => {
        if (instructor.module === module) numInstructors++;
      });
      acc[`cohort${cohort}`] = studentCount / numInstructors;
      return acc;
    }, {});

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    return instructors.reduce((acc, { name, teaches }) => {
      acc[name] = acc[name] || [];
      cohorts.forEach(({ module, curriculum }) => {
        teaches.forEach(subject => {
          if (curriculum.includes(subject) && !acc[name].includes(module)) acc[name].push(module);
        });
      });
      return acc;
    }, {});

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    return instructors.reduce((acc, { name, teaches }) => {
      cohorts.forEach(({ curriculum }) => {
        curriculum.forEach(subject => {
          acc[subject] = acc[subject] || [];
          if (teaches.includes(subject) && !acc[subject].includes(name)) acc[subject].push(name);
        });
      });
      return acc;
    }, {});

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    return Object.keys(bosses).reduce((acc, curr) => {
      let newObj = { bossName: null, sidekickLoyalty: 0 };
      bosses[curr].sidekicks.forEach(({ name }) => {
        sidekicks.forEach(sidekick => {
          if (sidekick.name === name) {
            newObj.bossName = bosses[curr].name;
            newObj.sidekickLoyalty += sidekick.loyaltyToBoss;
            acc.push(newObj);
          }
        });
      });
      return [...new Set(acc)];
    }, []);

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    // const allStarNames = Object.values(constellations).flatMap(constellation => constellation.starNames);
    // const selectedStars = stars.filter(star => {
    //   for (i = 0; i < allStarNames.length; i++) {
    //     if (star.name === allStarNames[i]) {
    //       return star;
    //     }
    //   }
    // })
    // console.log(selectedStars);

    // const incStars = stars.filter(star => {
    //   return Object.values(constellations).find(constellation => {
    //     return constellation.starNames.includes(star.name);
    //   })
    // })

    // console.log(incStars);

    const constKeysArray = Object.keys(constellations);

    const constStars = constKeysArray.map(key => {
      return constellations[key].starNames;
    });

    constStars[0].reverse();

    const combinedStars = constStars.reduce((acc, starSet) => {
      return acc.concat(starSet);
    }, []);
    // const combinedStars = constStars.flat();

    let incStars = [];

    combinedStars.forEach(incStar => {
      stars.forEach(star => {
        if (star.name === incStar) {
          incStars.push(star);
        }
      });
    });

    return incStars;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const organizeStarsByColor = stars.reduce((starsByColor, currentStar) => {
      const color = currentStar.color;
      if (!starsByColor[color]) starsByColor[color] = [];
      starsByColor[color].push(currentStar);
      return starsByColor;
    }, {});

    return organizeStarsByColor;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]

    const sortedStarConstellations = stars
      .sort((a, b) => {
        return a.visualMagnitude - b.visualMagnitude;
      })
      .filter(star => {
        return star.constellation !== '';
      })
      .map(star => {
        return star.constellation;
      });

    return sortedStarConstellations;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {
    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    return characters.reduce((acc, currentCharacter) => {
      currentCharacter.weapons.forEach(weapon => {
        Object.keys(weapons).forEach(key => {
          if (key === weapon) acc += weapons[key].damage;
        });
      });
      return acc;
    }, 0);

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {
    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    return characters.reduce((acc, character) => {
      let result = { [character.name]: { damage: 0, range: 0 } };
      character.weapons.forEach(weapon => {
        Object.keys(weapons).forEach(key => {
          if (key === weapon) {
            result[character.name].damage += weapons[key].damage;
            result[character.name].range += weapons[key].range;
          }
        });
      });
      acc.push(result);
      return acc;
    }, []);

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    return movies.reduce((acc, { title, dinos }) => {
      let awesomeDinos = Object.keys(dinosaurs).filter(dinos => dinosaurs[dinos].isAwesome);
      dinos.forEach(dino => {
        if (awesomeDinos.includes(dino)) {
          acc[title] = acc[title] || 0;
          acc[title]++;
        }
      });
      return acc;
    }, {});

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    return movies.reduce((acc, { title, director, cast, yearReleased }) => {
      const sumAges = Object.keys(humans).reduce((ages, actor) => {
        if (cast.includes(actor)) {
          ages += yearReleased - humans[actor].yearBorn;
        }
        return ages;
      }, 0);
      acc[director] = acc[director] || {};
      acc[director][title] = acc[director][title] || 0;
      acc[director][title] += Math.floor(sumAges / cast.length);
      return acc;
    }, {});

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a 
    Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object 
    in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    return Object.keys(humans).reduce((acc, actor) => {
      let result = { name: null, nationality: null, imdbStarMeterRating: 0 };
      const includedCast = movies.some(movie => movie.cast.includes(actor));
      if (!includedCast) {
        result.name = actor;
        result.nationality = humans[actor].nationality;
        result.imdbStarMeterRating = humans[actor].imdbStarMeterRating;
        acc.push(result);
      }
      return acc.sort((a, b) => {
        if (a.nationality < b.nationality) {
          return -1;
        } else if (a.nationality > b.nationality) {
          return 1;
        }
        return 0;
      });
    }, []);

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the 
    movie(s) they were cast in, as an array of age(s). Only include humans who 
    were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */
    
    let solution = [];
    
    Object.keys(humans).forEach(actor => {
      let result = { name: null, ages: [] }
      movies.forEach(({cast, yearReleased}) => {
        if (cast.includes(actor)) {
          result.name = actor;
          result.ages.push(yearReleased - humans[actor].yearBorn)
          if (!solution.includes(result)) solution.push(result);
        }
      })
    })
  
    return solution;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts
};
