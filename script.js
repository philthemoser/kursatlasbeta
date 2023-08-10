const coursesData = [
    { name: 'Umgang mit Komplexität und Diversität im internationalen Kontext', category: 'Technologie', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Basic – Sicherheitstraining', category: 'Technologie', language: 'Englisch', type: 'Persönlich' },
    { name: 'Intensiv – Sicherheitstraining', category: 'Technologie', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Lebensrettende Maßnahmen im Auslandseinsatz', category: 'Technologie', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Umgang mit Stress, Belastung und Trauma', category: 'Geschäft', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Macht-bewusst. Grenzüberschreitung und sexualisierte Gewalt: Erkennen – Verstehen – Handeln', category: 'Geschäft', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Orientierungskurs Landessprachen', category: 'Technologie', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Moderieren im internationalen Kontext', category: 'Technologie', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Präsentieren im internationalen Kontext', category: 'Geschäft', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Effective negotiation in the international context', category: 'Geschäft', language: 'Englisch', type: 'Persönlich' },
    { name: 'Beratungsrollen und Beratungskompetenzen', category: 'Geschäft', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Projektmanagement in der internationalen Zusammenarbeit', category: 'Technologie', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Organisationen verstehen und begleiten', category: 'Geschäft', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Partner*in vor der Ausreise', category: 'Geschäft', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Ausreise mit Kindern', category: 'Geschäft', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Learning 4 Development – Dein Thema im Fokus', category: 'Technologie', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Landesanalyse Präsenz', category: 'Geschäft', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Entwicklungspolitik – Agenda 2030 gemeinsam gestalten Präsenz', category: 'Geschäft', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Fachbezogenes Sprachtraining Präsenz', category: 'Geschäft', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Sprachtraining Präsenz', category: 'Geschäft', language: 'Deutsch', type: 'Persönlich' },
    { name: 'Viren, Bakterien, Parasiten – gut geschützt im Auslandseinsatz', category: 'Technologie', language: 'Deutsch', type: 'Online' },
    { name: 'Refresher Sicherheitstraining', category: 'Technologie', language: 'Deutsch', type: 'Online' },
    { name: 'Veränderungsmanagement', category: 'Geschäft', language: 'Deutsch', type: 'Online' },
    { name: 'Kooperationen und Netzwerke', category: 'Geschäft', language: 'Deutsch', type: 'Online' },
    { name: 'Mit Kindern im Einsatzland leben', category: 'Geschäft', language: 'Deutsch', type: 'Online' },
    { name: 'Als Partner*in im Einsatzland', category: 'Geschäft', language: 'Deutsch', type: 'Online' },
    { name: 'Landesanalyse Digital', category: 'Technologie', language: 'Deutsch', type: 'Online' },
    { name: 'Entwicklungspolitik – Agenda 2030 gemeinsam gestalten Digital', category: 'Geschäft', language: 'Deutsch', type: 'Online' },
    { name: 'Fachbezogenes Sprachtraining Digital', category: 'Geschäft', language: 'Deutsch', type: 'Online' },
    { name: 'Sprachtraining Digital', category: 'Geschäft', language: 'Deutsch', type: 'Online' },
    // ... Add more course data as needed ...
];


const coursesContainer = document.getElementById('courses');
const categoryButtons = document.querySelectorAll('.category-button');
const languageButtons = document.querySelectorAll('.language-button');
const typeButtons = document.querySelectorAll('.type-button');
const clearButton = document.getElementById('clear-button'); // New clear button

// Display all courses at the start
displayCourses(coursesData);

// Handle button clicks
const updateCoursesDisplay = () => {
    const selectedCategories = Array.from(categoryButtons)
        .filter(button => button.classList.contains('selected'))
        .map(button => button.value);

    const selectedLanguages = Array.from(languageButtons)
        .filter(button => button.classList.contains('selected'))
        .map(button => button.value);

    const selectedTypes = Array.from(typeButtons)
        .filter(button => button.classList.contains('selected'))
        .map(button => button.value);

    const filteredCourses = coursesData.filter(course =>
        (selectedCategories.length === 0 || selectedCategories.includes(course.category)) &&
        (selectedLanguages.length === 0 || selectedLanguages.includes(course.language)) &&
        (selectedTypes.length === 0 || selectedTypes.includes(course.type))
    );

    displayCourses(filteredCourses);
};

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected');
        updateCoursesDisplay();
    });
});

languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected');
        updateCoursesDisplay();
    });
});

typeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected');
        updateCoursesDisplay();
    });
});

// Clear all filters
clearButton.addEventListener('click', () => {
    categoryButtons.forEach(button => button.classList.remove('selected'));
    languageButtons.forEach(button => button.classList.remove('selected'));
    typeButtons.forEach(button => button.classList.remove('selected'));
    updateCoursesDisplay();
});

// Display courses in the UI
function displayCourses(courses) {
    coursesContainer.innerHTML = '';
    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course';
        courseDiv.textContent = course.name;
        coursesContainer.appendChild(courseDiv);
    });

// Translation data
const translation = {
    en: {
        title: 'Course Atlas for Pre-Departure Preparation',
        description: 'Filter and find the perfect training courses that match your preferences. Select categories, language, and type to narrow down your selection.',
        categories: 'Select Categories:',
        languages: 'Select Language:',
        types: 'Select Type:',
        resetFilters: 'Reset All Filters',
    },
    es: {
        title: 'Atlas de Cursos para la Preparación Antes del Viaje',
        description: 'Filtre y encuentre los cursos de capacitación perfectos que se ajusten a sus preferencias. Seleccione categorías, idioma y tipo para reducir su selección.',
        categories: 'Seleccionar Categorías:',
        languages: 'Seleccionar Idioma:',
        types: 'Seleccionar Tipo:',
        resetFilters: 'Restablecer Todos los Filtros',
    },
    de: {
        title: 'Kursatlas der Ausreisevorbereitung',
        description: 'Filtern und finden Sie die perfekten Schulungskurse, die Ihren Vorlieben entsprechen. Wählen Sie Kategorien, Sprache und Typ aus, um Ihre Auswahl einzugrenzen.',
        categories: 'Kategorien auswählen:',
        languages: 'Sprache auswählen:',
        types: 'Typ auswählen:',
        resetFilters: 'Alle Filter zurücksetzen',
    },
};

// Default language
let currentTranslation = 'de';

// Function to update UI based on selected language
function updateTranslation() {
    document.title = translation[currentTranslation].title;
    document.querySelector('h1').textContent = translation[currentTranslation].title;
    document.querySelector('.description p').textContent = translation[currentTranslation].description;
    document.querySelectorAll('.category-button legend').forEach(legend => legend.textContent = translation[currentTranslation].categories);
    document.querySelectorAll('.language-button legend').forEach(legend => legend.textContent = translation[currentTranslation].languages);
    document.querySelectorAll('.type-button legend').forEach(legend => legend.textContent = translation[currentTranslation].types);
    document.getElementById('clear-button').textContent = translation[currentTranslation].resetFilters;
}

    // Translation data for buttons and legends
const buttonLegendTranslation = {
    en: {
        categories: 'Select Categories:',
        languages: 'Select Language:',
        types: 'Select Type:',
        resetFilters: 'Reset All Filters',
    },
    es: {
        categories: 'Seleccionar Categorías:',
        languages: 'Seleccionar Idioma:',
        types: 'Seleccionar Tipo:',
        resetFilters: 'Restablecer Todos los Filtros',
    },
    de: {
        categories: 'Kategorien auswählen:',
        languages: 'Sprache auswählen:',
        types: 'Typ auswählen:',
        resetFilters: 'Alle Filter zurücksetzen',
    },
};

// Function to update UI for buttons and legends based on selected language
function updateButtonLegendTranslation() {
    document.querySelectorAll('.category-button legend').forEach(legend => legend.textContent = buttonLegendTranslation[currentTranslation].categories);
    document.querySelectorAll('.language-button legend').forEach(legend => legend.textContent = buttonLegendTranslation[currentTranslation].languages);
    document.querySelectorAll('.type-button legend').forEach(legend => legend.textContent = buttonLegendTranslation[currentTranslation].types);
    document.getElementById('clear-button').textContent = buttonLegendTranslation[currentTranslation].resetFilters;
}

// Event listeners for language buttons
document.querySelectorAll('.translation-button').forEach(button => {
    button.addEventListener('click', () => {
        currentTranslation = button.getAttribute('data-lang');
        updateTranslation();
        updateButtonLegendTranslation(); // Update button and legend translations
    });
});

// Initialize UI with default language
updateTranslation();
updateButtonLegendTranslation(); // Initialize button and legend translations



