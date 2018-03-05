module.exports = function getZerosCount(number, base) {

	var qwe = {};
	for (let i = 2; i <= base; i++) {
		while (true) {
			if (base % i === 0) {
				base = base / i;
				qwe[i] = qwe[i] === undefined ? 1 : qwe[i] + 1;
			} else {
				break;
			}
		}
	}

	var array = [];
	for (var key in qwe) {
		var result = 0;
		for (var i = +key; i <= number; i = i * +key) {
			result += Math.floor(number / i);
		}
		array.push(Math.floor(result / qwe[key]));
	}
	return array.sort((a, b) => a - b)[0];
}
