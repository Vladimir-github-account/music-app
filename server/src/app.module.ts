import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { resolve } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: resolve(__dirname, 'static') }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:jfWNKLRtKCZCzTcM@cluster0.yo1znbb.mongodb.net/music-app?retryWrites=true&w=majority',
    ),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
