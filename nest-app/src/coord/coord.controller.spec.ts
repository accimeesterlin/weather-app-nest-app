import { Test, TestingModule } from '@nestjs/testing';
import { CoordController } from './coord.controller';

describe('CoordController', () => {
  let controller: CoordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoordController],
    }).compile();

    controller = module.get<CoordController>(CoordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
