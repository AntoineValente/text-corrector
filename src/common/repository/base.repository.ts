import { DeepPartial } from '../types/deep-partial';
import { IBaseRepository } from './base.interface';

interface HasId {
  id: number | string;
}

export abstract class BaseAbstractRepository<T extends HasId>
  implements IBaseRepository<T>
{
  private entity: IBaseRepository<T>;
  protected constructor(entity: IBaseRepository<T>) {
    this.entity = entity;
  }

  public save(data: DeepPartial<T>) {
    return this.entity.save(data);
  }

  public findOneBy(options: DeepPartial<T>) {
    return this.entity.findOneBy(options);
  }
}
