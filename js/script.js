// #_1
const UPPER = `qwertyuiop[]`;
const MIDDLE = `asdfghjkl`;
const LOWER = `zxcvbnm`;
//#_2
const UPPER_ONE = UPPER.length;
const MIDDLE_TWO = MIDDLE.length;
const LOWER_THREE = LOWER.length;
//#_3
console.log(UPPER.charAt(0), UPPER.charAt(UPPER.length-1));
console.log(MIDDLE.charAt(0), MIDDLE.charAt(MIDDLE.length-1));
console.log(LOWER.charAt(0), LOWER.charAt(LOWER.length-1));
//#_4
const SEARCH_POSITION_ONE = UPPER.indexOf(`[`);
const SEARCH_POSITION_TWO = UPPER.indexOf(`]`);
//#_5
console.log(`
	UPPER = ${UPPER} = ${UPPER_ONE}
	MIDDLE = ${MIDDLE} = ${MIDDLE_TWO}
	LOWER = ${LOWER} = ${LOWER_THREE}
	SEARCH_POSITION_ONE = ${SEARCH_POSITION_ONE}
	SEARCH_POSITION_TWO = ${SEARCH_POSITION_TWO}
	`);

