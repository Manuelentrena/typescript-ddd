import { VideoDuration } from './VideoDuration';
import { VideoId } from './VideoId';
import { VideoTitle } from './VideoTitle';

export class Video {
  title: VideoTitle;
  duration: VideoDuration;
  id: VideoId;

  constructor({
    id,
    title,
    duration,
  }: {
    id: VideoId;
    title: VideoTitle;
    duration: VideoDuration;
  }) {
    this.title = title;
    this.duration = duration;
    this.id = id;
  }
}
