//⁃ напишите функцию, куда может прилетать неограниченный список
// названия книг. Функция должна выводить только те книги, в
// названиях которых есть буква «у» и отдельным списком уже все
// остальные книги . Использовать filter нельзя, напишите свою версию
// метода фильтр)


let books = ['алхимик', 'самурай', 'атмтвмалтмавд', 'ошуцоаутмло','шщоуцасдтми']

function filterItems(query) {
    return books.filter(function (el){
       return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}

console.log(filterItems('у'))
console.log(books)
