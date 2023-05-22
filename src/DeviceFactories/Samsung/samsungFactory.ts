import { BatteryA } from '../../Components/Batteries';
import { ScreenA } from '../../Components/Screens';

export default class SamsungFactory {
	public createScreen(): ScreenA {
		return new ScreenA();
	}

	public createBattery(): BatteryA {
		return new BatteryA();
	}
}
