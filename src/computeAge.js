function computeAge (birthday, currentDate){
    if (birthday.getMonth() < currentDate.getMonth()){
        return currentDate.getFullYear() - birthday.getFullYear();
    }
    else
        if (birthday.getMonth() > currentDate.getMonth()){
            return currentDate.getFullYear() - birthday.getFullYear() - 1;
        }

    else
        if (birthday.getDate() <= currentDate.getDate()){
            return currentDate.getFullYear() - birthday.getFullYear();
        }

        else
            return currentDate.getFullYear() - birthday.getFullYear() - 1;


}

module.exports = computeAge