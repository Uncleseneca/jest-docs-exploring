import { delay } from '../utils/delay';

export const fetchData = arg => delay(200).then(() => 'SMALL');

export const brokenFetchData = () => Promise.reject(new Error('bummer!'));
