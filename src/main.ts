import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { injectModel } from './utils/loadSchemas';

async function bootstrap() {
  // injectModel();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
