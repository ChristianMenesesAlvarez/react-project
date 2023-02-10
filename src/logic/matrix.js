function getCombinations(arr) {
	const rows = arr.length;
	const columns = arr[0].length;
	let returnedArray = [];

	// Horizontals
	for (let x = 0; x < rows; x++) {
		let str1 = '', str2 = '';
		for (let y = 0; y < columns; y++) str1 += arr[x][y] === '' ? '_' : arr[x][y];
		for (let y = (columns - 1); y >= 0; y--) str2 += arr[x][y] === '' ? '_' : arr[x][y];
		returnedArray.push(str1, str2);
	}

	// Verticals
	for (let y = 0; y < columns; y++) {
		let str1 = '', str2 = '';
		for (let x = 0; x < rows; x++) str1 += arr[x][y] === '' ? '_' : arr[x][y];
		for (let x = (rows - 1); x >= 0; x--) str2 += arr[x][y] === '' ? '_' : arr[x][y];
		returnedArray.push(str1, str2);
	}

	// Diagonals From Left/Right Column
	for (let init = 1; init < rows - 1; init++) {
		let str1 = '', str2 = '', str3 = '', str4 = '';
		for (let x = init, y = 0; x >= 0 && y < columns; x--, y++) str1 += arr[x][y] === '' ? '_' : arr[x][y];
		for (let x = init, y = 0; x < rows && y < columns; x++, y++) str2 += arr[x][y] === '' ? '_' : arr[x][y];
		for (let x = init, y = (columns - 1); x >= 0 && y >= 0; x--, y--) str3 += arr[x][y] === '' ? '_' : arr[x][y];
		for (let x = init, y = (columns - 1); x < rows && y >= 0; x++, y--) str4 += arr[x][y] === '' ? '_' : arr[x][y];
		returnedArray.push(str1, str2, str3, str4);
	}

	// Diagonals From Top/Bottom Row
	for (let init = 0; init < columns; init++) {
		let str1 = '', str2 = '', str3 = '', str4 = '';
		for (let y = init, x = 0; y >= 0 && x < rows; x++, y--) str1 += arr[x][y] === '' ? '_' : arr[x][y];
		for (let y = init, x = 0; y < columns && x < rows; x++, y++) str2 += arr[x][y] === '' ? '_' : arr[x][y];
		for (let y = init, x = (rows - 1); y >= 0 && x >= 0; x--, y--) str3 += arr[x][y] === '' ? '_' : arr[x][y];
		for (let y = init, x = (rows - 1); y < columns && x >= 0; x--, y++) str4 += arr[x][y] === '' ? '_' : arr[x][y];
		returnedArray.push(str1, str2, str3, str4);
	}

	return [...returnedArray];
}

