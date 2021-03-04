/* Формирует панель для ввода реквизитов */

function formDoc(rub, kop){

	// Удаление предыдущего поля с реквизитами
	var remoReq = document.getElementById('requisites');
	if (remoReq != null) {
	    remoReq.remove();   
	};

	if (rub*1 == 0 && kop*1 == 0) {
		
		function inpNewColor(col){
			document.getElementById("inputSumR").style.backgroundColor = col;
		}

		setTimeout(inpNewColor, 5, '#F9B71F');
		setTimeout(inpNewColor, 777, "#FFF");

	}

	else{

		// Создает json-файл с введенными реквизитами, отправляет на сервер для обработки
		// и скачивает с сервера итоговый XLS-файл со сформированным счетом 
		var dLoad = function(){

			// создание объекта-шаблона для реквизитов из загружаемого json'а с сервера
			var dataCheck = JSON.parse(loadJSON("jsonsource/outerReqTemplate.json"));

			// подстановка введенных в поля значений в шаблон  	
			for (var i = 0; i < dataCheck.length; i++) {
				dataCheck[i].value = document.getElementById(dataCheck[i].idMain + "Input").value;
			}

			// создание json-переменной из объекта шаблона
			var finJSON = JSON.stringify(dataCheck, "", 4);

			var postJson = uploadJSON(finJSON, '/');
			
		}

		// Создает шаблон одной строки с двумя столбцами с кнопками и добавляет его к таблице
		function formButton12(idTable, idMain){
					
					// Создание ряда				
					var main = document.createElement('tr');
					main.class = idTable + "Class";
					main.id = idMain;
					document.getElementById(idTable).appendChild(main);
						
						// Создание столбца с текстом
						var mainL = document.createElement('td');
						mainL.class = idTable + "ClassL";
						mainL.id = idMain + "L";
						mainL.colSpan = "2";		
						document.getElementById(idMain).appendChild(mainL);
	
							var sendButL = document.createElement('button');
							sendButL.id = idMain + "sendButL";
							sendButL.type = "button";
							sendButL.name = idMain + "sendButLName";
							sendButL.value = "";
							sendButL.innerHTML = "Скачать счет";
							sendButL.onclick = dLoad;
							document.getElementById(idMain + "L").appendChild(sendButL);
							
						// Создание столбца с полем для ввода
						var mainR = document.createElement('td');
						mainR.class = idTable + "ClassR";
						mainR.id = idMain + "R";
						mainR.colSpan = "2";
						document.getElementById(idMain).appendChild(mainR);

							var sendButR = document.createElement('button');
							sendButR.id = idMain + "sendButR";
							sendButR.type = "button";
							sendButR.name = idMain + "sendButRName";
							sendButR.value = "";
							sendButR.innerHTML = "Скачать счет <br> и сохранить реквизиты";
//							sendButR.onclick = buttActR;
							document.getElementById(idMain + "R").appendChild(sendButR);

		}

		// Создает шаблон одной строки с двумя столбцами и добавляет его к таблице
		function formInput12(idTable, idMain, name, value){
					
					// Создание ряда				
					var main = document.createElement('tr');
					main.class = idTable + "Class";
					main.id = idMain;
					document.getElementById(idTable).appendChild(main);
						
						// Создание столбца с текстом
						var mainL = document.createElement('td');
						mainL.class = idTable + "ClassL";
						mainL.id = idMain + "L";
						mainL.innerHTML = name + ": ";
						mainL.colSpan = "2";		
						document.getElementById(idMain).appendChild(mainL);
						
						// Создание столбца с полем для ввода
						var mainR = document.createElement('td');
						mainR.class = idTable + "ClassR";
						mainR.id = idMain + "R";
						mainR.colSpan = "2";
						document.getElementById(idMain).appendChild(mainR);

							// Создание поля для ввода
							var inputMain = document.createElement('input');
							inputMain.id = idMain + "Input";
							inputMain.type = "text";
							inputMain.name = idMain + "InputName";
							inputMain.value = "";
							inputMain.placeholder = value;
							document.getElementById(idMain + "R").appendChild(inputMain);		
		}

		// Создает шаблон одной строки с тремя столбцами и добавляет его к таблице
		function formInput14(idTable, idMain1, idMain2, name1, name2, value1, value2){
					
					// Создание ряда				
					var main = document.createElement('tr');
					main.class = idTable + "Class";
					main.id = idMain1 + "" + idMain2;
					document.getElementById(idTable).appendChild(main);
						
						// Создание столбца с текстом
						var mainLL = document.createElement('td');
						mainLL.class = idTable + "ClassL";
						mainLL.id = idMain1 + "L";
						mainLL.innerHTML = name1 + ": ";		
						document.getElementById(idMain1 + "" + idMain2).appendChild(mainLL);
						
						// Создание столбца с полем для ввода
						var mainLR = document.createElement('td');
						mainLR.class = idTable + "ClassR";
						mainLR.id = idMain1 + "LR";
						document.getElementById(idMain1 + "" + idMain2).appendChild(mainLR);

							// Создание поля для ввода
							var inputMainL = document.createElement('input');
							inputMainL.id = idMain1 + "Input";
							inputMainL.type = "text";
							inputMainL.name = idMain1 + "InputNameL";
							inputMainL.value = "";
							inputMainL.style.width = "80px";
							inputMainL.placeholder = value1;
							document.getElementById(idMain1 + "LR").appendChild(inputMainL);

						// Создание столбца с текстом
						var mainRL = document.createElement('td');
						mainRL.class = idTable + "ClassL";
						mainRL.id = idMain2 + "L";
						mainRL.innerHTML = name2 + ": ";		
						document.getElementById(idMain1 + "" + idMain2).appendChild(mainRL);
						
						// Создание столбца с полем для ввода
						var mainRR = document.createElement('td');
						mainRR.class = idTable + "ClassR";
						mainRR.id = idMain2 + "RR";
						document.getElementById(idMain1 + "" + idMain2).appendChild(mainRR);

							// Создание поля для ввода
							var inputMainR = document.createElement('input');
							inputMainR.id = idMain2 + "Input";
							inputMainR.type = "text";
							inputMainR.name = idMain2 + "InputNameR";
							inputMainR.value = "";
							inputMainR.style.width = "80px";
							inputMainR.placeholder = value2;
							document.getElementById(idMain2 + "RR").appendChild(inputMainR);									
		}

		// Создает шаблон двух строк с одним столбцом и добавляет его к таблице
		function formInput21(idTable, idMain, name, value){
					
					// Создание строки				
					var trMainU = document.createElement('tr');
					trMainU.class = idTable + "Class";
					trMainU.id = idMain + "U";
					document.getElementById(idTable).appendChild(trMainU);
						
						// Создание ячейки с текстом
						var tdMainU = document.createElement('td');
						tdMainU.class = idTable + "ClassL";
						tdMainU.id = idMain + "Utd";
						tdMainU.colSpan = "4";
						tdMainU.innerHTML = name + ": ";		
						document.getElementById(idMain + "U").appendChild(tdMainU);
						
					var trMainD = document.createElement('tr');
					trMainD.class = idTable + "Class";
					trMainD.id = idMain + "D";
					document.getElementById(idTable).appendChild(trMainD);

						// Создание ячейки с полем для ввода
						var tdMainD = document.createElement('td');
						tdMainD.class = idTable + "ClassR";
						tdMainD.id = idMain + "Dtd";
						tdMainD.colSpan = "4";
						document.getElementById(idMain + "D").appendChild(tdMainD);

							// Создание поля для ввода
							var inputMain = document.createElement('input');
							inputMain.id = idMain + "Input";
							inputMain.type = "text";
							inputMain.name = idMain + "InputName";
							inputMain.value = "";
							inputMain.style.width = "340px";
							inputMain.placeholder = value;
							document.getElementById(idMain + "Dtd").appendChild(inputMain);		
		}

		// Удаление предыдущего поля с реквизитами
		var remoReq = document.getElementById('requisites');
		if (remoReq != null) {
			remoReq.remove();	
		};

		// Добавление поля для таблицы
		var divRemTab = document.createElement('div');	
		divRemTab.id = "requisites";
		document.getElementById('removablePanel').appendChild(divRemTab);

		// Создание таблицы для ввода реквизитов
		var tableReq = document.createElement('table');
		tableReq.id = "tableReq";
		document.getElementById('requisites').appendChild(tableReq);

		// Массив с пунктами реквизитов
		var dataCell = [

			{
				idMain :"entyWholeName",
				name : "Полное наименование организации",
				value : "Общество с ограниченной ответственностью \"Лучший заказчик\""
			},
			{
				idMain :"entyShortName",
				name : "Сокращенное наименование организации",
				value : "ООО \"Лучший заказчик\""
			},
			{
				idMain :"entyAdress",
				name : "Юридический адрес",
				value : "194000, г. Санкт-Петербург, ул. Главная, д. 1, пом. 1"
			},
			{
				idMain :"realAdress",
				name : "Фактический адрес",
				value : "194000, г. Санкт-Петербург, ул. Главная, д. 1, офис 1"
			},
			{
				idMain :"phone",
				name : "Тел./факс",
				value : "8 (999) 1234567"
			},
			{
				idMain :"mail",
				name : "E-mail",
				value : "mymail@mybox.ru"
			},
			{
				idMain :"inn",
				name : "ИНН",
				value : "1234567890"
			},
			{
				idMain :"kpp",
				name : "КПП",
				value : "123456789"
			},
			{
				idMain :"rsAccount",
				name : "р/с",
				value : "12345678901234567890"
			},
			{
				idMain :"bankName",
				name : "Наименование банка",
				value : "Филиал «Северная столица» АО «Райффайзенбанк» г. Санкт-Петербург"
			},
			{
				idMain :"ksAccount",
				name : "к/с",
				value : "12345678901234567890"
			},
			{
				idMain :"bik",
				name : "БИК",
				value : "123456789"
			},
			{
				idMain :"ogrn",
				name : "ОГРН",
				value : "1234567890123"
			},
			{
				idMain :"okpo",
				name : "ОКПО",
				value : "12345678"
			},
			{
				idMain :"oktmo",
				name : "ОКТМО",
				value : "12345678"
			},
			{
				idMain :"chiefManager",
				name : "Генеральный директор",
				value : "Семенов Илья Олегович"
			},
			{
				idMain :"chiefAccountant",
				name : "Главный бухгалтер",
				value : "Ильин Олег Семенович"
			}

		];

		// Добавление в таблицу рядов с полями для ввода
		for (var i = 0; i < 4; i++) {
			formInput21("tableReq", dataCell[i].idMain, dataCell[i].name, dataCell[i].value);
		}

		for (var i = 4; i < 6; i++) {
			formInput12("tableReq", dataCell[i].idMain, dataCell[i].name, dataCell[i].value);
		}

		formInput14("tableReq", dataCell[6].idMain, dataCell[7].idMain, dataCell[6].name, dataCell[7].name, dataCell[6].value, dataCell[7].value);
		formInput12("tableReq", dataCell[8].idMain, dataCell[8].name, dataCell[8].value);
		formInput21("tableReq", dataCell[9].idMain, dataCell[9].name, dataCell[9].value);

		for (var i = 10; i < 17; i++) {
			formInput12("tableReq", dataCell[i].idMain, dataCell[i].name, dataCell[i].value);
		}

		formButton12("tableReq", "sendSend");

	}
	return 1;
}


