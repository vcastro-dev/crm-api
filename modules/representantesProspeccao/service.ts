import { prismaConnection } from "../../scripts/prismaConection";
import { RepresentanteProspeccaoDto } from "./dtos/representantesProspeccao.dto";

const repository = prismaConnection.representanteProspeccao;

export async function getAll(filter: Partial<RepresentanteProspeccaoDto>) {
  return await repository.findMany({
    where: filter,
  });
}

export async function getById(id: string) {
  return await repository.findUnique({ where: { id } });
}

export async function create(data: any) {
  try {
    return repository.create({ data });
  } catch (error) {
    throw error;
  }
}

export async function update(id: string, data: any) {
  try {
    return repository.update({ where: { id }, data });
  } catch (error) {
    throw error;
  }
}

export async function remove(id: string) {
  try {
    return repository.delete({ where: { id } });
  } catch (error) {
    throw error;
  }
}