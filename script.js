console.log("----------Travel Approval Rules--------------");

console.log("------Create the Program Settings------");
console.log(
  "You can't see anything because I have already declared the parameters!!",
);

let ticketRequested = 8;
let customerQualifiesForStudentDiscount = true;
const maximumTicketsAvailable = 8;
const earlyBirdPrice = 18;
const standardPrice = 25;
const premiumPrice = 32;
const standardTicketStudentDiscount = 0.2;
let revenueTarget = 190;
const euro = "€";
let totalWithoutDiscount = 0;
let totalActuallyCharged = 0;

if (ticketRequested < 1 || ticketRequested > 8) {
  console.log(
    "Your ticket is in the negative und big range. Please take a proper look.!!!",
  );
} else {
  console.log("------------Process every ticket with a loop----------------");
  for (let i = 1; i <= 8; i++) {
    let baseprice = getBasisPrice(i);
    let endPrice = finalPrice(i, customerQualifiesForStudentDiscount);
    totalWithoutDiscount = totalWithoutDiscount + baseprice;
    totalActuallyCharged = totalActuallyCharged + endPrice;
    console.log(i + "        " + euro + baseprice);
    console.log(
      `Ticket ${i}: ${customerQualifiesForStudentDiscount} ${euro + endPrice.toFixed(2)}`,
    );
  }

  console.log("Ausgabe beide Summe");
  console.log(`Total without discount:     ${totalWithoutDiscount.toFixed(2)}`);
  console.log(`Total actually charged:     ${totalActuallyCharged.toFixed(2)}`);
}

function getBasisPrice(ticketRequested) {
  if (ticketRequested === 1 || ticketRequested === 2) {
    return earlyBirdPrice;
  } else if (
    ticketRequested === 3 ||
    ticketRequested === 4 ||
    ticketRequested === 5 ||
    ticketRequested === 6
  ) {
    return standardPrice;
  } else {
    return premiumPrice;
  }
}

function finalPrice(ticketRequested, customerQualifiesForStudentDiscount) {
  let initialPrice = getBasisPrice(ticketRequested);
  if (
    customerQualifiesForStudentDiscount &&
    ticketRequested >= 3 &&
    ticketRequested <= 6
  ) {
    return initialPrice * (1 - standardTicketStudentDiscount);
  } else {
    return initialPrice;
  }
}

let targetMe = revenueTargetMet(revenueTarget);
if (targetMe) console.log("Revenue target met");
else console.log("Revenue target not met");
console.log(`The Revenue this Appointment:  ${targetMe}`);

function revenueTargetMet(revenueTarget) {
  if (totalActuallyCharged >= revenueTarget) {
    return true;
  } else return false;
}
console.log("\n\n\n\n");
console.log("---------EVENT TICKET SALES------------");

let earlyBirdTicktets = 0;
let StandardTicketsNachRabatt = 0;
let premiumTickets = 0;
let studentSavings = 0;



for (let i = 1; i <= ticketRequested; i++) {
  endPrice = finalPrice(i, customerQualifiesForStudentDiscount);
  if (i === 1 || i === 2) {
    earlyBirdTicktets = earlyBirdTicktets + endPrice;
  }
  if (i >= 3 && i <= 6) {
    StandardTicketsNachRabatt = StandardTicketsNachRabatt + endPrice;
  }
  if (i === 7 || i === 8) {
    premiumTickets = premiumTickets + endPrice;
  }
}

console.log(`Early-Bird-Tickets:  ${euro}${earlyBirdTicktets}`);
console.log(
  `Standardtickets nach Rabatt:  ${euro + StandardTicketsNachRabatt}`,
);
console.log(`Premium-Tickets:  ${euro + premiumTickets}`);
console.log(`Total without discount:     ${euro}${totalWithoutDiscount.toFixed(2)}`);

let totalSavings = 0;
for(i = 1 ; i <= ticketRequested ; i++){
    if(i >=3 && i <=6){
        let basePrice = getBasisPrice(i);
        let ticketBasePerStudent = basePrice * standardTicketStudentDiscount;
        totalSavings = totalSavings + ticketBasePerStudent;
        
    }
}
console.log(`Student savings: ${euro + totalSavings.toFixed(2)} `);
console.log(`Actual sales:     ${totalActuallyCharged.toFixed(2)}`);
console.log(`Target met:  ${targetMe}`);




