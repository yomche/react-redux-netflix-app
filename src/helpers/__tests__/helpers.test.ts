import {
  getMovies,
  getMoviesBySortType,
  generateUrlByGenre,
  generateUrlBySortType,
  generateUrlByInputValue,
} from '../index';
import { moviesUrl } from '../../constants/app.constants';

describe('Generating URL function', () => {
  const testSortType = 'testString';
  const testSearchType = 'testString';
  const testMovieGenre = 'testString';
  const testInputValue = 'testString';

  test('returns generated URL by genre ', () => {
    expect(generateUrlByGenre(testSortType, testMovieGenre)).toBe(
      `${moviesUrl}?sortBy=${testSortType}&sortOrder=desc&search=${testMovieGenre}&searchBy=genres`
    );
  });

  test('returns generated URL by sort type ', () => {
    expect(generateUrlBySortType(testSortType)).toBe(
      `${moviesUrl}?sortBy=${testSortType}&sortOrder=desc`
    );
  });

  test('returns generated URL by input value ', () => {
    expect(generateUrlByInputValue(testSortType, testInputValue, testSearchType)).toBe(
      `${moviesUrl}?sortBy=${testSortType}&sortOrder=desc&search=${testInputValue}&searchBy=${testSearchType}`
    );
  });
});

