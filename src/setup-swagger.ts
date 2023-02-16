import { INestApplication, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
	const options = new DocumentBuilder().setTitle('API').setVersion('1.0').addBearerAuth().build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('documentation', app, document, {
		swaggerOptions: {
			persistAuthorization: true,
		},
	});

	Logger.log(`Documentation: http://localhost:${process.env.PORT}/documentation`);
}
