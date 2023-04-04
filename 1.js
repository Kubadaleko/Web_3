const temp_c = +prompt('Введите температуру в градусах Цельсия: ');
const temp_f = ((9 / 5) * temp_c + 32).toFixed(1);
alert(`Цельсий: ${temp_c}, Фаренгейт: ${temp_f}`);