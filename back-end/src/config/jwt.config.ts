import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getTJwtConfig = async (
	configService: ConfigService,
): Promise<JwtModuleOptions> => ({
	secret: configService.get('JWT_SECRET'),
});
