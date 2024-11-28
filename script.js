
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

function openAboutUs() {
    document.querySelector('.app-container').style.display = 'none';
    document.getElementById('aboutUsSection').style.display = 'block';
}

function closeAboutUs() {
    document.querySelector('.app-container').style.display = 'flex';
    document.getElementById('aboutUsSection').style.display = 'none';
}

// Использование OpenAI API для классификации предмета
async function classifyItem(itemName) {
    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_OPENAI_API_KEY'  // Замените на ваш API ключ
            },
            body: JSON.stringify({
                model: 'gpt-4', 
                prompt: `Classify this item into categories such as paper, plastic, glass, or other: "${itemName}"`,
                max_tokens: 60
            })
        });

        const data = await response.json();
        if (response.ok) {
            const classification = data.choices[0].text.trim();
            return classification;
        } else {
            console.error('Error from API:', data);
            return "Error: Could not classify the item.";
        }
    } catch (error) {
        console.error('Fetch error:', error);
        return "Error: Could not connect to the classification service.";
    }
}

// Основная функция для определения типа предмета
async function findOut() {
    const item = document.getElementById('itemInput').value.trim().toLowerCase();
    const result = document.getElementById('result');
    
    if (item === '') {
        result.textContent = "Please enter an item!";
        return;
    }

    // Используем API для классификации
    const category = await classifyItem(item);
    result.textContent = `This is a ${category} item!`;
}
