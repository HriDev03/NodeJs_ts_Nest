import { SetMetadata } from "@nestjs/common";
//work of set metadata is used to inject multiple values inside our decorators
export const ROLES_KEY='roles';
export const Roles=(...roles:string[])=>SetMetadata(ROLES_KEY,roles)