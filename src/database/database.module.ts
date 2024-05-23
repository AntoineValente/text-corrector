import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TextSubmissionSchema } from './schema/text-submission.schema';
import { FlaggedTokenSchema } from './schema/flagged-token.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: configService.get<DataSourceOptions['type']>('DB_TYPE'),
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        entities: [TextSubmissionSchema, FlaggedTokenSchema],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([TextSubmissionSchema, FlaggedTokenSchema]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
