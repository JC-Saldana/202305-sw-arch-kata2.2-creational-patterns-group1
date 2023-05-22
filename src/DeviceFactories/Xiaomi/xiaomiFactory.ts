import { BatteryB } from '../../Components/Batteries';
import { ScreenA } from '../../Components/Screens';

export default class XiaomiFactory {
	public createScreen(): ScreenA {
		return new ScreenA();
	}

	public createBattery(): BatteryB {
		return new BatteryB();
	}
}
