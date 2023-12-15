import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationExceptionFilter } from './validation-exception.filter';
import helmet from 'helmet';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });
    app.use(helmet());
    app.useGlobalFilters(new ValidationExceptionFilter());
    await app.listen(3000);
}
bootstrap();
