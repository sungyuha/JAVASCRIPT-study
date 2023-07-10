// 리액트 파일 만들 때

// person.js
const person = {
    name: 'Max'
}

export default person;

// utility.js
// 상수형 
export const clean = () => {}
export const baseData = 10;

// app.js
import person from './person.js';
import prs from './person';

import {baseData} from './utility.js';
import {clean} from './utility.js';