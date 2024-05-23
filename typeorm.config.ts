import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  synchronize: true,
  entities: ['dist/**/*.schema{ .ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}', './migrations/*{.ts,.js}'],
});
