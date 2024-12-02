const randomSettings = {
    formatName: 'first',
    transform: "default",
    sort: "default",
    lang: "rus",
    length: "long",
    gender: "male",
};

const namesData = {
    rus: {
        male: {
            long: {
                firstNames: ["Константин", "Александр", "Владислав", "Николай", "Максимус", "Максим", "Станислав"],
                lastNames: ["Константинов", "Александров", "Владиславов", "Николаев", "Станиславов"],
                middleNames: ["Константинович", "Александрович", "Владиславович", "Николаевич", "Станиславович"]
            },
            short: {
                firstNames: ["Ян", "Илья", "Макс", "Лев", "Егор"],
                lastNames: ["Петров", "Цак", "Миронов", "Соколов", "Иванов"],
                middleNames: ["Петрович", "Цакович", "Миронович", "Соколович", "Иванович"]
            }
        },
        woman: {
            long: {
                firstNames: ["Александра", "Валентина", "Екатерина", "Елизавета", "Светлана"],
                lastNames: ["Александрова", "Валентинова", "Екатерининская", "Елизаветина", "Светланова"],
                middleNames: ["Александровна", "Валентиновна", "Екатериновна", "Елизаветовна", "Светлановна"]
            },
            short: {
                firstNames: ["Аня", "Лена", "Юля", "Ира", "Зоя"],
                lastNames: ["Петрова", "Цакова", "Миронова", "Соколова", "Иванова"],
                middleNames: ["Петровна", "Цаковна", "Мироновна", "Соколовна", "Ивановна"]
            }
        }
    },
    eng: {
        male: {
            long: {
                firstNames: ["Alexander", "Christopher", "Nathaniel", "Benjamin", "Sebastian", "Maksim", "Maxim",],
                lastNames: ["Alexander", "Johnson", "Washington", "Henderson", "McAllister"],
            },
            short: {
                firstNames: ["Tom", "Max", "Ian", "Leo", "Ben"],
                lastNames: ["Smith", "Jones", "Brown", "White", "Miller"],
            }
        },
        woman: {
            long: {
                firstNames: ["Elizabeth", "Catherine", "Victoria", "Madeline", "Alexandra"],
                lastNames: ["Johnson", "Harrison", "McArthur", "Fitzgerald", "Winchester"],
            },
            short: {
                firstNames: ["Amy", "Jane", "Emma", "Ivy", "Mia"],
                lastNames: ["Smith", "Jones", "Brown", "Davis", "Clark"],
            }
        }
    },
    formats: {
        full: (firstName, lastName, middleName) => `${lastName} ${firstName} ${middleName}`,
        lastInitials: (firstName, lastName, middleName) => `${lastName} ${firstName[0]}.${middleName[0]}.`,
        last: (lastName) => lastName,
        first: (firstName) => firstName,
        nameMiddle: (firstName, middleName) => `${firstName} ${middleName}`,
        middle: (middleName) => `${middleName}`
    },
};

function hideBlockLanguage() {
    if (randomSettings.lang === "eng") {
        const formatsToHide = ["full", "lastInitials", "nameMiddle", "middle"];
        dataNameFormat.forEach((block) => {
            const formatName = block.getAttribute('data-formatName');
            block.style.display = formatsToHide.includes(formatName) ? "none" : "block";
        });
    } else {
        dataNameFormat.forEach((block) => {
            block.style.display = "block";
        });
    }
}

function generateName(settings) {
    const { lang, gender, length, formatName, transform } = settings;

    console.log('Генерация имени с параметрами:', settings);

    // Определяем тип длины
    const lengthType = length === "random" ? (Math.random() > 0.5 ? "long" : "short") : length;

    let names;
    // Проверяем наличие данных для генерации имени
    if (namesData && namesData[lang] && namesData[lang][gender] && namesData[lang][gender][lengthType]) {
        names = namesData[lang][gender][lengthType];
    } else {
        console.error("Ошибка: Недостаточно данных для генерации имени", namesData);
        return "Ошибка генерации имени";
    }

    // Проверка наличия массивов с именами
    if (!Array.isArray(names.firstNames) || !Array.isArray(names.lastNames)) {
        console.error("Ошибка: Недостаточно данных для генерации имени", names);
        return "Ошибка генерации имени";
    }

    // Генерация случайных имен
    const firstName = names.firstNames[Math.floor(Math.random() * names.firstNames.length)];
    const lastName = names.lastNames[Math.floor(Math.random() * names.lastNames.length)];

    let middleName = '';
    // Если есть среднее имя, то выбираем его случайным образом
    if (names.middleNames && Array.isArray(names.middleNames)) {
        middleName = names.middleNames[Math.floor(Math.random() * names.middleNames.length)];
    }

    let fullName = '';

    // Формируем полное имя в зависимости от выбранного формата
    const formatFunction = namesData.formats[formatName] || ((f, l, m) => f + " " + l);  // если формат не найден, используем дефолтный
    fullName = formatFunction(firstName, lastName, middleName);

    // Применяем трансформацию текста (верхний или нижний регистр)
    const transformedName = changeTransformText(fullName, transform);

    console.log('Генерируемое имя:', transformedName);

    return transformedName;
}

async function loadFonts(fontNames) {
    try {
        if (Array.isArray(fontNames)) {
            for (const fontName of fontNames) {
                await figma.loadFontAsync({ family: fontName.family, style: fontName.style });
            }
        } else {
            await figma.loadFontAsync({ family: fontNames.family, style: fontNames.style });
        }
    } catch (error) {
        console.error('Ошибка при загрузке шрифта:', error);
        figma.notify(`Ошибка загрузки шрифта: ${error.message}`);
    }
}

figma.showUI(__html__, { width: 400, height: 250 });

let currentHeight = 250;

figma.ui.onmessage = async (msg) => {
    if (msg.type === 'block') {
        if (currentHeight === 250) {
            figma.ui.resize(430, 600);
            currentHeight = 600;
        }
    }

    if (msg.type === 'updateText') {
        const selectedNodes = figma.currentPage.selection;
        console.log(`Выбрано ${selectedNodes.length} объектов`);

        if (selectedNodes.length > 0) {
            for (const node of selectedNodes) {
                if (node.type === 'TEXT') {
                    console.log('Обновляем текстовый узел', node);

                    try {
                        await loadFonts(node.fontName); // Загружаем шрифт, если нужно

                        const uniqueName = generateName(randomSettings); // Генерация имени
                        console.log('Сгенерированное имя:', uniqueName);

                        node.characters = uniqueName; // Обновляем текст
                    } catch (error) {
                        console.error('Ошибка обновления текста:', error);
                        figma.notify(`Ошибка обновления текста: ${error.message}`);
                    }
                }
            }
        } else {
            figma.notify("Выберите текстовые объекты, чтобы обновить имя.");
        }
    }

    if (msg.type === 'updateFormatName') {
        // Обновление формата имени
        randomSettings.formatName = msg.formatName;
        console.log(`Формат имени обновлен: ${randomSettings.formatName}`);

        // Генерация имени с новым форматом
        const generatedName = generateName(randomSettings);
        console.log(`Сгенерированное имя: ${generatedName}`);

        // Отправка сгенерированного имени в UI
        figma.ui.postMessage({ type: 'setGeneratedName', generatedName });
    }
};

// Дополнительная функция для преобразования текста
function changeTransformText(text, transform) {
    switch (transform) {
        case "uppercase":
            return text.toUpperCase();
        case "lowercase":
            return text.toLowerCase();
        default:
            return text;
    }
}
