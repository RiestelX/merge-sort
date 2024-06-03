import { merge } from '../merge';

describe('merge function', () => {
    it('merge / sort', () => {
        const collection_1 = [9, 7, 5, 3, 1];
        const collection_2 = [2, 4, 6, 8];
        const collection_3 = [0, 10, 12, 14];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14]);
    });

    it('empty array', () => {
        const collection_1: number[] = [];
        const collection_2 = [1, 2, 3];
        const collection_3 = [4, 5, 6];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('dynamic length', () => {
        const collection_1 = [8, 6, 4];
        const collection_2 = [1, 2];
        const collection_3 = [3, 5, 7, 9];

        const result = merge(collection_1, collection_2, collection_3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
