import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdresseServiceBase } from "./base/adresse.service.base";

@Injectable()
export class AdresseService extends AdresseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
