import { Inject, Injectable } from '@nestjs/common';
import { IVideoRepository } from '../Domain/IVideoRepository';
import { Video } from '../Domain/Video';
import { VideoId } from '../Domain/VideoId';

@Injectable()
export class SearchVideo {
  constructor(@Inject('IVideoRepository') private repo: IVideoRepository) {}

  async search(id: VideoId): Promise<Video> {
    return this.repo.searchVideo(id);
  }
}
