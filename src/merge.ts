export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const result: number[] = [];
    let i = collection_1.length - 1, j = 0, k = 0;

    while (i >= 0 && j < collection_2.length && k < collection_3.length) {
        if (collection_1[i] <= collection_2[j] && collection_1[i] <= collection_3[k]) {
            result.push(collection_1[i--]);
        } else if (collection_2[j] <= collection_1[i] && collection_2[j] <= collection_3[k]) {
            result.push(collection_2[j++]);
        } else {
            result.push(collection_3[k++]);
        }
    }

    while (i >= 0) {
        if (j < collection_2.length && collection_2[j] <= collection_1[i]) {
            result.push(collection_2[j++]);
        } else if (k < collection_3.length && collection_3[k] <= collection_1[i]) {
            result.push(collection_3[k++]);
        } else {
            result.push(collection_1[i--]);
        }
    }

    while (j < collection_2.length) {
        if (k < collection_3.length && collection_3[k] <= collection_2[j]) {
            result.push(collection_3[k++]);
        } else {
            result.push(collection_2[j++]);
        }
    }

    while (k < collection_3.length) {
        result.push(collection_3[k++]);
    }

    return result;
}
  