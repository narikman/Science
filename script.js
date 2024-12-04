// Функции для перехода между секциями
function openWhatIsIt() {
    document.querySelector('.app-container').style.display = 'none';
    document.getElementById('whatIsItSection').style.display = 'block';
}

function closeWhatIsIt() {
    document.querySelector('.app-container').style.display = 'flex';
    document.getElementById('whatIsItSection').style.display = 'none';
}

function openMap() {
    document.querySelector('.app-container').style.display = 'none';
    document.getElementById('mapSection').style.display = 'block';
}

function closeMap() {
    document.querySelector('.app-container').style.display = 'flex';
    document.getElementById('mapSection').style.display = 'none';
}

// Логика для перемещения изображения (по аналогии с Google картами)
document.addEventListener('DOMContentLoaded', function () {
    const mapImage = document.querySelector('.map-frame');
    const mapContainer = document.querySelector('.map-container');

    let isDragging = false;
    let startX, startY;

    mapImage.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - mapImage.offsetLeft;
        startY = e.pageY - mapImage.offsetTop;
        mapContainer.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const x = e.pageX - startX;
            const y = e.pageY - startY;

            // Обновляем позицию изображения
            mapImage.style.left = `${x}px`;
            mapImage.style.top = `${y}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        mapContainer.style.cursor = 'grab';
    });
});
