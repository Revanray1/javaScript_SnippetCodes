//todate
const today = new Date();

// add daysRemaining

const next3day = new Date()
next3day.setDate(today.getDate() + 3)

// add weeks
const after2week = new Date()
after2week.setDate(today.getDate() +(2*7))

//nextMonth
const nextMonth = new Date()
nextMonth.setMonth(today.getMonth()+1)

// add years
const threeYearsLater = new Date()
threeYearsLater.setFullYear(today.getFullYear() + 3)


console.log(today.toDateString())
console.log(next3day.toDateString())
console.log(after2week.toDateString())
console.log(nextMonth.toDateString())
console.log(threeYearsLater.toDateString())
