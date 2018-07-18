/* Freddy has a really fat left pinky finger, and every time Freddy tries to type an A, he accidentally hits the CapsLock key!

Given a string that Freddy wants to type, emulate the keyboard misses where each A supposedly pressed is replaced with CapsLock, and return the string that Freddy actually types. It doesn't matter if the A in the string is capitalized or not. When CapsLock is enabled, capitalization is reversed, but punctuation is not affected.

Examples:

"The quick brown fox jumps over the lazy dog."
-> "The quick brown fox jumps over the lZY DOG."

"The end of the institution, maintenance, and administration of government, is to secure the existence of the body politic, to protect it, and to furnish the individuals who compose it with the power of enjoying in safety and tranquillity their natural rights, and the blessings of life: and whenever these great objects are not obtained, the people have a right to alter the government, and to take measures necessary for their safety, prosperity and happiness."
-> "The end of the institution, mINTENnce, ND dministrTION OF GOVERNMENT, IS TO SECURE THE EXISTENCE OF THE BODY POLITIC, TO PROTECT IT, nd to furnish the individuLS WHO COMPOSE IT WITH THE POWER OF ENJOYING IN Sfety ND TRnquillity their nTURl rights, ND THE BLESSINGS OF LIFE: nd whenever these greT OBJECTS re not obtINED, THE PEOPLE Hve  RIGHT TO lter the government, ND TO Tke meSURES NECESSry for their sFETY, PROSPERITY nd hPPINESS."

"aAaaaaAaaaAAaAa"
-> ""
If the given string is null, return null.

If the given string is "", the answer should be evident.*/
// var fatFingers = function(str) {
//   if (str === null) {
//     return null;
//   }
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === 'a' && counter === 0) {
//       str = str.slice(0, i).concat(str.slice(i + 1).toUpperCase());
//       i = -1;
//       counter++;
//     } else if (str[i] === 'a' && counter !== 0) {
//       str = str.slice(0, i).concat(str.slice(i + 1).toUpperCase());
//       i = -1;
//     }
//     if (str[i] === 'A' && counter !== 0) {
//       str = str.slice(0, i).concat(str.slice(i + 1).toLowerCase());
//       i = -1;
//     }
//   }
//   return str;
// };

// console.log(fatFingers('The A quick brown fox jumps over the lazy dog.')); // The  QUICK BROWN FOX Lzy

// console.log(fatFingers('Aa34aAAaamafasadAaasaup')); // 34MfSdSup
// console.log(fatFingers('AaaAAaaaAAAa')); // 34MfSdSup

var fatFingers = function(str) {
  if (str === null) {
    return null;
  }
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'a' && counter % 2 !== 0) {
      str = str.slice(0, i).concat(str.slice(i + 1).toUpperCase());
      i = -1;
      counter++;
    } else if (str[i].toLowerCase() === 'a' && counter % 2 === 0) {
      str = str.slice(0, i).concat(str.slice(i + 1).toLowerCase());
      i = -1;
      counter++;
    }
  }
  return str;
};

console.log(fatFingers('Aa34aAAaamafasadAaasaup')); // 34MfSdSup
console.log(fatFingers('Important message')); // ImportNT MESSge
