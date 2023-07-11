import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:jfWNKLRtKCZCzTcM@cluster0.yo1znbb.mongodb.net/music-app?retryWrites=true&w=majority',
    ),
    TrackModule,
  ],
})
export class AppModule {}
