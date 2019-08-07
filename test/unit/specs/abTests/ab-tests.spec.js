import abTests from '@/abTests';
import { JOINED_AB_TEST_EXPERIMENT } from '@/store/mutation-types';

describe('AB Tests', () => {
  let store = {};

  beforeEach(() => {
    store = {
      commit: jest.fn(),
    };
  });

  it('sets up experiments', (done) => {
    const result = abTests(store);
    result.then(() => {
      expect(store.commit.mock.calls[0][0]).toBe(JOINED_AB_TEST_EXPERIMENT);
      done();
    });
  });
});
