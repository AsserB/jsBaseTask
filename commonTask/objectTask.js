var workers = [
    {name: "John", salary: 500},
    {name: "Mike", salary: 1300},
    {name: "Linda", salary:1500},
    {name: "Alex", salary:1800}
];

const getWorthyWorkers = workersArr => {

    const wortyWorkers = [];

    for (let i = 0; i < workersArr.length; i++) {
        const name = workersArr[i];
        
        if (name.salary > 1000) {
            wortyWorkers.push (name.name)
        }

    }
    return wortyWorkers
}

console.log(getWorthyWorkers(workers))