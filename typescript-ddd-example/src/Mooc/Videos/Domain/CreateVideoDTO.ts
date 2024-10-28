export class CreateVideoDTO {
  constructor(
    public id: number,
    public title: string,
    public duration: number,
  ) {}
}
