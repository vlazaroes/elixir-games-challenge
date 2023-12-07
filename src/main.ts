import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });
    app.use(helmet());
    await app.listen(3000);
}
bootstrap();
