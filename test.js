const onlyOddChars = (str) => {
    // Solution code here...
    let str2 = ''
    for (let i = 1; i <= str.length - 1; i++) {
        if ((i % 2)) {
            str2 = str2 + str.charAt(i)
                //    console.log(str2);

        }
    }
    console.log(str2);
    return str2

};


onlyOddChars('abcdefg') //returns  'bdf'