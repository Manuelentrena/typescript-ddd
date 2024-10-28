import { Injectable } from '@nestjs/common';
import { db } from 'config/database';
import { videos } from 'database/schemas';
import { sql } from 'drizzle-orm';
import { IVideoRepository } from '../Domain/IVideoRepository';
import { Video } from '../Domain/Video';
import { VideoId } from '../Domain/VideoId';

@Injectable()
export class DatabasePostgresRepository implements IVideoRepository {
  async createVideo(video: Video) {
    await db.insert(videos).values({
      title: video.title,
      duration: video.duration,
    });
  }

  async searchVideo(id: VideoId): Promise<Video> {
    const videoFound = await db
      .select()
      .from(videos)
      .where(sql`${videos.id} = ${id}`)
      .limit(1)
      .execute();

    if (videoFound.length === 0) {
      throw new Error(`Video with ID: ${id} not found`);
    }

    return new Video({
      id: videoFound[0].id,
      title: videoFound[0].title,
      duration: videoFound[0].duration,
    });
  }
}