describe('Fetch movies API', () => {
  test('returns movies data', async () => {
    const expected = {
      data: [
        {
          id: 337167,
          title: 'Fifty Shades Freed',
          tagline: "Don't miss the climax",
          vote_average: 6.1,
          vote_count: 1195,
          release_date: '2018-02-07',
          poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
          overview:
            'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
          budget: 55000000,
          revenue: 136906000,
          genres: ['Drama', 'Romance'],
          runtime: 106,
        },
        {
          id: 269149,
          title: 'Zootopia',
          tagline: 'Welcome to the urban jungle.',
          vote_average: 7.7,
          vote_count: 6795,
          release_date: '2016-02-11',
          poster_path: 'https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg',
          overview:
            "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
          budget: 150000000,
          revenue: 1023784195,
          genres: ['Animation', 'Adventure', 'Family', 'Comedy'],
          runtime: 108,
        },
        {
          id: 181808,
          title: 'Star Wars: The Last Jedi',
          tagline: 'The Saga Continues',
          vote_average: 7.1,
          vote_count: 4732,
          release_date: '2017-12-13',
          poster_path: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
          overview:
            'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
          budget: 200000000,
          revenue: 1325937250,
          genres: ['Fantasy', 'Adventure', 'Science Fiction'],
          runtime: 152,
        },
        {
          id: 284054,
          title: 'Black Panther',
          tagline: 'Long live the king',
          vote_average: 7.3,
          vote_count: 3788,
          release_date: '2018-02-13',
          poster_path: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
          overview:
            "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
          budget: 200000000,
          revenue: 1245257672,
          genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
          runtime: 134,
        },
        {
          id: 354912,
          title: 'Coco',
          tagline: 'The celebration of a lifetime',
          vote_average: 7.8,
          vote_count: 3619,
          release_date: '2017-10-27',
          poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
          overview:
            "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
          budget: 175000000,
          revenue: 700920729,
          genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
          runtime: 105,
        },
        {
          id: 333339,
          title: 'Ready Player One',
          tagline: 'A better reality awaits.',
          vote_average: 8.1,
          vote_count: 617,
          release_date: '2018-03-28',
          poster_path: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
          overview:
            'When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.',
          budget: 175000000,
          revenue: 0,
          genres: ['Adventure', 'Science Fiction', 'Action'],
          runtime: 140,
        },
        {
          id: 338970,
          title: 'Tomb Raider',
          tagline: 'Her legend begins',
          vote_average: 6.2,
          vote_count: 817,
          release_date: '2018-03-08',
          poster_path: 'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
          overview:
            'Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.',
          budget: 94000000,
          revenue: 126025000,
          genres: ['Action', 'Adventure'],
          runtime: 118,
        },
        {
          id: 284053,
          title: 'Thor: Ragnarok',
          tagline: 'No Hammer. No Problem.',
          vote_average: 7.4,
          vote_count: 5349,
          release_date: '2017-10-25',
          poster_path: 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
          overview:
            'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.',
          budget: 180000000,
          revenue: 854229371,
          genres: ['Action', 'Adventure', 'Fantasy'],
          runtime: 130,
        },
        {
          id: 321612,
          title: 'Beauty and the Beast',
          tagline: 'Be our guest.',
          vote_average: 6.8,
          vote_count: 7861,
          release_date: '2017-03-16',
          poster_path: 'https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg',
          overview:
            "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
          budget: 160000000,
          revenue: 1263521126,
          genres: ['Family', 'Fantasy', 'Romance'],
          runtime: 129,
        },
        {
          id: 399055,
          title: 'The Shape of Water',
          tagline: 'A Fairy Tale for Troubled Times',
          vote_average: 7.3,
          vote_count: 3200,
          release_date: '2017-12-01',
          poster_path: 'https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg',
          overview:
            'An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.',
          budget: 19500000,
          revenue: 185545281,
          genres: ['Drama', 'Fantasy', 'Romance'],
          runtime: 123,
        },
      ],
      total: 3000,
      offset: 0,
      limit: 10,
    };

    global.fetch = jest.fn().mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(expected),
      };
      return Promise.resolve(fetchResponse);
    });

    const moviesData = await getMovies();

    expect(moviesData).toMatchObject(expected);

    global.fetch.mockClear();
    delete global.fetch;
  });

  test('calls', async () => {
    const expected = {
      data: [
        {
          id: 337167,
          title: 'Fifty Shades Freed',
          tagline: "Don't miss the climax",
          vote_average: 6.1,
          vote_count: 1195,
          release_date: '2018-02-07',
          poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
          overview:
            'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
          budget: 55000000,
          revenue: 136906000,
          genres: ['Drama', 'Romance'],
          runtime: 106,
        },
        {
          id: 269149,
          title: 'Zootopia',
          tagline: 'Welcome to the urban jungle.',
          vote_average: 7.7,
          vote_count: 6795,
          release_date: '2016-02-11',
          poster_path: 'https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg',
          overview:
            "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
          budget: 150000000,
          revenue: 1023784195,
          genres: ['Animation', 'Adventure', 'Family', 'Comedy'],
          runtime: 108,
        },
        {
          id: 181808,
          title: 'Star Wars: The Last Jedi',
          tagline: 'The Saga Continues',
          vote_average: 7.1,
          vote_count: 4732,
          release_date: '2017-12-13',
          poster_path: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
          overview:
            'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
          budget: 200000000,
          revenue: 1325937250,
          genres: ['Fantasy', 'Adventure', 'Science Fiction'],
          runtime: 152,
        },
        {
          id: 284054,
          title: 'Black Panther',
          tagline: 'Long live the king',
          vote_average: 7.3,
          vote_count: 3788,
          release_date: '2018-02-13',
          poster_path: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
          overview:
            "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
          budget: 200000000,
          revenue: 1245257672,
          genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
          runtime: 134,
        },
        {
          id: 354912,
          title: 'Coco',
          tagline: 'The celebration of a lifetime',
          vote_average: 7.8,
          vote_count: 3619,
          release_date: '2017-10-27',
          poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
          overview:
            "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
          budget: 175000000,
          revenue: 700920729,
          genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
          runtime: 105,
        },
        {
          id: 333339,
          title: 'Ready Player One',
          tagline: 'A better reality awaits.',
          vote_average: 8.1,
          vote_count: 617,
          release_date: '2018-03-28',
          poster_path: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
          overview:
            'When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.',
          budget: 175000000,
          revenue: 0,
          genres: ['Adventure', 'Science Fiction', 'Action'],
          runtime: 140,
        },
        {
          id: 338970,
          title: 'Tomb Raider',
          tagline: 'Her legend begins',
          vote_average: 6.2,
          vote_count: 817,
          release_date: '2018-03-08',
          poster_path: 'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
          overview:
            'Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.',
          budget: 94000000,
          revenue: 126025000,
          genres: ['Action', 'Adventure'],
          runtime: 118,
        },
        {
          id: 284053,
          title: 'Thor: Ragnarok',
          tagline: 'No Hammer. No Problem.',
          vote_average: 7.4,
          vote_count: 5349,
          release_date: '2017-10-25',
          poster_path: 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
          overview:
            'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.',
          budget: 180000000,
          revenue: 854229371,
          genres: ['Action', 'Adventure', 'Fantasy'],
          runtime: 130,
        },
        {
          id: 321612,
          title: 'Beauty and the Beast',
          tagline: 'Be our guest.',
          vote_average: 6.8,
          vote_count: 7861,
          release_date: '2017-03-16',
          poster_path: 'https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg',
          overview:
            "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
          budget: 160000000,
          revenue: 1263521126,
          genres: ['Family', 'Fantasy', 'Romance'],
          runtime: 129,
        },
        {
          id: 399055,
          title: 'The Shape of Water',
          tagline: 'A Fairy Tale for Troubled Times',
          vote_average: 7.3,
          vote_count: 3200,
          release_date: '2017-12-01',
          poster_path: 'https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg',
          overview:
            'An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.',
          budget: 19500000,
          revenue: 185545281,
          genres: ['Drama', 'Fantasy', 'Romance'],
          runtime: 123,
        },
      ],
      total: 3000,
      offset: 0,
      limit: 10,
    };

    global.fetch = jest.fn().mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(expected),
      };
      return Promise.resolve(fetchResponse);
    });

    const moviesData = await getMovies();
    expect(fetch).toHaveBeenCalled();

    global.fetch.mockClear();
    delete global.fetch;
  });
  test('calls with correct URL', async () => {
    const expected = {
      data: [
        {
          id: 337167,
          title: 'Fifty Shades Freed',
          tagline: "Don't miss the climax",
          vote_average: 6.1,
          vote_count: 1195,
          release_date: '2018-02-07',
          poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
          overview:
            'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
          budget: 55000000,
          revenue: 136906000,
          genres: ['Drama', 'Romance'],
          runtime: 106,
        },
        {
          id: 269149,
          title: 'Zootopia',
          tagline: 'Welcome to the urban jungle.',
          vote_average: 7.7,
          vote_count: 6795,
          release_date: '2016-02-11',
          poster_path: 'https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg',
          overview:
            "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
          budget: 150000000,
          revenue: 1023784195,
          genres: ['Animation', 'Adventure', 'Family', 'Comedy'],
          runtime: 108,
        },
        {
          id: 181808,
          title: 'Star Wars: The Last Jedi',
          tagline: 'The Saga Continues',
          vote_average: 7.1,
          vote_count: 4732,
          release_date: '2017-12-13',
          poster_path: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
          overview:
            'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
          budget: 200000000,
          revenue: 1325937250,
          genres: ['Fantasy', 'Adventure', 'Science Fiction'],
          runtime: 152,
        },
        {
          id: 284054,
          title: 'Black Panther',
          tagline: 'Long live the king',
          vote_average: 7.3,
          vote_count: 3788,
          release_date: '2018-02-13',
          poster_path: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
          overview:
            "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
          budget: 200000000,
          revenue: 1245257672,
          genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
          runtime: 134,
        },
        {
          id: 354912,
          title: 'Coco',
          tagline: 'The celebration of a lifetime',
          vote_average: 7.8,
          vote_count: 3619,
          release_date: '2017-10-27',
          poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
          overview:
            "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
          budget: 175000000,
          revenue: 700920729,
          genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
          runtime: 105,
        },
        {
          id: 333339,
          title: 'Ready Player One',
          tagline: 'A better reality awaits.',
          vote_average: 8.1,
          vote_count: 617,
          release_date: '2018-03-28',
          poster_path: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
          overview:
            'When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.',
          budget: 175000000,
          revenue: 0,
          genres: ['Adventure', 'Science Fiction', 'Action'],
          runtime: 140,
        },
        {
          id: 338970,
          title: 'Tomb Raider',
          tagline: 'Her legend begins',
          vote_average: 6.2,
          vote_count: 817,
          release_date: '2018-03-08',
          poster_path: 'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
          overview:
            'Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.',
          budget: 94000000,
          revenue: 126025000,
          genres: ['Action', 'Adventure'],
          runtime: 118,
        },
        {
          id: 284053,
          title: 'Thor: Ragnarok',
          tagline: 'No Hammer. No Problem.',
          vote_average: 7.4,
          vote_count: 5349,
          release_date: '2017-10-25',
          poster_path: 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
          overview:
            'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.',
          budget: 180000000,
          revenue: 854229371,
          genres: ['Action', 'Adventure', 'Fantasy'],
          runtime: 130,
        },
        {
          id: 321612,
          title: 'Beauty and the Beast',
          tagline: 'Be our guest.',
          vote_average: 6.8,
          vote_count: 7861,
          release_date: '2017-03-16',
          poster_path: 'https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg',
          overview:
            "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
          budget: 160000000,
          revenue: 1263521126,
          genres: ['Family', 'Fantasy', 'Romance'],
          runtime: 129,
        },
        {
          id: 399055,
          title: 'The Shape of Water',
          tagline: 'A Fairy Tale for Troubled Times',
          vote_average: 7.3,
          vote_count: 3200,
          release_date: '2017-12-01',
          poster_path: 'https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg',
          overview:
            'An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.',
          budget: 19500000,
          revenue: 185545281,
          genres: ['Drama', 'Fantasy', 'Romance'],
          runtime: 123,
        },
      ],
      total: 3000,
      offset: 0,
      limit: 10,
    };

    global.fetch = jest.fn().mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(expected),
      };
      return Promise.resolve(fetchResponse);
    });

    const moviesData = await getMovies();
    expect(fetch).toHaveBeenCalledWith('http://react-cdp-api.herokuapp.com/movies');

    global.fetch.mockClear();
    delete global.fetch;
  });
});

