import { Logger } from '@nestjs/common';

export class DebugLogger extends Logger {
	log(message: any, context?: string): void;
	log(message: any, ...optionalParams: [...any, string?]): void;

	log(message: any, ...optionalParams: any[]) {
		super.log(message, ...optionalParams);
	}
}
