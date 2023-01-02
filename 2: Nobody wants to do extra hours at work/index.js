function countHours(year, holidays) {
    let extraHours = 0
    holidays.forEach((monthDay) => {
        const holidayDate = new Date(`${monthDay}/${year}`)
        const holidayDay = holidayDate.getDay()
        // Check that holiday is either Saturday or Sunday
        const isHolidayWeekend = holidayDay === 6 || holidayDay === 0
        if (!isHolidayWeekend) extraHours += 2
    })
    return extraHours
}

/*

Score: 91
2,563 ops/s (Higher is better)
Cognitive complexity: 1 (Lower is better)

*/
