import { add } from '../index';

test('basic', () => {
    expect(3 + 4).toBe(7);
});

test('cover', () => {
    expect(add(3, 4)).toBe(7);
});
