// 1 კენტი რიცხვები 0 - 2000-მდე	

for (let i = 0; i < 2000; i++) {
    if (i % 2 != 0)
        console.log(i)
}

// 2 : ლუწი რიცხვები 0 - 2000-მდე	
for (let i = 0; i < 2000; i++) {
    if (i % 2 == 0 && i != 0)
        console.log(i)
}



// 3 : ჩექფოინთი

for (let i = 0; i <= 100; i++) {
    if (i == 10) console.log("გილოცავთ, თქვენ გაიარეთ " + i + " კილომეტრიანი ჩექფოინთი")
    else if (i == 25) console.log("გილოცავთ, თქვენ გაიარეთ " + i + " კილომეტრიანი ჩექფოინთი")
    else if (i == 75) console.log("გილოცავთ, თქვენ გაიარეთ " + i + " კილომეტრიანი ჩექფოინთი")
    else if (i == 90) console.log("გილოცავთ, თქვენ გაიარეთ " + i + " კილომეტრიანი ჩექფოინთი")
    else if (i == 100) console.log("გილოცავთ, თქვენ დაასრულეთ თამაში")
}

// 4 : კენტი რიცხვების ჯამი

let sum = 0;
for (let i = 0; i < 25000; i++) {
    if (i % 2 != 0) {
        sum = sum + i;
    }
} console.log(sum);


// 5 : ჯამი და ჯამი

let sumOfOdd = 0;
let sumOfEven = 0;
for (let i = 0; i <= 2000; i++) {
    if (i % 2 != 0 && i >= 500 && i < 800) {
        sumOfOdd = sumOfOdd + i;
    }
    if (i % 2 == 0 && i >= 1000 && i < 2000) {
        sumOfEven = sumOfEven + i;
    }
} console.log("კენტი რიცხვების ჯამი 500-დან 800-მდე : " + sumOfOdd);
console.log("ლუწი რიცხვების ჯამი 1000-დან 2000-მდე : " + sumOfEven);


// 6 : მათემატიკური ფაქტორიალი (რეკურსიით)

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
} console.log(factorial(5));

// 7 : 300-ის გამყოფები

let n = 300;
for (i = 0; i <= n; i++) {
    if (n % i == 0) {
        console.log(i);
    }

}


// 8 : რიცხვის გამყოფების ჯამი

let x = 6;
let sumOfDivisions = 0;
for (let i = 0; i <= x; i++) {
    if (x % i == 0) {
        sumOfDivisions = sumOfDivisions + i;
    }
} console.log(x + " ყველა გამყოფის ჯამი არის : " + sumOfDivisions);


// 9 : მარტივი რიცხვები 1 - 1000;

let isPrime = 13;
let check = 0;

if (isPrime > 1 && isPrime != 0) {

    for (let i = 2; i <= isPrime; i++) {
        if (isPrime % i == 0) {
            check++;
        }
    }
} 
if (check === 0) console.log(isPrime + " არის მარტივი რიცხვი");
else if (check >= 1 ) console.log(isPrime + " არ არის მარტივი რიცხვი");
