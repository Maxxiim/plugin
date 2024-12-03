async function loadFonts(fontNames) {
    if (Array.isArray(fontNames)) {
        for (const fontName of fontNames) {
            await figma.loadFontAsync(fontName);
        }
    } else {
        await figma.loadFontAsync(fontNames);
    }
}

const namesData = {
    rus: {
        male: {
            long: {
                firstNames: ["Константин", "Александр", "Владислав", "Николай", "Станислав"],
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
                firstNames: ["Alexander", "Christopher", "Nathaniel", "Benjamin", "Sebastian"],
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

function generateName(settings) {
    console.log("Генерация имени с настройками:", settings);

    const { lang, gender, length, formatName, transform } = settings;
    const lengthType = length === "random" ? (Math.random() > 0.5 ? "long" : "short") : length;

    let names;
    if (namesData && namesData[lang] && namesData[lang][gender] && namesData[lang][gender][lengthType]) {
        names = namesData[lang][gender][lengthType];
    } else {
        console.error("Ошибка: Недостаточно данных для генерации имени", namesData);
        return "Ошибка генерации имени";
    }

    const firstName = names.firstNames[Math.floor(Math.random() * names.firstNames.length)];
    const lastName = names.lastNames[Math.floor(Math.random() * names.lastNames.length)];
    let middleName = '';
    if (names.middleNames && Array.isArray(names.middleNames)) {
        middleName = names.middleNames[Math.floor(Math.random() * names.middleNames.length)];
    }

    let fullName = '';

    if (formatName === 'last') {
        fullName = namesData.formats.last(lastName);
    } else if (formatName === 'middle') {
        fullName = namesData.formats.middle(middleName);
    } else if (formatName === 'first') {
        fullName = namesData.formats.first(firstName);
    } else {
        fullName = namesData.formats[formatName](firstName, lastName, middleName);
    }

    console.log("Сгенерированное имя:", fullName);
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


const randomSettings = {
    formatName: 'first',
    transform: "default",
    sort: "default",
    lang: "rus",
    length: "long",
    gender: "male",
};

figma.showUI(__html__, { width: 400, height: 250 });

let currentHeight = 250;

figma.ui.onmessage = async (msg) => {
    if (msg.type === 'block') {
        if (currentHeight === 250) {
            figma.ui.resize(400, 600);
            figma.ui.resize(430, 600);
            currentHeight = 600;
        }
    }

    if (msg.type === 'updateSettings') {
        if (msg.settings) {
            randomSettings.gender = msg.settings.gender || randomSettings.gender;
            randomSettings.lang = msg.settings.lang || randomSettings.lang;
            randomSettings.formatName = msg.settings.formatName || randomSettings.formatName;
            randomSettings.length = msg.settings.length || randomSettings.length;
            randomSettings.transform = msg.settings.transform || randomSettings.transform;
        }
        figma.notify(`Настройки обновлены: Пол - ${randomSettings.gender}, Язык - ${randomSettings.lang}`);
    }

    if (msg.type === 'updateText') {
        const selectedNodes = figma.currentPage.selection;

        if (selectedNodes.length > 0) {
            for (const node of selectedNodes) {
                if (node.type === 'TEXT') {
                    try {
                        await loadFonts(node.fontName);

                        const uniqueName = generateName(randomSettings);
                        const transformedName = changeTransformText(uniqueName, randomSettings.transform);
                        node.characters = transformedName;

                    } catch (error) {
                        figma.notify(`Ошибка загрузки шрифта: ${error.message}`);
                    }
                }
            }
        } else {
            figma.notify("Выберите текстовый объект, чтобы обновить имя.");
        }
    }
};