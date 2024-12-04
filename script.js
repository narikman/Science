// Функции для перехода между секциями
function openWhatIsIt() {
    console.log("Opening 'What is it' section");
    document.querySelector('.app-container').style.display = 'none';
    document.getElementById('whatIsItSection').style.display = 'block';
}

function closeWhatIsIt() {
    document.querySelector('.app-container').style.display = 'flex';
    document.getElementById('whatIsItSection').style.display = 'none';
}

function openMap() {
    console.log("Opening Map section");
    document.querySelector('.app-container').style.display = 'none';
    document.getElementById('mapSection').style.display = 'block';
}

function closeMap() {
    document.querySelector('.app-container').style.display = 'flex';
    document.getElementById('mapSection').style.display = 'none';
}

function openAboutUs() {
    console.log("Opening About Us section");
    document.querySelector('.app-container').style.display = 'none';
    document.getElementById('aboutUsSection').style.display = 'block';
}

function closeAboutUs() {
    document.querySelector('.app-container').style.display = 'flex';
    document.getElementById('aboutUsSection').style.display = 'none';
}

// Логика для определения типа предмета
function findOut() {
    const item = document.getElementById('itemInput').value.trim().toLowerCase();
    const result = document.getElementById('result');
    
    if (item === '') {
        result.textContent = "Please enter an item!";
        return;
    }

    let category = "other";

    if (item.includes("plastic")) {
        category = "plastic";
    } else if (item.includes("glass")) {
        category = "glass";
    } else if (item.includes("paper")) {
        category = "paper";
    }

    result.textContent = `This is a ${category} item!`;
}
