import { ROLES_KEY } from './constants';
import { Role } from './role.enum';
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
