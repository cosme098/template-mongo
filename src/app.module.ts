import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Injector } from '@nestjs/core/injector/injector';
import { injectModel } from './utils/loadSchemas';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'productSchema',
      useFactory(conection) {
        return injectModel(conection, 'Products');
      },
      inject: ['database'],
    },
    // {
    //   provide: 'userSchemaDB',
    //   async useFactory(conection) {
    //     return injectModel(conection, 'Users');
    //   },
    //   inject: ['database'],
    // },
  ],
})
export class AppModule {}
