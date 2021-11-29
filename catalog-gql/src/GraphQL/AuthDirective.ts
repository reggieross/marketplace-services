// import { SchemaDirectiveVisitor } from 'apollo-server';
// import { defaultFieldResolver } from 'graphql';
// import { AuthorizationClient } from '../client/AuthorizationClient';
//
// export class AuthDirective extends SchemaDirectiveVisitor {
//   visitObject(type) {
//     this.ensureFieldsWrapped(type);
//     type._requiredAuthRole = this.args.requires;
//   }
//   // Visitor methods for nested types like fields and arguments
//   // also receive a details object that provides information about
//   // the parent and grandparent types.
//   visitFieldDefinition(field, details) {
//     this.ensureFieldsWrapped(details.objectType);
//     field._requiredAuthRole = this.args.requires;
//   }
//
//   ensureFieldsWrapped(objectType) {
//     // Mark the GraphQLObjectType object to avoid re-wrapping:
//     if (objectType._authFieldsWrapped) {
//       return;
//     }
//
//     objectType._authFieldsWrapped = true;
//
//     const fields = objectType.getFields();
//     Object.keys(fields).forEach(fieldName => {
//       const field = fields[fieldName];
//       const { resolve = defaultFieldResolver } = field;
//       // Wrap the field resolver in our custom logic to check for authorization before we resolve
//       field.resolve = async function(...args) {
//         // Get the required Role from the field first, falling back
//         // to the objectType if no Role is required by the field:
//         const requiredRole =
//           field._requiredAuthRole || objectType._requiredAuthRole;
//
//         if (!requiredRole) {
//           return resolve.apply(this, args);
//         }
//
//         // The second argument in the resolver function is always the context;
//         const context = args[2];
//         const validForRoles = await AuthorizationClient.isValidForRoles(
//           context.token,
//           [requiredRole]
//         );
//         if (!validForRoles) {
//           throw new Error('not authorized');
//         }
//
//         return resolve.apply(this, args);
//       };
//     });
//   }
// }
