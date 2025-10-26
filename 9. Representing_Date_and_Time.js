const dateObjectName = new Date(arguments);


const todaysDate = new Date() 

const todaysDateString =  Date() // Without the new returns a string

console.log(todaysDateString)
console.log(todaysDate)

let ramadan25 = new Date("2026-2-23")

// YYYY-MM-DDTHH:mm:ss.sssZ the date format

ramadan25 = new Date(2026,2,23,9,30,10)

console.log(ramadan25)

const dayoframadan = ramadan25.getDay()
const monthoframadan = ramadan25.getMonth()

console.log(monthoframadan)


function JSClock() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  let temp = String(hour % 12);
  if (temp === "0") {
    temp = "12";
  }
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  return temp;
}

console.log(JSClock())


const ipoDate = new Date()

console.log(ipoDate)
ipoDate.setTime(Date.parse("Aug 9, 1992"));

console.log(ipoDate)