describe('Fetch movies by sort type API', () => {
  test('returns movies data', async () => {
    const expected = {
      data: [
        {
          id: 337167,
          title: 'Fifty Shades Freed',
          tagline: "Don't miss the climax",
          vote_average: 6.1,
          vote_count: 1195,
          release_date: '2018-02-07',
          poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
          overview:
            'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
          budget: 55000000,
          revenue: 136906000,
          genres: ['Drama', 'Romance'],
          runtime: 106,
        },
        {
          id: 269149,
          title: 'Zootopia',
          tagline: 'Welcome to the urban jungle.',
          vote_average: 7.7,
          vote_count: 6795,
          release_date: '2016-02-11',
          poster_path: 'https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg',
          overview:
            "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
          budget: 150000000,
          revenue: 1023784195,
          genres: ['Animation', 'Adventure', 'Family', 'Comedy'],
          runtime: 108,
        },
        {
          id: 181808,
          title: 'Star Wars: The Last Jedi',
          tagline: 'The Saga Continues',
          vote_average: 7.1,
          vote_count: 4732,
          release_date: '2017-12-13',
          poster_path: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
          overview:
            'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
          budget: 200000000,
          revenue: 1325937250,
          genres: ['Fantasy', 'Adventure', 'Science Fiction'],
          runtime: 152,
        },
        {
          id: 284054,
          title: 'Black Panther',
          tagline: 'Long live the king',
          vote_average: 7.3,
          vote_count: 3788,
          release_date: '2018-02-13',
          poster_path: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
          overview:
            "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
          budget: 200000000,
          revenue: 1245257672,
          genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
          runtime: 134,
        },
        {
          id: 354912,
          title: 'Coco',
          tagline: 'The celebration of a lifetime',
          vote_average: 7.8,
          vote_count: 3619,
          release_date: '2017-10-27',
          poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
          overview:
            "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
          budget: 175000000,
          revenue: 700920729,
          genres: ['Adventure', 'Comedy', 'Family', 'Animation'],
          runtime: 105,
        },
        {
          id: 333339,
          title: 'Ready Player One',
          tagline: 'A better reality awaits.',
          vote_average: 8.1,
          vote_count: 617,
          release_date: '2018-03-28',
          poster_path: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
          overview:
            'When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.',
          budget: 175000000,
          revenue: 0,
          genres: ['Adventure', 'Science Fiction', 'Action'],
          runtime: 140,
        },
        {
          id: 338970,
          title: 'Tomb Raider',
          tagline: 'Her legend begins',
          vote_average: 6.2,
          vote_count: 817,
          release_date: '2018-03-08',
          poster_path: 'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
          overview:
            'Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.',
          budget: 94000000,
          revenue: 126025000,
          genres: ['Action', 'Adventure'],
          runtime: 118,
        },
        {
          id: 284053,
          title: 'Thor: Ragnarok',
          tagline: 'No Hammer. No Problem.',
          vote_average: 7.4,
          vote_count: 5349,
          release_date: '2017-10-25',
          poster_path: 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
          overview:
            'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.',
          budget: 180000000,
          revenue: 854229371,
          genres: ['Action', 'Adventure', 'Fantasy'],
          runtime: 130,
        },
        {
          id: 321612,
          title: 'Beauty and the Beast',
          tagline: 'Be our guest.',
          vote_average: 6.8,
          vote_count: 7861,
          release_date: '2017-03-16',
          poster_path: 'https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg',
          overview:
            "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
          budget: 160000000,
          revenue: 1263521126,
          genres: ['Family', 'Fantasy', 'Romance'],
          runtime: 129,
        },
        {
          id: 399055,
          title: 'The Shape of Water',
          tagline: 'A Fairy Tale for Troubled Times',
          vote_average: 7.3,
          vote_count: 3200,
          release_date: '2017-12-01',
          poster_path: 'https://image.tmdb.org/t/p/w500/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg',
          overview:
            'An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.',
          budget: 19500000,
          revenue: 185545281,
          genres: ['Drama', 'Fantasy', 'Romance'],
          runtime: 123,
        },
      ],
      total: 3000,
      offset: 0,
      limit: 10,
    };

    global.fetch = jest.fn().mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(expected),
      };
      return Promise.resolve(fetchResponse);
    });

    const moviesData = await getMoviesBySortType('release_date');

    expect(moviesData).toMatchObject(expected);

    global.fetch.mockClear();
    delete global.fetch;
  });

  test('calls', async () => {
    const expected = {
      data: [
        {
          id: 447365,
          title: 'Guardians of the Galaxy Vol. 3',
          tagline: '',
          vote_average: 0,
          vote_count: 9,
          release_date: '2020-05-01',
          poster_path: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
          overview: "The third film based on Marvel's Guardians of the Galaxy.",
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Adventure', 'Science Fiction'],
          runtime: null,
        },
        {
          id: 424785,
          title: 'Transformers 7',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '2019-06-26',
          poster_path: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
          overview: 'Plot unknown.',
          budget: 0,
          revenue: 0,
          genres: ['Science Fiction', 'Action', 'Adventure'],
          runtime: null,
        },
        {
          id: 299534,
          title: 'Untitled Avengers',
          tagline: '',
          vote_average: 0,
          vote_count: 9,
          release_date: '2019-04-24',
          poster_path: 'https://image.tmdb.org/t/p/w500/aMETsaNNcDc6g5ZatQtVbySnSaA.jpg',
          overview: 'The culmination of the Marvel Cinematic Universe.',
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Adventure', 'Science Fiction'],
          runtime: null,
        },
        {
          id: 287947,
          title: 'Shazam!',
          tagline: '',
          vote_average: 0,
          vote_count: 5,
          release_date: '2019-04-05',
          poster_path: 'https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg',
          overview:
            "We all have a superhero inside us, it just takes a bit of magic to bring it out. In Billy Batson's case, by shouting out one word--SHAZAM!--this streetwise 14-year-old foster kid can turn into the adult superhero Shazam, courtesy of an ancient wizard.Still a kid at heart--inside a ripped, godlike body--Shazam revels in this adult version of himself by doing what any teen would do with superpowers: have fun with them! Can he fly? Does he have X-ray vision? Can he shoot lightning out of his hands? Can he skip his social studies test? Shazam sets out to test the limits of his abilities with the joyful recklessness of a child. But he'll need to master these powers quickly in order to fight the deadly forces of evil controlled by Doctor Thaddeus Sivana.",
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
          runtime: null,
        },
        {
          id: 320288,
          title: 'X-Men: Dark Phoenix',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '2019-02-14',
          poster_path: 'https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg',
          overview:
            'Gathered together by Professor Charles Xavier to protect a world that fears and hates them, the X-Men had fought many battles, been on adventures that spanned galaxies, grappled enemies of limitless might, but none of this could prepare them for the most shocking struggle they would ever face. One of their own members, Jean Grey, has gained power beyond all comprehension, and that power has corrupted her absolutely! Now, they must decide if the life of the woman they cherish is worth the existence of the entire universe!',
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Science Fiction'],
          runtime: null,
        },
        {
          id: 181790,
          title: 'Journey 3: From the Earth to the Moon',
          tagline: '',
          vote_average: 0,
          vote_count: 7,
          release_date: '2018-12-31',
          poster_path: 'https://image.tmdb.org/t/p/w500/98tbNloMBztAVnWpAznKKVUdi2O.jpg',
          overview: 'Sean and Hank go on their biggest adventure yet, to the moon.',
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
          runtime: null,
        },
        {
          id: 297802,
          title: 'Aquaman',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '2018-12-19',
          poster_path: 'https://image.tmdb.org/t/p/w500/sshNRCbtU2ON8SiWLycQzr05doX.jpg',
          overview:
            'Following the events of Justice League, Arthur Curry, the reluctant ruler of the underwater kingdom of Atlantis, is caught between surface dwellers and his own people who are ready to lash out and invade the surface.',
          budget: 160000000,
          revenue: 0,
          genres: ['Action', 'Fantasy', 'Science Fiction'],
          runtime: null,
        },
        {
          id: 353081,
          title: 'Mission: Impossible - Fallout',
          tagline: '',
          vote_average: 0,
          vote_count: 3,
          release_date: '2018-07-26',
          poster_path: 'https://image.tmdb.org/t/p/w500/A2W75CVz9l8gEeWhQiiftlOCkgi.jpg',
          overview:
            'The sixth installment in the "Mission: Impossible". When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.',
          budget: 0,
          revenue: 0,
          genres: ['Adventure', 'Action', 'Thriller'],
          runtime: null,
        },
        {
          id: 351286,
          title: 'Jurassic World: Fallen Kingdom',
          tagline: 'Life finds a way',
          vote_average: 0,
          vote_count: 28,
          release_date: '2018-06-01',
          poster_path: 'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
          overview:
            'A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, where the creatures have freely roamed for several years after the demise of an animal theme park known as Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.',
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Adventure', 'Drama', 'Science Fiction', 'Thriller'],
          runtime: null,
        },
        {
          id: 348350,
          title: 'Solo: A Star Wars Story',
          tagline: '',
          vote_average: 0,
          vote_count: 2,
          release_date: '2018-05-23',
          poster_path: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
          overview:
            'Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.',
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Adventure', 'Family', 'Science Fiction'],
          runtime: null,
        },
      ],
      total: 3000,
      offset: 0,
      limit: 10,
    };

    global.fetch = jest.fn().mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(expected),
      };
      return Promise.resolve(fetchResponse);
    });

    const moviesData = await getMoviesBySortType('release_date');
    expect(fetch).toHaveBeenCalled();

    global.fetch.mockClear();
    delete global.fetch;
  });
  test('calls with correct URL', async () => {
    const expected = {
      data: [
        {
          id: 447365,
          title: 'Guardians of the Galaxy Vol. 3',
          tagline: '',
          vote_average: 0,
          vote_count: 9,
          release_date: '2020-05-01',
          poster_path: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
          overview: "The third film based on Marvel's Guardians of the Galaxy.",
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Adventure', 'Science Fiction'],
          runtime: null,
        },
        {
          id: 424785,
          title: 'Transformers 7',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '2019-06-26',
          poster_path: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
          overview: 'Plot unknown.',
          budget: 0,
          revenue: 0,
          genres: ['Science Fiction', 'Action', 'Adventure'],
          runtime: null,
        },
        {
          id: 299534,
          title: 'Untitled Avengers',
          tagline: '',
          vote_average: 0,
          vote_count: 9,
          release_date: '2019-04-24',
          poster_path: 'https://image.tmdb.org/t/p/w500/aMETsaNNcDc6g5ZatQtVbySnSaA.jpg',
          overview: 'The culmination of the Marvel Cinematic Universe.',
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Adventure', 'Science Fiction'],
          runtime: null,
        },
        {
          id: 287947,
          title: 'Shazam!',
          tagline: '',
          vote_average: 0,
          vote_count: 5,
          release_date: '2019-04-05',
          poster_path: 'https://image.tmdb.org/t/p/w500/yUOJHa9XmB1H0iYodG9Kb3YCc9T.jpg',
          overview:
            "We all have a superhero inside us, it just takes a bit of magic to bring it out. In Billy Batson's case, by shouting out one word--SHAZAM!--this streetwise 14-year-old foster kid can turn into the adult superhero Shazam, courtesy of an ancient wizard.Still a kid at heart--inside a ripped, godlike body--Shazam revels in this adult version of himself by doing what any teen would do with superpowers: have fun with them! Can he fly? Does he have X-ray vision? Can he shoot lightning out of his hands? Can he skip his social studies test? Shazam sets out to test the limits of his abilities with the joyful recklessness of a child. But he'll need to master these powers quickly in order to fight the deadly forces of evil controlled by Doctor Thaddeus Sivana.",
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
          runtime: null,
        },
        {
          id: 320288,
          title: 'X-Men: Dark Phoenix',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '2019-02-14',
          poster_path: 'https://image.tmdb.org/t/p/w500/6qmsupE0opYPIaBGe7T5D2FBzLs.jpg',
          overview:
            'Gathered together by Professor Charles Xavier to protect a world that fears and hates them, the X-Men had fought many battles, been on adventures that spanned galaxies, grappled enemies of limitless might, but none of this could prepare them for the most shocking struggle they would ever face. One of their own members, Jean Grey, has gained power beyond all comprehension, and that power has corrupted her absolutely! Now, they must decide if the life of the woman they cherish is worth the existence of the entire universe!',
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Science Fiction'],
          runtime: null,
        },
        {
          id: 181790,
          title: 'Journey 3: From the Earth to the Moon',
          tagline: '',
          vote_average: 0,
          vote_count: 7,
          release_date: '2018-12-31',
          poster_path: 'https://image.tmdb.org/t/p/w500/98tbNloMBztAVnWpAznKKVUdi2O.jpg',
          overview: 'Sean and Hank go on their biggest adventure yet, to the moon.',
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Adventure', 'Fantasy', 'Science Fiction'],
          runtime: null,
        },
        {
          id: 297802,
          title: 'Aquaman',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          release_date: '2018-12-19',
          poster_path: 'https://image.tmdb.org/t/p/w500/sshNRCbtU2ON8SiWLycQzr05doX.jpg',
          overview:
            'Following the events of Justice League, Arthur Curry, the reluctant ruler of the underwater kingdom of Atlantis, is caught between surface dwellers and his own people who are ready to lash out and invade the surface.',
          budget: 160000000,
          revenue: 0,
          genres: ['Action', 'Fantasy', 'Science Fiction'],
          runtime: null,
        },
        {
          id: 353081,
          title: 'Mission: Impossible - Fallout',
          tagline: '',
          vote_average: 0,
          vote_count: 3,
          release_date: '2018-07-26',
          poster_path: 'https://image.tmdb.org/t/p/w500/A2W75CVz9l8gEeWhQiiftlOCkgi.jpg',
          overview:
            'The sixth installment in the "Mission: Impossible". When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.',
          budget: 0,
          revenue: 0,
          genres: ['Adventure', 'Action', 'Thriller'],
          runtime: null,
        },
        {
          id: 351286,
          title: 'Jurassic World: Fallen Kingdom',
          tagline: 'Life finds a way',
          vote_average: 0,
          vote_count: 28,
          release_date: '2018-06-01',
          poster_path: 'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
          overview:
            'A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, where the creatures have freely roamed for several years after the demise of an animal theme park known as Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.',
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Adventure', 'Drama', 'Science Fiction', 'Thriller'],
          runtime: null,
        },
        {
          id: 348350,
          title: 'Solo: A Star Wars Story',
          tagline: '',
          vote_average: 0,
          vote_count: 2,
          release_date: '2018-05-23',
          poster_path: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
          overview:
            'Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.',
          budget: 0,
          revenue: 0,
          genres: ['Action', 'Adventure', 'Family', 'Science Fiction'],
          runtime: null,
        },
      ],
      total: 3000,
      offset: 0,
      limit: 10,
    };

    global.fetch = jest.fn().mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(expected),
      };
      return Promise.resolve(fetchResponse);
    });

    const moviesData = await getMoviesBySortType('release_date');
    expect(fetch).toHaveBeenCalledWith(
      'http://react-cdp-api.herokuapp.com/movies?sortBy=release_date&sortOrder=desc'
    );

    global.fetch.mockClear();
    delete global.fetch;
  });
});
