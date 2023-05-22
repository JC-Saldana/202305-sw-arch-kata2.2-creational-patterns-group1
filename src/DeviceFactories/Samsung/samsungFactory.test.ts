import { BatteryA } from '../../Components/Batteries';
import { ScreenA } from '../../Components/Screens';
import SamsungFactory from './samsungFactory';

describe('Samsung Factory', () => {
	let samsungFactory: SamsungFactory;

	beforeAll(() => {
		samsungFactory = new SamsungFactory();
	});

	test('Should be able to create Samsung screen', () => {
		const samsungScreen: ScreenA = samsungFactory.createScreen();
		expect(samsungScreen).toBeInstanceOf(ScreenA);
	});
	test('Should be able to create Samsung battery', () => {
		const samsungBattery: BatteryA = samsungFactory.createBattery();
		expect(samsungBattery).toBeInstanceOf(BatteryA);
	});
});
