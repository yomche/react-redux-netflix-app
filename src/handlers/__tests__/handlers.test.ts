import { generatedUrlByGenre, generatedUrlBySortType, generatedUrlByInputValue } from '../index';
import { moviesUrl } from '../../constants/app.constants';

describe('Generating URL function', () => {
  const testSortType = 'testString';
  const testSearchType = 'testString';
  const testMovieGenre = 'testString';
  const testInputValue = 'testString';

  test('returns generated URL by genre ', () => {
    expect(generatedUrlByGenre(testSortType, testMovieGenre)).toBe(
      `${moviesUrl}?sortBy=${testSortType}&sortOrder=desc&search=${testMovieGenre}&searchBy=genres`
    );
  });

  test('returns generated URL by sort type ', () => {
    expect(generatedUrlBySortType(testSortType)).toBe(
      `${moviesUrl}?sortBy=${testSortType}&sortOrder=desc`
    );
  });

  test('returns generated URL by input value ', () => {
    expect(generatedUrlByInputValue(testSortType, testInputValue, testSearchType)).toBe(
      `${moviesUrl}?sortBy=${testSortType}&sortOrder=desc&search=${testInputValue}&searchBy=${testSearchType}`
    );
  });
});
