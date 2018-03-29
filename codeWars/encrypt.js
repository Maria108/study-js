/* For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.


Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
    Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
    Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
    Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
  });
});

describe("Solution", function(){
  it("DecryptExampleTests", function(){    
    Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
    Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
    Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
  });
});

describe("Solution", function(){
  it("Null or Empty", function(){    
    Test.assertEquals(encrypt("", 0), "");
    Test.assertEquals(decrypt("", 0), "");
    Test.assertEquals(encrypt(null, 0), null);
    Test.assertEquals(decrypt(null, 0), null);
  });
});
*/

function encryptText(str) {
    let newStr2nd = '';
    let newStr1st = '';
    let result = ''
    for (i = 1; i < str.length; i = i + 2) { // This is a test!
        newStr2nd += str[i] // hsi  et
        newStr1st += str[i - 1] // Ti sats!
    }
    if (str.length % 2 === 0) {
        result = newStr2nd.concat(newStr1st)
    } else {
        result = newStr2nd.concat(newStr1st, str[str.length - 1])
    }

    return result
}

function encrypt(text, n) {
    if (text === '' || text === null || n < 0) {
        return text
    }
    while (n--) {
        text = encryptText(text)
    }
    return text
}

function decryptText(str) {
    let newStr = '' // hsi  etTi sats!
    let firstPart = str.slice(0, str.length / 2); // hsi  et
    let secondPart = str.slice(str.length / 2); // Ti sats!
    for (i = 0; i < firstPart.length; i++) { // 
        newStr += secondPart[i].concat(firstPart[i])
    }
    if (str.length % 2 === 0) {
        return newStr
    } else {
        return newStr.concat(secondPart[secondPart.length - 1])
    }

}

function decrypt(text, n) {
    if (text === '' || text === null || n < 0) {
        return text
    }
    while (n--) {
        text = decryptText(text)
    }
    return text
}

console.log(decrypt('hsi  etTi sats!', 1)) //   This is a test!");


/* function encrypt(text, n) {
  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
  }
  return text
}

function decrypt(text, n) {
  let l = text && text.length / 2 | 0
  for (let i = 0; i < n; i++) {
    text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
  }
  return text
}*/