function findMatchPosition(arr, match, flags) {
	const rows = arr.length;
	const columns = arr[0].length;
	const regex = new RegExp(match, flags);
	let returnedSet = new Set();

	// Horizontals
	for (let x = 0; x < rows; x++) {
		let str1 = '', str2 = '', pos1 = [], pos2 = [];
		for (let y = 0; y < columns; y++) { // Left Column - Goes left to right
			str1 += arr[x][y] === '' ? '_' : arr[x][y];
			pos1.push([x, y]);
			if (str1.slice(str1.length - match.length).match(regex)) returnedSet.add(pos1.slice(str1.length - match.length));
		}
		for (let y = (columns - 1); y >= 0; y--) { // Right Column - Goes right to left
			str2 += arr[x][y] === '' ? '_' : arr[x][y];
			pos2.push([x, y]);
			if (str2.slice(str2.length - match.length).match(regex)) returnedSet.add(pos2.slice(str2.length - match.length));
		}
	}

	// Verticals
	for (let y = 0; y < columns; y++) {
		let str1 = '', str2 = '', pos1 = [], pos2 = [];
		for (let x = 0; x < rows; x++) { // Top Row - Goes top to bottom
			str1 += arr[x][y] === '' ? '_' : arr[x][y];
			pos1.push([x, y]);
			if (str1.slice(str1.length - match.length).match(regex)) returnedSet.add(pos1.slice(str1.length - match.length));
		}
		for (let x = (rows - 1); x >= 0; x--) { // Bottom Row - Goes bottom to top
			str2 += arr[x][y] === '' ? '_' : arr[x][y];
			pos2.push([x, y]);
			if (str2.slice(str2.length - match.length).match(regex)) returnedSet.add(pos2.slice(str2.length - match.length));
		}
	}

	// Diagonals From Left/Right Column
	for (let init = 1; init < rows - 1; init++) {
		let str1 = '', str2 = '', str3 = '', str4 = '', pos1 = [], pos2 = [], pos3 = [], pos4 = [];
		for (let x = init, y = 0; x >= 0 && y < columns; x--, y++) { // Left Column - Goes top / right
			str1 += arr[x][y] === '' ? '_' : arr[x][y];
			pos1.push([x, y]);
			if (str1.slice(- match.length).match(regex)) returnedSet.add(pos1.slice(- match.length));
		}
		for (let x = init, y = 0; x < rows && y < columns; x++, y++) { // Left Column - Goes bottom / right
			str2 += arr[x][y] === '' ? '_' : arr[x][y];
			pos2.push([x, y]);
			if (str2.slice(- match.length).match(regex)) returnedSet.add(pos2.slice(- match.length));
		}
		for (let x = init, y = (columns - 1); x >= 0 && y >= 0; x--, y--) { // Right Column - Goes top / left
			str3 += arr[x][y] === '' ? '_' : arr[x][y];
			pos3.push([x, y]);
			if (str3.slice(- match.length).match(regex)) returnedSet.add(pos3.slice(- match.length));
		}
		for (let x = init, y = (columns - 1); x < rows && y >= 0; x++, y--) { // Right Column - Goes bottom / left
			str4 += arr[x][y] === '' ? '_' : arr[x][y];
			pos4.push([x, y]);
			if (str4.slice(- match.length).match(regex)) returnedSet.add(pos4.slice(- match.length));
		}
	}

	// Diagonals From Top/Bottom Row
	for (let init = 0; init < columns; init++) {
		let str1 = '', str2 = '', str3 = '', str4 = '', pos1 = [], pos2 = [], pos3 = [], pos4 = [];
		for (let y = init, x = 0; y >= 0 && x < rows; x++, y--) { // Top Row - Goes bottom / left
			str1 += arr[x][y] === '' ? '_' : arr[x][y];
			pos1.push([x, y]);
			if (str1.slice(- match.length).match(regex)) returnedSet.add(pos1.slice(- match.length));
		}
		for (let y = init, x = 0; y < columns && x < rows; x++, y++) { // Top Row - Goes bottom / right
			str2 += arr[x][y] === '' ? '_' : arr[x][y];
			pos2.push([x, y]);
			if (str2.slice(- match.length).match(regex)) returnedSet.add(pos2.slice(- match.length));
		}
		for (let y = init, x = (rows - 1); y >= 0 && x >= 0; x--, y--) { // Bottom Row - Goes top / left
			str3 += arr[x][y] === '' ? '_' : arr[x][y];
			pos3.push([x, y]);
			if (str3.slice(- match.length).match(regex)) returnedSet.add(pos3.slice(- match.length));
		}
		for (let y = init, x = (rows - 1); y < columns && x >= 0; x--, y++) { // Bottom Row - Goes top / right
			str4 += arr[x][y] === '' ? '_' : arr[x][y];
			pos4.push([x, y]);
			if (str4.slice(- match.length).match(regex)) returnedSet.add(pos4.slice(- match.length));
		}
	}

	return [...returnedSet];
}

export { getCombinations, findMatchPosition };