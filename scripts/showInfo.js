/* Добавляет таблицу с данными выбранного маркера */

function showInfo(spectec){

	var remoTab = document.getElementById('remTab');
	if (remoTab != null) {
		remoTab.remove();	
	}

	// Удаление предыдущего поля с реквизитами
	var remoReq = document.getElementById('requisites');
	if (remoReq != null) {
		remoReq.remove();	
	};

	// Добавление поля для таблицы
	var divRem = document.createElement('div');
	divRem.id = "remTab";
	document.getElementById('removable').appendChild(divRem);

	// Создание таблицы для фото
	var tableImg = document.createElement('table');
	tableImg.id = "tableImg";
	document.getElementById('remTab').appendChild(tableImg);

		// Фото
		var trImg = document.createElement('tr');
		trImg.class = "tableImgClass";
		trImg.id = "trImg";
		document.getElementById('tableImg').appendChild(trImg);
	
			var tdImg1 = document.createElement('td');
			tdImg1.class = "tableImgClassL";
			tdImg1.id = "tdImg1";
			document.getElementById('trImg').appendChild(tdImg1);
	
				var img1 = document.createElement('img');
				img1.id = "img1";
				img1.width = "165";
				img1.src = "images/testCarImg1.jpg";
				document.getElementById('tdImg1').appendChild(img1);
	
		
			var tdImg2 = document.createElement('td');
			tdImg2.class = "tableImgClassR";
			tdImg2.id = "tdImg2";
			document.getElementById('trImg').appendChild(tdImg2);
	
				var img2 = document.createElement('img');
				img2.id = "img2";
				img2.width = "165";
				img2.src = "images/testCarImg2.jpg";
				document.getElementById('tdImg2').appendChild(img2);
	
	// Создание таблицы для атрибутов техники
	var tableTec = document.createElement('table');
	tableTec.id = "tableTec";
	document.getElementById('remTab').appendChild(tableTec);
		
		// Атрибуты
		for (var i = 0; i < spectec.attr.length; i++) {
			
			var trAttr = document.createElement('tr');
			trAttr.class = "tableTecClass";
			trAttr.id = "trAttr" + (i+1);
			document.getElementById('tableTec').appendChild(trAttr);
			
				var tdAttr1 = document.createElement('td');
				tdAttr1.class = "tableTecClassL";
				tdAttr1.id = "tdAttr" + (i+1) + "1";
				tdAttr1.innerHTML = spectec.attr[i].name + ":";		
				document.getElementById("trAttr" + (i+1)).appendChild(tdAttr1);
		
				var tdAttr2 = document.createElement('td');
				tdAttr2.class = "tableTecClassR";
				tdAttr2.id = "tdAttr" + (i+1) + "2";
				tdAttr2.innerHTML = spectec.attr[i].value;
				document.getElementById("trAttr" + (i+1)).appendChild(tdAttr2);
		}

	// Создание таблицы для модели техники
	var tableMod = document.createElement('table');
	tableMod.id = "tableMod";
	document.getElementById('remTab').appendChild(tableMod);

		// Марка
		var trMark = document.createElement('tr');
		trMark.class = "tableModClass";
		trMark.id = "trMark";
		document.getElementById('tableMod').appendChild(trMark);
	
			var tdMark1 = document.createElement('td');
			tdMark1.class = "tableModClassL";
			tdMark1.id = "tdMark1";
			tdMark1.innerHTML = "Марка:";
			document.getElementById('trMark').appendChild(tdMark1);
		
			var tdMark2 = document.createElement('td');
			tdMark2.class = "tableModClassR";
			tdMark2.id = "tdMark2";
			tdMark2.innerHTML = spectec.mark;
			document.getElementById('trMark').appendChild(tdMark2);

		// Модель
		var trType = document.createElement('tr');
		trType.class = "tableModClass";
		trType.id = "trType";
		document.getElementById('tableMod').appendChild(trType);
	
			var tdType1 = document.createElement('td');
			tdType1.class = "tableModClassL";
			tdType1.id = "tdType1";
			tdType1.innerHTML = "Модель:";
			document.getElementById('trType').appendChild(tdType1);
		
			var tdType2 = document.createElement('td');
			tdType2.class = "tableModClassR";
			tdType2.id = "tdType2";
			tdType2.innerHTML = spectec.type;
			document.getElementById('trType').appendChild(tdType2);

		// Год
		var trYear = document.createElement('tr');
		trYear.class = "tableModClass";
		trYear.id = "trYear";
		document.getElementById('tableMod').appendChild(trYear);
	
			var tdYear1 = document.createElement('td');
			tdYear1.class = "tableModClassL";
			tdYear1.id = "tdYear1";
			tdYear1.innerHTML = "Год выпуска:";
			document.getElementById('trYear').appendChild(tdYear1);
		
			var tdYear2 = document.createElement('td');
			tdYear2.class = "tableModClassR";
			tdYear2.id = "tdYear2";
			tdYear2.innerHTML = spectec.year;
			document.getElementById('trYear').appendChild(tdYear2);

	// Создание таблицы для данных ЮЛ
	var tableEnt = document.createElement('table');
	tableEnt.id = "tableEnt";
	document.getElementById('remTab').appendChild(tableEnt);

		// ЮЛ, наименование
		var trEntyName = document.createElement('tr');
		trEntyName.class = "tableEntClass";
		trEntyName.id = "trEntyName";
		document.getElementById('tableEnt').appendChild(trEntyName);
	
			var tdEntyName = document.createElement('td');
			tdEntyName.class = "tableEntClassL";
			tdEntyName.id = "tdEntyName";
			tdEntyName.innerHTML = spectec.entyShortName;
			document.getElementById('trEntyName').appendChild(tdEntyName);

		// Рейтинг
		var trRate = document.createElement('tr');
		trRate.class = "tableEntClass";
		trRate.id = "trRate";
		document.getElementById('tableEnt').appendChild(trRate);
	
			var tdRate = document.createElement('td');
			tdRate.class = "tableEntClassL";
			tdRate.id = "tdRate";
			tdRate.innerHTML = "Рейтинг: " + spectec.rate;
			document.getElementById('trRate').appendChild(tdRate);

		// Гос номер техники
		var trDriverName = document.createElement('tr');
		trDriverName.class = "tableEntClass";
		trDriverName.id = "trDriverName";
		document.getElementById('tableEnt').appendChild(trDriverName);
	
			var tdDriverName = document.createElement('td');
			tdDriverName.class = "tableEntClassL";
			tdDriverName.id = "tdDriverName";
			tdDriverName.innerHTML = spectec.vendorcode;
			document.getElementById('trDriverName').appendChild(tdDriverName);
		
		// Телефон + имя водителя
		var trPhone = document.createElement('tr');
		trPhone.class = "tableEntClass";
		trPhone.id = "trPhone";
		document.getElementById('tableEnt').appendChild(trPhone);
		
			var tdPhone = document.createElement('td');
			tdPhone.class = "tableEntClassR";
			tdPhone.id = "tdPhone";
			tdPhone.innerHTML = spectec.phone + "  " + spectec.driverName;
			document.getElementById('trPhone').appendChild(tdPhone);

		// E-mail
		var trMail = document.createElement('tr');
		trMail.class = "tableEntClass";
		trMail.id = "trMail";
		document.getElementById('tableEnt').appendChild(trMail);
		
			var tdMail = document.createElement('td');
			tdMail.class = "tableEntClassR";
			tdMail.id = "tdMail";
			tdMail.innerHTML = spectec.mail;
			document.getElementById('trMail').appendChild(tdMail);

	// Создание таблицы для формирования счета
	var tableSend = document.createElement('table');
	tableSend.id = "tableSend";
	document.getElementById('remTab').appendChild(tableSend);

		// Ввод суммы, кнопка "Послать"
		var trCheck = document.createElement('tr');
		trCheck.class = "tableSendClass";
		trCheck.id = "trCheck";
		document.getElementById('tableSend').appendChild(trCheck);
			
			// Ввод рублей
			var tdCheckR = document.createElement('td');
			tdCheckR.class = "tableSendClassL";
			tdCheckR.id = "tdCheckR";
			document.getElementById('trCheck').appendChild(tdCheckR);
			
				var inputSumR = document.createElement('input');
				inputSumR.id = "inputSumR";
				inputSumR.type = "text";
				inputSumR.name = "checkSumR";
				inputSumR.value = "";
				inputSumR.size = "10";
				inputSumR.autocomplete = "off";
				inputSumR.placeholder = "Введите сумму";

				inputSumR.onkeypress = function(e) {
					var onky = inWholeNumCheck(e, 100000000000000000000000);
					return onky;
				}

				document.getElementById("tdCheckR").appendChild(inputSumR);

			var tdCheckRi = document.createElement('td');
			tdCheckRi.class = "tableSendClassL";
			tdCheckRi.id = "tdCheckRi";
			tdCheckRi.innerHTML = "руб."
			document.getElementById('trCheck').appendChild(tdCheckRi);

			// Ввод копеек
			var tdCheckK = document.createElement('td');
			tdCheckK.class = "tableSendClassL";
			tdCheckK.id = "tdCheckK";
			document.getElementById('trCheck').appendChild(tdCheckK);
			
				var inputSumK = document.createElement('input');
				inputSumK.id = "inputSumK";
				inputSumK.type = "text";
				inputSumK.name = "checkSumK";
				inputSumK.value = "";
				inputSumK.maxlength = 2;
				inputSumK.size = 2;
				inputSumK.placeholder = "00";
				inputSumK.autocomplete = "off";

				inputSumK.onkeypress = function(e) {
					var onky = inWholeNumCheck(e, 2);
					return onky;
				}

				document.getElementById("tdCheckK").appendChild(inputSumK);		

			var tdCheckKi = document.createElement('td');
			tdCheckKi.class = "tableSendClassL";
			tdCheckKi.id = "tdCheckKi";
			tdCheckKi.innerHTML = "коп."
			document.getElementById('trCheck').appendChild(tdCheckKi);

			// Кнопка
			var tdBut = document.createElement('td');
			tdBut.class = "tableSendClassR";
			tdBut.id = "tdBut";
			document.getElementById('trCheck').appendChild(tdBut);

				// Формирование панели для ввода реквизитов по нажатию кнопки
				var buttAct = function(){
					formDoc(document.getElementById("inputSumR").value, document.getElementById("inputSumK").value)
				};

				var sendBut = document.createElement('button');
				sendBut.id = "sendBut";
				sendBut.type = "button";
				sendBut.name = "sendButBut";
				sendBut.value = "";
				sendBut.innerHTML = "Сформировать счет";
				sendBut.onclick = buttAct;
				document.getElementById("tdBut").appendChild(sendBut);
}