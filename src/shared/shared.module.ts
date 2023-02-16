import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiConfigService } from './service/api-config.service';


const providers = [
  ApiConfigService,
];

@Global()
@Module({
  providers,
  imports: [
    ConfigModule,
  ],
  exports: [...providers],
})
export class SharedModule {}
