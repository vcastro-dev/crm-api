import { prismaConnection } from "../../scripts/prismaConection";
import {
  ClienteProspeccaoCreateDto,
  ClienteProspeccaoUpdateDto,
} from "./dtos/clienteProspeccao.dto";

const repository = prismaConnection.clienteProspeccao;

export async function getAll() {
  return repository.findMany();
}

export async function getById(id: string) {
  return repository.findUnique({ where: { id } });
}

export async function create(data: ClienteProspeccaoCreateDto) {
  try {
    return repository.create({ data });
  } catch (error) {
    throw error;
  }
}

export async function update(id: string, data: ClienteProspeccaoUpdateDto) {
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