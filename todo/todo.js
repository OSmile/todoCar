//alert("Добро пожаловать!")

add_button.onclick = function() {
    var tr11 = document.getElementById('tr11'); //берем первую строку
    var table = document.getElementById('car_parts');


    var tr31 = document.createElement('tr'); //создаем еще строку
    var td31 = document.createElement('td');
    var type = prompt('Что будем менять?', 'Машинное масло');
    td31.innerHTML = type; //создаем столбец
    var td32 = document.createElement('td');
    var current_mileage = prompt('Введите свой пробег', '200км');
    td32.innerHTML = current_mileage; //создаем еще столбец
    var td33 = document.createElement('td');
    var needed_mileage = prompt('Введите пробег для замены', '500км');
    td33.innerHTML = needed_mileage; //создаем еще столбец

    //tr11.appendChild(td31); так можно добавить в первую строку столбец
    tr31.appendChild(td31); //кладем в новосозданную строку первый новосозданный столбец
    tr31.appendChild(td32); //кладем в новосозданную строку второй новосозданный столбец
    tr31.appendChild(td33); //кладем в новосозданную строку второй новосозданный столбец

    table.appendChild(tr31); //кладем в таблицу новосозданную строку (последней)

};