import {times} from '../test-utils';

describe('times Func.', () => {
  describe('given and array with n items', () => {
    const arr = times(3);
    it('should return arr with n items', () => {
      expect(arr.length).toBe(3);
    });
    it('should have first element equal to 1', () => {
      expect(arr[0]).toBe(1);
    });
  });
});
