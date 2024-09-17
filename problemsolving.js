
// problemsolving.js//

// দর যে প্রথম একটা ফর্ম এর মত ইনপুট থাকবে পাঁচটি। প্রথম  ইনপুটে থাকবে নাম। এবং দ্বিতীয় ইনপুটে থাকবে। জেলার নাম এবং তৃতীয় ইনপুটে  থাকবে ইমেল। এবং চতুর্থ ইনপুটে  থাকবে নাম্বার। পঞ্চম ইনপুটে  থাকবে সাবমিট বাটন। এই ইনপুট গুলা বেলিডেশন থাকবে। চ্যালেঞ্জ পার্ট : নামের জায়গায় স্টিং থাকবে।নাম্বার দিলে চলবে না।জেলার জায়গায় ইস্টিং থাকবে নাম্বার থাকলে চলবে না। ইমেলের জায়গায় শুধু ইমেল থাকবে নাম্বার দিলে  বা@ না দিলে ইরর দেখাবে। এবং নাম্বারের জায়গায় শুধু নাম্বারই থাকবে ইস্টিং থাকবে না। এবং নাম্বারটি ১১ ডিজিট হতে হবে তার কম হলে এরর দেখাবে। উপরে সবগুলো ইনপুট যদি সত্য হয় তাহলে সাবমিট সাকসেসফুল দেখাবে যদি সত্য না হয় তাহলে ইউরোর দেখাবে

// Start now//

// node problemsolving.js//
// first input//

function nam(person) {
    if (typeof person !== "string") {
        return "Plz type a string name example( Rasel Ahamed)"
    }

    //  else if(person !== person.toLocaleUpperCase()){
    //     console.log("boro hater likho");
    //  }

    for (let i = 0; i < person.length; i++) {
        let chek = person[i];
        if (chek > "0" && chek < "9") {
            return "plz jast A-Z string no number";
        }
    }

    if (typeof person === "string") {
        return person
    }

}
let namfinall = nam("Azmir Uddin 143");
console.log(namfinall);


// node problemsolving.js//
// secont input//

function distric(jela) {

    if (typeof jela !== "string") {
        return "plz type a string name"
    }

    for (let i = 0; i < jela.length; i++) {
        let test = jela[i];
        if (test > "0" && test < "9") {
            return "plz type a string name no number"
        }
    }

    if (typeof jela === "string") {
        return jela
    }

}

let districfinall = distric(54154);
console.log(districfinall);


// node problemsolving.js//
// therd input//

function email(emailaddress) {

    if (typeof emailaddress !== "string" || !emailaddress.includes("@")) {
        console.log("Apnar Email thik nai");
    }
    else {
        console.log(emailaddress);
    }
}

let emailfinall = email("freelancerazmir143@gmail.com");

// node problemsolving.js//
// four input//

function numberinput(numbervalue) {

    if (numbervalue.toString().length <= 10 || numbervalue.toString().length >= 12) {
        console.log("Number thik nai 11tar kom ba besi ace");
    }
    else {
        console.log(numbervalue);
    }

}

let man = numberinput(123);
console.log(man);


// node problemsolving.js//
// four input//


  function submitbutton() {
      console.log("Submit Suxesfull");
  }

  let submitfinal = submitbutton();
  console.log(submitfinal);