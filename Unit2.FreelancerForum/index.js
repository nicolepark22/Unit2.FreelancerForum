let freelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        price: 30,
    },
    {
        name: "Bob",
        occupation: "Teacher",
        price: 50,
    },
    {
        name: "Carol",
        occupation: "Programmer",
        price: 70,
    },
    {
        name: "Kaden",
        occupation: "Welder",
        price: 40,
    },
    {
        name: "Traver",
        occupation: "Baseball Coach",
        price: 35,
    },
    {
        name: "Sue",
        occupation: "Math Tutor",
        price: 45,
    },
    {
        name: "Allen",
        occupation: "Janitor",
        price: 25,
    },
    {
        name: "George",
        occupation: "Handyman",
        price: 65,
    },
    {
        name: "Fred",
        occupation: "Mechanic",
        price: 70,
    },
];

// select the let element = docmuent.querySelector(`#freelancer-name .freelancer${index}`)
// add the frist three freelancers to the table

//

// run a set timeout that randomly modifies a random one of the freelancers on the list with a new random frelancer from the freelancers array
// let randomFreelancer = random freelancer from array
// let randomPosition = get random position from the freelancers list (1, 2, or 3)
//  modify the cooresponding elements with the new freelancer

const freelancerObj = {
    1: {
        nameElement: document.querySelector(`#freelancer-name .freelancer1`),
        occupationElement: document.querySelector(`#freelancer-occupation .freelancer1`),
        priceElement: document.querySelector(`#freelancer-price .freelancer1`),
        price: null,
        index: null,
    },
    2: {
        nameElement: document.querySelector(`#freelancer-name .freelancer2`),
        occupationElement: document.querySelector(`#freelancer-occupation .freelancer2`),
        priceElement: document.querySelector(`#freelancer-price .freelancer2`),
        price: null,
        index: null,
    },
    3: {
        nameElement: document.querySelector(`#freelancer-name .freelancer3`),
        occupationElement: document.querySelector(`#freelancer-occupation .freelancer3`),
        priceElement: document.querySelector(`#freelancer-price .freelancer3`),
        price: null,
        index: null,
    },
};

const addFreelancerToList = (freelancer, position) => {
    freelancerObj[position].nameElement.innerHTML = `<li>${freelancer.name}</li>`;
    freelancerObj[position].occupationElement.innerHTML = `<li>${freelancer.occupation}</li>`;
    freelancerObj[position].priceElement.innerHTML = `<li>${freelancer.price}</li>`;
};

const modifyAvgPrice = () => {
    const avgPriceElement = document.getElementById("average-price");
    const sumPrice = freelancerObj[1].price + freelancerObj[2].price + freelancerObj[3].price;
    const avgPrice = Math.floor(sumPrice / 3);

    avgPriceElement.innerHTML = avgPrice;
};

const getNewFreelancer = () => {
    // returns a random freelancer from the freelancers array
    let usedIndexes = [freelancerObj[1].index, freelancerObj[2].index, freelancerObj[3].index];
    let newIndex;
    while (!newIndex) {
        newIndex = Math.floor(Math.random() * freelancers.length);
        if (usedIndexes.find((i) => i === newIndex)) newIndex = null;
    }
    let newFreelancer = freelancers[newIndex];
    newFreelancer.index = newIndex;
    return newFreelancer;
};

const getNewFreelancerPosition = () => {
    // returns random number between 1 and 3

    return Math.floor(Math.random() * 3 + 1);
};

// initiate freelancer list
const initiateFreelancerList = () => {
    for (let i = 0; i < 3; i++) {
        let currentFreelancer = freelancers[i];
        addFreelancerToList(currentFreelancer, i + 1);
        freelancerObj[i + 1].price = currentFreelancer.price;
        freelancerObj[i + 1].index = i;
    }
    modifyAvgPrice();
};
initiateFreelancerList();

// update freelancer list
setInterval(() => {
    const newFreelancer = getNewFreelancer();
    const newFreelancerPosition = getNewFreelancerPosition();

    freelancerObj[newFreelancerPosition].price = newFreelancer.price;
    freelancerObj[newFreelancerPosition].index = newFreelancer.index;
    addFreelancerToList(newFreelancer, newFreelancerPosition);
    modifyAvgPrice();
}, 3000);
