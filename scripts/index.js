const levels = 3

let game = {
    title: 'Игра',
    description: 'Пройди все уровни',

    info () {
        alert(`Название игры:\n` +
            `${this.title}\n\n` +
            `Описание:\n` +
            `${this.description}\n\n` +
            `Кол-во уровней:\n` +
            `${levels}`
        )
    },

    chooseLvl() {
        let lvl = prompt(`Выберите уровень игры:\n` +
            `(EASY - лёгкий, NORMAL - средний, ` +
            `HARD - сложный)`)
        if (lvl == 'EASY')
    return 1
        else if (lvl == 'NORMAL')
    return 2
        else if (lvl == 'HARD')
    return 3
        else return 0
    },

    lvl1() {
        alert(`Лёгкий уровень\n` +
            `Среднее арифметическое пяти чисел`)

        let arr = new Array(5)
        for (let i = 1; i <= 5; i++) {
            n = +prompt(`Введите ${i}-е число: `)
            arr[i] = n
        }
        alert(`Все числа: ${arr}`)

        let sum = 0
        for (let num of arr) {
        sum += num
        return alert(`Среднее арифметическое пяти чисел равно: ${sum / 5}`)
        }

    },

    lvl2() {
        alert(`Средний уровень\n` +
            `Сумма двух случайных целых чисел`)
        let n1 = Math.floor(Math.random() * 100)
        alert(`Первое случайное число: ` + n1)
        let n2 = Math.floor(Math.random() * 100)
        alert(`Второе случайное число: ` + n2)
        let sum = +prompt(`Введите сумму чисел ${n1} и ${n2}: `)
        if (sum == n1 + n2) {
            alert('Правильно!')
            return true
        }
        else {
            alert('Неправильно!')
            return false
        }
    },

    lvl3() {
        alert(`Сложный уровень\n` +
            `Удаление всех гласных букв из строки`)
        const buyglass = prompt(`Введите строку: `)
        return buyglass.replace(/[aeiouy]/gi, '')
    }
}
game.info()

let lvl = game.chooseLvl()

if (lvl == 0)
    while (lvl == 0)
        lvl = game.chooseLvl()
        if (lvl == 1)
            console.log(game.lvl1())
        else if (lvl == 2)
            console.log(game.lvl2())
        else if (lvl == 3)
            console.log(game.lvl3())