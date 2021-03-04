/* Набор вспомогательных функций*/

// Возвращает символ при нажатии клавиши ввода символа или null при нажатии специальной клавиши 
function getChar(event) {
	if (event.which == null) {
		if (event.keyCode < 32) return null;
			return String.fromCharCode(event.keyCode) // IE
		}
	
	if (event.which != 0 && event.charCode != 0) {
		if (event.which < 32) return null;
		return String.fromCharCode(event.which) // остальные
	}
	return null; // специальная клавиша
}

// Дает печатать только вводимые цифры и разделитель-точку или запятую
function inNumCheck(e) {

	e = e || event;
	
	if (e.ctrlKey || e.altKey || e.metaKey) return;
	
	var chr = getChar(e);
	
	if (chr == null) return;

//	if ((chr == '.') && (isAnyDot(e) || e.srcElement.value.length == 0)) return false;
//
//	if ((chr == '.') && !isAnyDot(e)) return;

	// придумать, как потом сделать автозамену запятой на точку и вернуть эти строки вместо двух верхних
	if ((chr == '.' || chr == ',') && (e.srcElement.value.length == 0)){
		e.srcElement.value = "0.";
		return false
	};

	if ((chr == '.' || chr == ',') && (isAnyDot(e))) return false;

	if ((chr == '.' || chr == ',') && !(isAnyDot(e))){
		e.srcElement.value = e.srcElement.value + ".";
		return false	 
	};

	if (chr < '0' || chr > '9') {
	return false;
	}

}

// Проверяет, есть ли точка в элементе активного действия
function isAnyDot(e){
	
	var toCheck = e.srcElement.value;

	for (var i = 0; i < toCheck.length; i++) {
		if ((toCheck[i] == '.') || (toCheck[i] == ',')) return true;
	};

	return false;
}

// Заменяет запятые на точки, удаляет точки и запятые в конце
function toRealNum(likeANum){
	
	for (var i = 0; i < likeANum.length; i++) {
		if (likeANum[i] == ',') likeANum[i] = '.';
	};

	return likeANum;
}

// Дает печатать только цифры и не больше определенного количества
function inWholeNumCheck(e, maxNum) {

	e = e || event;

	if (e.ctrlKey || e.altKey || e.metaKey) return;
	
	if (e.srcElement.value.length == maxNum) return false;

	var chr = getChar(e);
	
	if (chr == null) return;

	if (chr < '0' || chr > '9') {
	return false;
	}

}

// Скачивает с сервера и передает на сайт содержимое JSON-файла
function loadJSON(filePath) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', filePath, false);
	xhr.send();
	if (xhr.status != 200) {
	  alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
	} else {
	
	var ret = xhr.responseText;
	return ret;
	}
}
//filePath example:
//'jsonsource/types.json'

// Загружает с сайта и передает на сервер содержимое JSON-файла
function uploadJSON(postData, filePath) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', filePath, false);
	xhr.send(postData);
	if (xhr.status != 200) {
	  alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
	} else {
	
	var ret = xhr.responseText;
	return ret;
	}
}
//filePath example:
//'jsonsource/types.json'