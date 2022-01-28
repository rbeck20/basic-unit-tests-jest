function mergeSortedArrays(t1, t2){
    result = [];
    i = 0;
    j = 0;
    k = 0;
    while (i < t1.length && j < t2.length){
        if (t1[i] < t2[j]){
            result[k] = t1[i];
            i++;
        }
        else {
            result[k] = t2[j];
            j++;
        }
        k++;
    }

    while (i < t1.length){
        result[k] = t1[i];
        i++;
        k++;
    }

    while (j < t2.length){
        result[k] = t2[j];
        j++;
        k++;
    }

    return result;
}

module.exports = mergeSortedArrays