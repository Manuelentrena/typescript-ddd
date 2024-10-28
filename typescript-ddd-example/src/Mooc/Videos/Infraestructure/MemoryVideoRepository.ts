import { Injectable } from '@nestjs/common';
import { IVideoRepository } from '../Domain/IVideoRepository';
import { Video } from '../Domain/Video';
import { VideoId } from '../Domain/VideoId';

@Injectable()
export class MemoryVideoRepository implements IVideoRepository {
  private memory: Video[];

  constructor() {
    this.memory = [];
  }

  createVideo(video: Video): Promise<void> {
    return new Promise((resolve) => {
      this.memory.push(video);
      resolve();
    });
  }

  searchVideo(videoId: VideoId): Promise<Video> {
    return new Promise((resolve, reject) => {
      const videoFound = this.memory.find((v) => v.id === videoId);
      if (!videoFound) {
        reject(new Error(`Video with ID: ${videoId} not found`));
      } else {
        resolve(videoFound);
      }
    });
  }
}
