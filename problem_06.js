const friend = ["rahim","karim","abdul","sadsd","heroAlom"];

function long_Name(ar) {
    return ar.reduce((longest, current) => 
        current.length > longest.length ? current : longest
    );
}

console.log(long_Name(friend));
