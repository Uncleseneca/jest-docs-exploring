import { fetchData } from '../callbacks';
test('the fetched data should be BIG', done => {
  const callback = data => {
    expect(data).toBe('BIG');
    done();
  };

  fetchData(callback);
});
