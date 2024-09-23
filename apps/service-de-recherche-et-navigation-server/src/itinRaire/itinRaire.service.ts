import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItinRaireServiceBase } from "./base/itinRaire.service.base";

@Injectable()
export class ItinRaireService extends ItinRaireServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
