import '@testing-library/jest-dom';
import { getAllPhones } from '../../helpers/getAllPhones';
import testData from '../data/phones.json';

describe('Testing endpoint', () => {

  test('should return phones list', async () => {

    const phonesList = await getAllPhones();
    expect(testData).toEqual(phonesList);

  });

})
