export const compare = (a, b) => {
    a = a.timestamp;
    b = b.timestamp;
    let comparison = 0;
    if (a < b) {
        comparison = 1;
    } else if (a > b) {
        comparison = -1;
    }
    return comparison;
};

export const sortLeaderBoard = (a, b) => {
    a = a.questions.length + Object.keys(a.answers).length;
    b = b.questions.length + Object.keys(b.answers).length;
    let comparison = 0;
    if (a < b) {
        comparison = 1;
    } else if (a > b) {
        comparison = -1;
    }
    return comparison;
};

