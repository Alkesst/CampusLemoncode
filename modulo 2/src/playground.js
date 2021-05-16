const array = [1, 2, 3, 4, 5, 6, 7];
const arrayB = [11, 22, 33, 44, 55, 66, 77];

console.log(`Array original A: ${array}`);
console.log(`Array original B: ${arrayB}`);

const printResults = (methodName, result) => {
    console.log(`Resultado de la ejecuición del método ${methodName}: ${result}`);
};

const printObjectResults = (methodName, result) => {
    console.log(`Resultado de la ejecuición del método ${methodName}: ${JSON.stringify(result)}`);
}

// ejercicio 1
const head = (array) => {
    const [head, ...tail] = array;
    return head;
};

printResults('head', head(array));

// ejercicio 2
const tail = ([head, ...tail]) => {
    return tail;
};

printResults('tail', tail(array));

// ejercicio 3
const init = (array) => {
    // we don't want to change the original object
    const newArray = array.slice();
    newArray.pop();
    return newArray;
};

printResults('init', init(array));

// ejercicio 4 
const last = (array) => {
    return array[array.length - 1];
    // return array.pop(); but modifies our original array
};

printResults('last', last(array));

// ejercicio 5 
const concat = (a, b) => {
    return [...a, ...b];
};

const coolerConcat = (...arrays) => {
    return arrays.reduce((previous, current) => {
        return [...previous, ...current];
    });
};

printResults('concat', concat(array, arrayB));
const a = [1, 7, 8];
const b = [7, 7, 6];
const c = ['the', 'cooler', 'concat', '😎'];

console.log(`Array original a: ${a}`);
console.log(`Array original b: ${b}`);
console.log(`Array original c: ${c}`);


printResults('the cooler concat [Concat opcional]', coolerConcat(array, arrayB, a, b, c ));


// ejercicio 6 
const oneRegularObject = {
    oh: 'Oh,',
    hi: 'hi',
    mark: 'mark'
};

const twoRegularObject = {
    oh: 'un parell,',
    carlos: 'ccarlos',
    ostres: 'ostres tu'
};

console.log(`Contenido original del objeto: ${JSON.stringify(oneRegularObject)}`);

const clone = (source) => {
    return {...source};
}

printObjectResults('clone', clone(oneRegularObject));

const merge = (source, target) => {
    return {...source, ...target};
}

printObjectResults('merge', merge(oneRegularObject, twoRegularObject));

// ejercicio 7
const books = [
    { title: "Teoría de automatas y lenguajes formales", isRead: true },
    { title: "Introducción al Cálculo", isRead: true },
    { title: "Análisis y diseño de algoritmos", isRead: true },
    { title: "Clean Code y etc", isRead: false }
];

const isBookRead = (arrayBook, title) => {
    return arrayBook.find(element => element.title === title).isRead;
};

console.log(`Contenido original del objeto: ${JSON.stringify(books)}`);

printResults('isBookRead 1', isBookRead(books, 'Teoría de automatas y lenguajes formales'));
printResults('isBookRead 2', isBookRead(books, 'Introducción al Cálculo'));
printResults('isBookRead 3', isBookRead(books, 'Análisis y diseño de algoritmos'));
printResults('isBookRead 4', isBookRead(books, 'Clean Code y etc'));

