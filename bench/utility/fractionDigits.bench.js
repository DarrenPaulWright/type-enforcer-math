import { benchSettings } from 'karma-webpack-bundle';
import { fractionDigits } from '../../index.js';

/* eslint-disable no-unused-vars */
suite('fractionDigits', () => {
	let sandbox = null;

	benchmark('infinity', () => {
		sandbox = fractionDigits(Infinity);
	}, benchSettings);

	benchmark('int', () => {
		sandbox = fractionDigits(123);
	}, benchSettings);

	benchmark('2 digits', () => {
		sandbox = fractionDigits(123.12);
	}, benchSettings);

	benchmark('4 digits', () => {
		sandbox = fractionDigits(123.1234);
	}, benchSettings);

	benchmark('6 digits', () => {
		sandbox = fractionDigits(123.123456);
	}, benchSettings);

	benchmark('8 digits', () => {
		sandbox = fractionDigits(123.12345678);
	}, benchSettings);

	benchmark('10 digits', () => {
		sandbox = fractionDigits(123.1234567891);
	}, benchSettings);

	benchmark('1e-15', () => {
		sandbox = fractionDigits(1e-15);
	}, benchSettings);

	benchmark('1e-20', () => {
		sandbox = fractionDigits(1e-20);
	}, benchSettings);

	benchmark('1e-25', () => {
		sandbox = fractionDigits(1e-25);
	}, benchSettings);

	benchmark('1e-30', () => {
		sandbox = fractionDigits(1e-30);
	}, benchSettings);

	benchmark('1e-35', () => {
		sandbox = fractionDigits(1e-35);
	}, benchSettings);

	benchmark('1e-40', () => {
		sandbox = fractionDigits(1e-40);
	}, benchSettings);

	benchmark('1e-45', () => {
		sandbox = fractionDigits(1e-45);
	}, benchSettings);

	benchmark('1e-50', () => {
		sandbox = fractionDigits(1e-50);
	}, benchSettings);

	benchmark('1e-55', () => {
		sandbox = fractionDigits(1e-55);
	}, benchSettings);

	benchmark('1e-60', () => {
		sandbox = fractionDigits(1e-60);
	}, benchSettings);

	benchmark('1e-65', () => {
		sandbox = fractionDigits(1e-65);
	}, benchSettings);

	benchmark('1e-70', () => {
		sandbox = fractionDigits(1e-70);
	}, benchSettings);

	benchmark('1e-75', () => {
		sandbox = fractionDigits(1e-75);
	}, benchSettings);

	benchmark('1e-80', () => {
		sandbox = fractionDigits(1e-80);
	}, benchSettings);

	benchmark('1e-100', () => {
		sandbox = fractionDigits(1e-100);
	}, benchSettings);

	benchmark('1e-200', () => {
		sandbox = fractionDigits(1e-200);
	}, benchSettings);

	benchmark('1e-300', () => {
		sandbox = fractionDigits(1e-300);
	}, benchSettings);
});
