function mergeSortedArrays(t1, t2){
    result = [];
    i = 0;
    j = 0;
    k = 0;
    while (i < length(t1) && j < length(t2)){
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

    while (i < length(t1)){
        result[k] = t1[i];
        i++;
        k++;
    }

    while (j < length(t2)){
        result[k] = t2[j];
        j++;
        k++;
    }

    return result;
}

module.exports = mergeSortedArrays