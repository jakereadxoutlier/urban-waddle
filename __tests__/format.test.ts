import { formatPrice } from '../src/utils/format';

test('formats number to price', () => {
  expect(formatPrice(1000)).toBe('$1,000');
});
