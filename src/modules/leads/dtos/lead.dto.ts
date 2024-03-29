import { z } from "zod";
import { mobilePhoneSchema } from "@/zod/mobilePhoneSchema";

export const LeadDto = z.object({
  id: z.string().uuid(),
  clienteId: z.string().uuid(),
  nomeRepresentante: z.string(),
  telefoneRepresentante: mobilePhoneSchema,
  emailRepresentante: z.string().email(),
  observacao: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const LeadDtoCreate = LeadDto.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const LeadDtoUpdate = LeadDto.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type Lead = z.infer<typeof LeadDto>;
export type LeadCreate = z.infer<typeof LeadDtoCreate>;
export type LeadUpdate = z.infer<typeof LeadDtoUpdate>;
