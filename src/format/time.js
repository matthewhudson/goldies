let datetime = new Date()
let suffix = datetime.getUTCHours() < 12 ? 'am' : 'pm'
let minutes = datetime.getUTCMinutes()

if (minutes < 10) minutes = `0${minutes}`

let time = `${datetime.getUTCHours() % 12}:${minutes} ${suffix}`
