async function loadFonts(fontNames) {
    if (Array.isArray(fontNames)) {
        for (const fontName of fontNames) {
            try {
                await figma.loadFontAsync(fontName);
            } catch (error) {
                console.error(`Ошибка загрузки шрифта ${fontName}:`, error.message);
                figma.notify(`Ошибка загрузки шрифта: ${fontName}`);
            }
        }
    } else {
        try {
            await figma.loadFontAsync(fontNames);
        } catch (error) {
            console.error(`Ошибка загрузки шрифта ${fontNames}:`, error.message);
            figma.notify(`Ошибка загрузки шрифта: ${fontNames}`);
        }
    }
}

const namesData = {
    rus: {
        male: {
            long: {
                firstNames: [
                    "Константин", "Александр", "Владислав", "Николай", "Станислав", "Дмитрий", "Иван", "Петр", "Максим", "Артем",
                    "Евгений", "Роман", "Виктор", "Григорий", "Юрий", "Анатолий", "Сергей", "Михаил", "Алексей", "Тимофей"
                ],
                lastNames: [
                    "Константинов", "Александров", "Владиславов", "Николаев", "Станиславов", "Петров", "Иванов", "Максимов", "Артемов",
                    "Евгеньев", "Романов", "Викторов", "Григорьев", "Юрьев", "Анатольев", "Сергеев", "Михайлов", "Алексеев", "Тимофеев"
                ],
                middleNames: [
                    "Константинович", "Александрович", "Владиславович", "Николаевич", "Станиславович", "Петрович", "Иванович", "Максимович",
                    "Артемович", "Евгеньевич", "Романович", "Викторович", "Григорьевич", "Юрьевич", "Анатольевич", "Сергеевич", "Михайлович",
                    "Алексеевич", "Тимофеевич"
                ]
            },
            short: {
                firstNames: [
                    "Ян", "Илья", "Макс", "Лев", "Егор", "Даня", "Гоша", "Коля", "Тимур", "Рома", "Саша", "Семен", "Паша", "Андрей"
                ],
                lastNames: [
                    "Петров", "Цак", "Миронов", "Соколов", "Иванов", "Лебедев", "Кузнецов", "Смирнов", "Попов", "Ковалев"
                ],
                middleNames: [
                    "Петрович", "Цакович", "Миронович", "Соколович", "Иванович", "Лебедевич", "Кузнецович", "Смирнович", "Попович", "Ковалевич"
                ]
            }
        },
        woman: {
            long: {
                firstNames: [
                    "Александра", "Валентина", "Екатерина", "Елизавета", "Светлана", "Дарина", "Ольга", "Мария", "Татьяна", "Ирина",
                    "Анастасия", "Виктория", "Наталья", "Юлия", "Галина", "Ксения", "Людмила", "Нина", "Алла", "Елена"
                ],
                lastNames: [
                    "Александрова", "Валентинова", "Екатерининская", "Елизаветина", "Светланова", "Петрова", "Миронова", "Козлова",
                    "Смирнова", "Иванова", "Попова", "Лебедева", "Кузнецова", "Соколова", "Жукова", "Калинина", "Григорьева", "Михайлова"
                ],
                middleNames: [
                    "Александровна", "Валентиновна", "Екатериновна", "Елизаветовна", "Светлановна", "Петровна", "Мироновна", "Козловна",
                    "Смирновна", "Ивановна", "Поповна", "Лебедева", "Кузнецова", "Соколова", "Жуковна", "Калинина", "Григорьевна", "Михайловна"
                ]
            },
            short: {
                firstNames: [
                    "Аня", "Лена", "Юля", "Ира", "Зоя", "Нина", "Оля", "Ксюша", "Катя", "Таня", "Маша", "Алла", "Наташа"
                ],
                lastNames: [
                    "Петрова", "Цакова", "Миронова", "Соколова", "Иванова", "Попова", "Кузнецова", "Лебедева", "Тихонова", "Шевченко"
                ],
                middleNames: [
                    "Петровна", "Цаковна", "Мироновна", "Соколовна", "Ивановна", "Поповна", "Лебедева", "Кузнецова", "Шевченкова", "Тихонова"
                ]
            }
        }
    },
    eng: {
        male: {
            long: {
                firstNames: [
                    "Alexander", "Christopher", "Nathaniel", "Benjamin", "Sebastian", "Matthew", "William", "Joseph", "Edward", "Samuel",
                    "John", "Henry", "George", "Charles", "David", "James", "Mark", "Daniel", "Thomas", "Luke"
                ],
                lastNames: [
                    "Alexander", "Johnson", "Washington", "Henderson", "McAllister", "Smith", "Adams", "Bennett", "Carter", "Evans",
                    "Mitchell", "Turner", "Walker", "Young", "King", "Scott", "Gray", "Hill", "Green", "White"
                ]
            },
            short: {
                firstNames: [
                    "Tom", "Max", "Ian", "Leo", "Ben", "John", "Jake", "Sam", "Mark", "Dan"
                ],
                lastNames: [
                    "Smith", "Jones", "Brown", "White", "Miller", "Davis", "Clark", "Evans", "Hall", "Moore"
                ]
            }
        },
        woman: {
            long: {
                firstNames: [
                    "Elizabeth", "Catherine", "Victoria", "Madeline", "Alexandra", "Sarah", "Emily", "Rebecca", "Alice", "Charlotte",
                    "Eleanor", "Amelia", "Sophia", "Isabella", "Abigail", "Lillian", "Grace", "Olivia", "Megan", "Hannah"
                ],
                lastNames: [
                    "Johnson", "Harrison", "McArthur", "Fitzgerald", "Winchester", "Thompson", "Davis", "Miller", "Martinez", "Anderson",
                    "Rodriguez", "Brown", "Wilson", "Moore", "Clark", "Scott", "Evans", "King", "Allen", "Mitchell"
                ]
            },
            short: {
                firstNames: [
                    "Amy", "Jane", "Emma", "Ivy", "Mia", "Sophie", "Lily", "Chloe", "Zoe", "Lucy"
                ],
                lastNames: [
                    "Smith", "Jones", "Brown", "Davis", "Clark", "Evans", "Wilson", "Harris", "Martin", "Lopez"
                ]
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

const randomSettings = {
    formatName: 'last',
    transform: "default",
    sort: "default",
    lang: "rus",
    length: "long",
    gender: "male",
};

function generateName(settings) {
    const { lang, gender, length, formatName, transform, sort } = settings;


    const lengthType = length === "random" ? (Math.random() > 0.5 ? "long" : "short") : length;

    let names;
    if (namesData[lang] && namesData[lang][gender] && namesData[lang][gender][lengthType]) {
        names = namesData[lang][gender][lengthType];
    } else {
        console.error("Ошибка: Недостаточно данных для генерации имени", namesData);
        return "Ошибка генерации имени";
    }

    if (sort === "alphabet") {
        if (names.firstNames) names.firstNames.sort();
        if (names.lastNames) names.lastNames.sort();
        if (names.middleNames) names.middleNames.sort();
    }

    if (!names.lastNames || names.lastNames.length === 0) {
        console.error("LastNames array is empty or undefined");
        return "Ошибка: нет фамилий";
    }

    const firstName = names.firstNames[Math.floor(Math.random() * names.firstNames.length)];
    const lastName = names.lastNames[Math.floor(Math.random() * names.lastNames.length)];
    const middleName = names.middleNames
        ? names.middleNames[Math.floor(Math.random() * names.middleNames.length)]
        : '';


    if (!namesData.formats[formatName]) {
        return "Ошибка: неизвестный формат";
    }


    let fullName = '';
    if (formatName === 'last') {
        fullName = namesData.formats[formatName](lastName);
    } else if (formatName === 'middle') {
        fullName = namesData.formats[formatName](middleName);
    } else {
        fullName = namesData.formats[formatName](firstName, lastName, middleName);
    }

    return changeTransformText(fullName, transform);
}

function changeTransformText(text, transform) {
    switch (transform) {
        case 'upper':
            return text.toUpperCase();
        case 'lower':
            return text.toLowerCase();
        case 'default':
            return text.charAt(0) + text.slice(1);
        default:
            return text;
    };
};




figma.showUI(__html__, { width: 400, height: 250 });

let currentHeight = 250;

figma.ui.onmessage = async (msg) => {
    if (msg.type === 'block') {
        if (currentHeight === 250) {
            figma.ui.resize(430, 600);
            currentHeight = 600;
        } else {
            figma.ui.resize(400, 250);
            currentHeight = 250;
        }
    }

    if (msg.type === 'updateSettings') {
        if (msg.settings) {
            Object.assign(randomSettings, msg.settings);
        }

    }

    let generatedNames = [];

    if (msg.type === 'updateText') {
        const selectedNodes = figma.currentPage.selection;

        if (selectedNodes.length > 0) {
            let usedNames = new Set();

            for (const node of selectedNodes) {
                if (node.type === 'TEXT') {
                    try {
                        await figma.loadFontAsync(node.fontName);
                        let uniqueName = generateName(randomSettings);

                        // Проверка на уникальность имени
                        while (usedNames.has(uniqueName)) {
                            uniqueName = generateName(randomSettings);
                        }

                        usedNames.add(uniqueName);

                        node.characters = uniqueName;

                        generatedNames.push({
                            node: node,
                            name: uniqueName,
                            xPosition: node.x,
                            yPosition: node.y
                        });

                        node.characters = uniqueName;

                        console.log(uniqueName, 'уникальное имя')
                    } catch (error) {
                        figma.notify(`Ошибка загрузки шрифта: ${error.message}`);
                    }
                }
            }

            figma.notify("Имена успешно сгенерированы.");
        } else {
            figma.notify("Выберите текстовые объекты для генерации имен.");
        }
    }

    if (msg.type === 'sortSelected') {
        const selectedNodes = figma.currentPage.selection;

        // Проверяем, что хотя бы один узел выбран
        if (selectedNodes.length > 0) {
            // Фильтруем только текстовые узлы
            const textNodes = selectedNodes.filter(node => node.type === 'TEXT');

            // Если хотя бы два текстовых узла выбраны
            if (textNodes.length > 1) {
                // Сбор текстового содержимого и создание массива объектов с узлами, их текстами и координатами
                const textsWithNodes = textNodes.map(node => ({
                    node: node,
                    text: node.characters,
                    xPosition: node.x,
                    yPosition: node.y // Сохраняем координаты
                }));

                // Сортировка текста по алфавиту (по возрастанию)
                textsWithNodes.sort((a, b) => a.text.localeCompare(b.text, 'ru'));

                // Логирование координат после сортировки
                console.log("Координаты после сортировки по алфавиту:");
                textsWithNodes.forEach(item => {
                    console.log(`Текст: "${item.text}", x: ${item.xPosition}, y: ${item.yPosition}`);
                });

                // Меняем координаты между текстовыми объектами попарно
                for (let i = 0; i < textsWithNodes.length - 1; i += 2) {
                    const first = textsWithNodes[i];
                    const second = textsWithNodes[i + 1];

                    // Меняем координаты между текущими элементами
                    const tempX = first.xPosition;
                    const tempY = first.yPosition;

                    // Логируем перед заменой
                    console.log(`Меняем местами: "${first.text}" на координатах (x: ${first.xPosition}, y: ${first.yPosition}) с "${second.text}" на координатах (x: ${second.xPosition}, y: ${second.yPosition})`);

                    first.node.x = second.xPosition;
                    first.node.y = second.yPosition;

                    second.node.x = tempX;
                    second.node.y = tempY;

                    // Логируем изменения
                    console.log("Тексты поменялись местами:");
                    console.log(`Первый текст "${first.text}" теперь на координатах: x=${first.node.x}, y=${first.node.y}`);
                    console.log(`Второй текст "${second.text}" теперь на координатах: x=${second.node.x}, y=${second.node.y}`);
                }

                // Если количество текстов нечетное, последний останется на своих координатах
                if (textsWithNodes.length % 2 !== 0) {
                    const last = textsWithNodes[textsWithNodes.length - 1];
                    console.log(`Последний текст "${last.text}" остался на координатах: x=${last.xPosition}, y=${last.yPosition}`);
                }

                figma.notify(`Тексты успешно отсортированы и обменялись местами. Всего: ${textsWithNodes.length} текстовых объектов.`);
            } else {
                figma.notify("Пожалуйста, выделите хотя бы два текстовых объекта для обмена координатами.");
            }
        } else {
            figma.notify("Ничего не выделено.");
        }
    }
}