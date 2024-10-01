function calculateFinalScore(obj) {

    if(typeof obj !== 'object' || obj === null){
        return "Invalid Input";
    }

    if (typeof obj.name !== 'string' ||
        typeof obj.testScore !== 'number' || obj.testScore > 50 ||
        typeof obj.schoolGrade !== 'number' || obj.schoolGrade > 30 ||
        typeof obj.isFFamily !== 'boolean') {
        return false;
    }

    let totalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily) {
        totalScore += 20;
    }

    if (totalScore >= 80 && totalScore <= 100) {
        return true;
    } else {
        return false;
    }
}

// let student1 = { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  };

// const calScore = calculateFinalScore();
// console.log(calScore);
