import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateVideo } from '../Application/CreateVideo';
import { SearchVideo } from '../Application/SearchVideo';
import { CreateVideoDTO } from '../Domain/CreateVideoDTO';

@Controller()
export class VideoController {
  constructor(
    private readonly createServ: CreateVideo,
    private readonly searchServ: SearchVideo,
  ) {}

  @Get(':id')
  async getVideo(@Param('id') id: number) {
    return await this.searchServ.search(id);
  }

  @Post()
  create(@Body() createVideoDto: CreateVideoDTO): void {
    this.createServ.create(
      createVideoDto.id,
      createVideoDto.title,
      createVideoDto.duration,
    );
  }
}
