const dayjs = require("dayjs")

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    const daysToNextBirthday = nextBirthday.diff(today, 'day')

    console.log(`Idade: ${ageInYears}`)
    console.log(`Proximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`Dias até o proximo aniversario ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthday("2001-10-18")
