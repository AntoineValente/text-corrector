import { DeepPartial, Repository } from 'typeorm';
import { IBaseRepository } from './base.interface';

interface HasId {
  id: number;
}

export abstract class BaseAbstractRepostitory<T extends HasId>
  implements IBaseRepository<T>
{
  private entity: Repository<T>;
  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  public save(data: DeepPartial<T>) {
    return this.entity.save(data);
  }
}
