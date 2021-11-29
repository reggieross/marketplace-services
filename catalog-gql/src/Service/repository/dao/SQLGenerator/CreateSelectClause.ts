import {  TableConfig, Tables } from './config/TableConfig';

export const createSelect = async (
  table: keyof TableConfig,
  properties: string[]
) => {
  const tableProperties: Record<string, string> = Tables[`${table}`]['propertyMapping'];
  const validProperties = properties.reduce<string[]>((acc, property) => {
    const mapped_property = tableProperties[property];
    if (mapped_property) {
      acc.push(`${table}.${mapped_property}`);
    }

    return acc;
  }, []);
  return `Select ${validProperties.join(',')} from ${table}`;
};
