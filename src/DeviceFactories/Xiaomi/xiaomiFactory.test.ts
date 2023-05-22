import { ScreenA } from '../../Components/Screens';
import { BatteryB } from '../../Components/Batteries';
import XiaomiFactory from './xiaomiFactory';

describe('Xioami Factory', () => {
	let xiaomiFactory: XiaomiFactory;

	beforeAll(() => {
		xiaomiFactory = new XiaomiFactory();
	});

	test('Should be able to create Xiaomi screen', () => {
		const xiaomiScreen: ScreenA = xiaomiFactory.createScreen();
		expect(xiaomiScreen).toBeInstanceOf(ScreenA);
	});
	test('Should be able to create Samsung battery', () => {
		const xiaomiScreen: BatteryB = xiaomiFactory.createBattery();
		expect(xiaomiScreen).toBeInstanceOf(BatteryB);
	});
});
