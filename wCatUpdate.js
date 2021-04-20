// input???
let fs = require("fs");
let input = process.argv.slice(2);
let filePaths = [];
let options = [];
console.log("input", input);

for (let i = 0; i < input.length; i++) {
    //first character js string
    if (input[i] == "-s" || input[i] == "-n" || input[i] == "-b") {
        options.push(input[i]);
    }
    else {
        filePaths.push(input[i]);
    }
}

console.log("options", options);
console.log("filepath", filePaths);
//for checking fiepresent or not
for (let i = 0; i < filePaths.length; i++) {
    let isFilePresent = fs.existsSync(filePaths[i]);
    if (isFilePresent == false) {
        // console.log("filepath",filePaths[i],"does not exist");
        return;
    }

}
//for creadig the content of file
let totalCurrent = "";
for (let i = 0; i < filePaths.length; i++) {
    let display = fs.readFileSync(filePaths[i], "utf-8");
    totalCurrent += display + "\r\n";
}
//console.log(totalCurrent);

let isN = options.includes("-n");
let isB = options.includes("-b");

let finalOption;

if (isN == true) {
    if (isB == true) {
        // the option that comes first;
        let idxB = options.indexOf("-b");
        let idxN = options.indexOf("-n");
        finalOption = ixdB < idxN ? "-b" : "-n";

    }
    else {
        finalOption = "-n";

    }
}
else if (isB == true) {
    finalOption = "-b";

}
//implement -s
let issOption = options.includes("-s");
if (issOption == true) {
    let contentArr = totalCurrent.split("\r\n");
    // console.log(contentArr)
    //   console.log(totalCurrent);


    //remove
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != "") {
            tempArr.push(contentArr[i]);
        }
    }
    totalCurrent = tempArr.join("\r\n");
}


// console.log(totalCurrent);



//node wcat.js -s -b -n "f1.txt"
//implement -n
//let finalOption = options.includes("-n");
if (finalOption == "-n") {
    let count = 1;
    let contentArr = totalCurrent.split("\r\n");
    //   console.log(contentArr);

    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = count + ". " + contentArr[i];
        count++;

    }
    totalCurrent = contentArr.join("\r\n");
}

// console.log(totalCurrent);


//-b implement
//let finalOption = options.includes("-b");
if (finalOption == '-b') {
    let count = 1;
    let contentArr = totalCurrent.split("\r\n");
    //   console.log(contentArr);

    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != "") {
            contentArr[i] = count + ". " + contentArr[i];
            count++;
        }
    }
    totalCurrent = contentArr.join("\r\n");
}

console.log(totalCurrent);


