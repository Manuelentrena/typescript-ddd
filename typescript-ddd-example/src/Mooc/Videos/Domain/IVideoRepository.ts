import { Video } from './Video';
import { VideoId } from './VideoId';

export interface IVideoRepository {
  createVideo(video: Video): Promise<void>;
  searchVideo(id: VideoId): Promise<Video>;
}
