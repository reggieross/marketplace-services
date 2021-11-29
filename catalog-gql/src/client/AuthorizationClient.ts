import { Role } from '../GraphQL/generated/resolvers';
import { intersection } from 'lodash';

const isValidForRoles = (token: string, requiredRoles: Role[]): boolean => {
  const userRoles = decodeToken(token).roles;
  return requiredRoles.length === 0
    ? true
    : intersection(userRoles, requiredRoles).length !== 0;
};

const decodeToken = (token: string): { roles: Role[] } => {
  //TODO decode token
  return { roles: [] };
};

export const AuthorizationClient = { isValidForRoles };
