function Creat(upNum, downNum) {
    return { UpNum: upNum, DownNum: downNum }
}

let first = Creat(5, 10)
let second = Creat(2, 15)

function Add(obj1, obj2) {
    let resultUpNumber = obj1.UpNum + obj2.UpNum;
    let resultDownNumber = obj1.DownNum + obj2.DownNum;
    console.log(`Addition: ${resultUpNumber}/${resultDownNumber}`);
}

function Subtract(obj1, obj2) {
    let resultUpNumber = obj1.UpNum - obj2.UpNum;
    let resultDownNumber = obj1.DownNum - obj2.DownNum;
    console.log(`Subtrac: ${resultUpNumber}/${resultDownNumber}`);
}

function Multi(obj1, obj2) {
    let resultUpNumber = obj1.UpNum * obj2.UpNum;
    let resultDownNumber = obj1.DownNum * obj2.DownNum;
    console.log(`Multi: ${resultUpNumber}/${resultDownNumber}`);
}

function Division(obj1, obj2) {
    let resultUpNumber = obj1.UpNum / obj2.UpNum;
    let resultDownNumber = obj1.DownNum / obj2.DownNum;
    console.log(`Divison: ${resultUpNumber}/${resultDownNumber.toFixed(1)}`);
}

function Cuts(obj1) {

    let M = obj1.UpNum, N = obj1.DownNum
    for (let i = 2; i <= obj1.UpNum; i++) {
        if (obj1.UpNum % i == 0 && obj1.DownNum == 0) {
            M = obj1.UpNum / i, N = obj1.DownNum / i
        }
    }
    console.log(`Cuts ${M}/${N}`);
}

Add(first, second)
Subtract(first, second)
Multi(first, second)
Division(first, second)
Cuts(first)

