const getName = () => {
    return "anisul islam";
}
const getAge = () => {
    return "22 years";
}
const cgpa = "3.92";

/*
*export single item
*/
// exports.getName=getName;
// exports.getAge=getAge;
// exports.result=cgpa;

/*
*export all item
*/
module.exports = {
    getName,
    getAge,
    cgpa
};


