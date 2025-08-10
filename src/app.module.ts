import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';  // Örnek entity
import { UserModule } from './user/user.module'; // Örnek module

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',  // PostgreSQL kullanıyoruz
      url: 'postgresql://nestjs_db_4nle_user:jFji9OVvO5XJLQ8VwDHG0FoU4jPTt4S5@dpg-d2cbl8ur433s73ahur80-a/nestjs_db_4nle', // Bağlantı URL'sini burada kullanıyoruz
      ssl: {
        rejectUnauthorized: false,  // Render.com SSL bağlantısı gerektirdiği için bu satır eklenmeli
      },
      entities: [User],  // Kullanacağımız Entity'ler
      synchronize: true,  // Geliştirme ortamı için senkronizasyonu açıyoruz
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
