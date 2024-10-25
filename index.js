// script.js
const peopleData = [
    {
        "title": "Sundar Pichai",
        "institution": "CEO of Google and Alphabet",
        "description": "A renowned technology leader and visionary, Sundar Pichai has been instrumental in driving Google's growth and innovation.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoguHACZpXrj5llOZZySnZ4OAxMg4z64julw&s"
    },
    {
        "title": "Satya Nadella",
        "institution": "CEO of Microsoft",
        "description": "Satya Nadella is a respected technology executive who has led Microsoft through a successful transformation.",
        "image": "https://static.startuptalky.com/2022/05/Satya-Nadella-Success-Story-StartupTalky.jpg",
    },
    {
        "title": "Tim Cook",
        "institution": "CEO of Apple",
        "description": "Tim Cook is a visionary leader who has continued Apple's legacy of innovation and success.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwTXiAs9A9SNGXOf3TDY8Et9kf9YueN4wi-w&s"
    }
];

const container = document.getElementById('people-container');

// Loop through the data and create cards dynamically
peopleData.forEach(person => {
    const personCard = document.createElement('div');
    personCard.classList.add('my-7', 'card', 'flex', 'flex-row', 'gap-10', 'mx-10');  // Added classes

    personCard.innerHTML = `
        <div class="w-96 flex">
            <img src="${person.image}" alt="${person.title}" class="">
        </div>
        <div class="w-2/3 py-3 flex flex-col gap-8">
            <h1 class="text-5xl font-bold text-grey-600">${person.title}</h1>
            <p class="text-red-500 text-2xl">${person.institution}</p>
            <hr class="bcard bg-gray-400 w-10 ml-0">
            <p class="text-xl text-gray-700 font-bold">${person.description}</p>
        </div>
    `;

    container.appendChild(personCard);
});