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
];

function renderFreelancers() {
    let freelancersListings = document.getElementById("freelancers-listings");

    for (let i = 0; i < freelancers.length; i++) {
        let currentFreelancers = freelancers[i];

        // Creating parent element
        let listingsDiv = document.createElement("ul");
        listingsDiv.className = "listings";

        // add content to listings div element
        listingsDiv.innerHTML = `<li> <h3>Name</3> </li>
                        <li> ${currentFreelancers.name} </li>
                        li> <h3>Occupation</3> </li>
                        <li> ${currentFreelancers.occupation} </li>
                        li> <h3>Starting Price</3> </li>
                        <li> ${currentFreelancers.price} </li>`;

        // Appending the element to page
        freelancersListings.appendChild(listingsDiv);
    }
}
// invoke the function
renderFreelancers();
