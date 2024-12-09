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

    // console.log("Settings:", settings);

    const lengthType = length === "random" ? (Math.random() > 0.5 ? "long" : "short") : length;

    let names;
    if (namesData[lang] && namesData[lang][gender] && namesData[lang][gender][lengthType]) {
        names = namesData[lang][gender][lengthType];
        // console.log("Names data found:", names);
    } else {
        console.error("Ошибка: Недостаточно данных для генерации имени", namesData);
        return "Ошибка генерации имени";
    }

    // Сортировка имен по алфавиту
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

    // console.log("Selected Names:", { firstName, lastName, middleName });

    if (!namesData.formats[formatName]) {
        // console.error("Unknown formatName:", formatName);
        return "Ошибка: неизвестный формат";
    }

    // console.log("Calling format function with:", { formatName, firstName, lastName, middleName });

    let fullName = '';
    if (formatName === 'last') {
        fullName = namesData.formats[formatName](lastName);
    } else if (formatName === 'middle') {
        fullName = namesData.formats[formatName](middleName);
    } else {
        fullName = namesData.formats[formatName](firstName, lastName, middleName);
    }

    // console.log("Generated FullName:", fullName);
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

    if (msg.type === 'updateText') {
        const selectedNodes = figma.currentPage.selection;

        if (selectedNodes.length > 0) {
            let generatedNames = [];

            for (const node of selectedNodes) {
                if (node.type === 'TEXT') {
                    try {
                        await loadFonts(node.fontName);

                        const uniqueName = generateName(randomSettings);
                        generatedNames.push({
                            node: node,
                            name: uniqueName,
                            xPosition: node.x,
                            yPosition: node.y
                        });
                        node.characters = uniqueName; // Устанавливаем сгенерированное имя
                    } catch (error) {
                        figma.notify(`Ошибка загрузки шрифта: ${error.message}`);
                    }
                }
            }

            figma.notify("Имена сгенерированы.");
        } else {
            figma.notify("Выберите текстовые объекты для генерации имен.");
        }
    }

    // Добавляем проверку для сортировки по алфавиту

    if (msg.type === 'sortSelected') {
        const selectedNodes = figma.currentPage.selection;

        if (selectedNodes.length > 0) {
            let textNodes = [];

            // Шаг 1: Определяем исходные группы для каждого узла
            for (const node of selectedNodes) {
                if (node.type === 'TEXT') {
                    try {
                        await loadFonts(node.fontName);

                        // Сохраняем данные о каждом тексте (включая информацию о родительской группе)
                        textNodes.push({
                            node: node,
                            name: node.characters,
                            xPosition: node.x,
                            yPosition: node.y,
                            originalParent: node.parent, // Исходная группа
                        });

                    } catch (error) {
                        figma.notify(`Ошибка загрузки шрифта: ${error.message}`);
                    }
                }
            }

            console.log(textNodes, 'textNodes')
            if (textNodes.length > 1) {
                // Шаг 2: Сортируем узлы по имени (алфавитно)
                const sortedNodes = [...textNodes].sort((a, b) => a.name.localeCompare(b.name, 'ru'));
                console.log(sortedNodes, 'sortedNodes');

                sortedNodes.forEach((sortedNode, index) => {
                    const originalNode = textNodes[index]; // Узел до сортировки
                    console.log(originalNode, 'originalNode')
                    const originalParent = originalNode.originalParent; // Исходная группа
                    console.log(originalParent, 'originalParent')
                    const newParent = sortedNode.originalParent; // Здесь пока что оставляем исходную группу
                    console.log(newParent, 'newParent');

                    // Шаг 3: Распределяем по группам в зависимости от координат по оси Y
                    let newGroup;
                    if (sortedNode.yPosition < originalNode.yPosition) {
                        newGroup = sortedNode.node.parent; // Например, если текст выше, то помещаем в группу, выше расположенную по оси Y
                        console.log(newGroup, 'if')
                    } else {
                        newGroup = originalNode.node.parent; // Иначе в нижнюю группу
                        console.log(newGroup, 'else')
                    }

                    console.log('test')

                    
                    if (originalParent && originalParent.type === 'GROUP') {
                        // Проверяем, есть ли дочерние узлы в родительской группе
                        if (originalParent.children && originalParent.children.length > 0) {
                            // Перемещаем все дочерние элементы из старой группы в новую группу
                            originalParent.children.forEach(childNode => {
                                // Проверяем, не является ли дочерний узел удаленным
                                if (!childNode.removed) {
                                    newGroup.appendChild(childNode);
                                }
                            });
                    
                            // Теперь можно удалить старую группу (где больше нет нужных узлов)
                            originalParent.remove();
                            console.log(`Группа "${originalParent.name}" была удалена, все ее дети перемещены в новую группу.`);
                        }
                    }
                    
                    // Добавляем узел в новую группу
                    if (newGroup && newGroup.type === 'GROUP') {
                        // Перемещаем сам узел в новую группу
                        newGroup.appendChild(sortedNode.node);
                    
                        // Обновляем его координаты
                        sortedNode.node.x = originalNode.xPosition;
                        sortedNode.node.y = originalNode.yPosition;
                    
                        console.log(`Узел "${sortedNode.node.name}" был перемещен в группу "${newGroup.name}".`);
                    }
                });
            }
        }
    }
};