// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('placeholder', () => {
  expect(isPhoneNumber('000-000-0000')).toBe(true);
  expect(isPhoneNumber('900-000-8000')).toBe(true);
  expect(isPhoneNumber('0009000-000')).toBe(false);
  expect(isPhoneNumber('erhvbekjvhb')).toBe(false);
})

test('placeholder', () => {
  expect(isEmail('sus@squasc.com')).toBe(true);
  expect(isEmail('com@squasc.sus')).toBe(true);
  expect(isEmail('sussquasc.com')).toBe(false);
  expect(isEmail('sus@squasccom')).toBe(false);
})

test('placeholder', () => {
  expect(isStrongPassword('squilliam720')).toBe(true);
  expect(isStrongPassword('squilliam720')).toBe(true);
  expect(isStrongPassword('sq$%$#^#$')).toBe(false);
  expect(isStrongPassword('720')).toBe(false);
})

test('placeholder', () => {
  expect(isDate('7/3/2004')).toBe(true);
  expect(isDate('12/12/0002')).toBe(true);
  expect(isDate('12/120002')).toBe(false);
  expect(isDate('12210988u/12/0002')).toBe(false);
})

test('placeholder', () => {
  expect(isHexColor('#fb3')).toBe(true);
  expect(isHexColor('#fb38e0')).toBe(true);
  expect(isHexColor('fb38ed0')).toBe(false);
  expect(isHexColor('#zb38e0')).toBe(false);
})