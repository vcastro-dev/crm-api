import { prismaConnection } from "../../scripts/prismaConection";
import {
  OportunidadeCreate,
  OportunidadeUpdate,
} from "./dtos/oportunidade.dto";

const repository = prismaConnection.oportunidade;

export async function getAll(clienteId: string) {
  return repository.findMany({
    where: {
      clienteId: clienteId,
    },
  });
}

export async function getById(id: string) {
  return repository.findUnique({ where: { id } });
}

export async function create(clienteId: string, data: OportunidadeCreate) {
  try {
    const validated = OportunidadeCreate.parse({
      ...data,
      clienteId,
    });
    return repository.create({
      data: validated,
    });
  } catch (error) {
    throw error;
  }
}

export async function update(
  id: string,
  clienteId: string,
  data: OportunidadeUpdate
) {
  try {
    const validated = OportunidadeUpdate.parse({
      ...data,
      clienteId,
    });
    return repository.update({ where: { id }, data: validated });
  } catch (error) {
    throw error;
  }
}

export async function remove(id: string) {
  return repository.delete({ where: { id } });
}
