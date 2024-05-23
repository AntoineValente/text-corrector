import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TextSubmissionSchema } from './schema/text-submission.schema';
import { FlaggedTokenSchema } from './schema/flagged-token.schema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      entities: [TextSubmissionSchema, FlaggedTokenSchema],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([TextSubmissionSchema, FlaggedTokenSchema]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
