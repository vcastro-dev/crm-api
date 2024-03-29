import { Router } from "express";
import { clientesRouter } from "./clientes/controller";
import { contratosRouter } from "./contratos/controller";
import { clientesRepresentantesRouter } from "./clientesRepresentantes/controller";
import { leadsRouter } from "./leads/controller";
import { oportunidadesRouter } from "./oportunidades/controller";
import { filiaisRouter } from "./filiais/controller";

export const router = Router();

router.use("/clientes", clientesRouter);
router.use("/contratos", contratosRouter);
router.use("/representantes", clientesRepresentantesRouter);
router.use("/leads", leadsRouter);
router.use("/oportunidades", oportunidadesRouter);
router.use("/filiais", filiaisRouter);
