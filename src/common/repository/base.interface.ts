import { DeepPartial } from 'typeorm';

// https://github.com/OFUZORCHUKWUEMEKE/Nestjs-Abstract-pattern/tree/main/src/common

export interface IBaseRepository<T> {
  save(data: DeepPartial<T>): Promise<T>;
}
