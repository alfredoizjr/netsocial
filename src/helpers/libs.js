const helpers = {}

helpers.ramdomNumbers = () => {
 const possible = 'abcdfghijklmnopqrwsthyz0123456789';
let ramdonNumber = 0;
 for (let i = 0; i < 6; i++) {
     
     ramdonNumber +=possible.charAt( Math.floor(Math.random() * possible.length) );
 }

 return ramdonNumber;
}

module.exports = helpers;