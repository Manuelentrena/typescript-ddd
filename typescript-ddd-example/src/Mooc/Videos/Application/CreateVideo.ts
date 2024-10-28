import { Inject, Injectable } from '@nestjs/common';
import { IVideoRepository } from '../Domain/IVideoRepository';
import { Video } from '../Domain/Video';
import { VideoDuration } from '../Domain/VideoDuration';
import { VideoId } from '../Domain/VideoId';
import { VideoTitle } from '../Domain/VideoTitle';

@Injectable()
export class CreateVideo {
  constructor(@Inject('IVideoRepository') private repo: IVideoRepository) {}

  create(id: VideoId, title: VideoTitle, duration: VideoDuration) {
    const video = new Video({ id, title, duration });
    this.repo.createVideo(video);
  }
}
