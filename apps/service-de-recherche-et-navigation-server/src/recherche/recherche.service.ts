import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RechercheServiceBase } from "./base/recherche.service.base";

@Injectable()
export class RechercheService extends RechercheServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
