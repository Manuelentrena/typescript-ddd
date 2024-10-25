import { Module } from '@nestjs/common';
import { CreateVideo } from './Application/CreateVideo';
import { SearchVideo } from './Application/SearchVideo';
import { MemoryVideoRepository } from './Infraestructure/MemoryVideoRepository';
import { VideoController } from './Infraestructure/VideoController';

@Module({
  controllers: [VideoController],
  providers: [
    CreateVideo,
    SearchVideo,
    {
      //Here is where I do the dependency injection, as Nestjs resolves de dependencies by name and can't infere by type
      provide: 'IVideoRepository',
      useClass: MemoryVideoRepository,
    },
  ],
})
export class VideosModule {}
