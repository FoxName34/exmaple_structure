

function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let myString = 'hello world';
let result = capitalizeFirstLetter(myString);
console.log(result); // 'Hello world'

export { capitalizeFirstLetter };