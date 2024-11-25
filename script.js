function openMap() {
    document.querySelector('.app-container').style.display = 'none';
    document.getElementById('mapSection').style.display = 'block';
}

function closeMap() {
    document.querySelector('.app-container').style.display = 'flex';
    document.getElementById('mapSection').style.display = 'none';
}

function openWhatIsIt() {
    document.querySelector('.app-container').style.display = 'none';
    document.getElementById('whatIsItSection').style.display = 'block';
}

function closeWhatIsIt() {
    document.querySelector('.app-container').style.display = 'flex';
    document.getElementById('whatIsItSection').style.display = 'none';
}

function openAboutUs() {
    document.querySelector('.app-container').style.display = 'none';
    document.getElementById('aboutUsSection').style.display = 'block';
}

function closeAboutUs() {
    document.querySelector('.app-container').style.display = 'flex';
    document.getElementById('aboutUsSection').style.display = 'none';
}
