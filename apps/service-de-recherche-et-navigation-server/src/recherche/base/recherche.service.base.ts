/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Recherche as PrismaRecherche,
  ItinRaire as PrismaItinRaire,
} from "@prisma/client";

export class RechercheServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RechercheCountArgs, "select">
  ): Promise<number> {
    return this.prisma.recherche.count(args);
  }

  async recherches(
    args: Prisma.RechercheFindManyArgs
  ): Promise<PrismaRecherche[]> {
    return this.prisma.recherche.findMany(args);
  }
  async recherche(
    args: Prisma.RechercheFindUniqueArgs
  ): Promise<PrismaRecherche | null> {
    return this.prisma.recherche.findUnique(args);
  }
  async createRecherche(
    args: Prisma.RechercheCreateArgs
  ): Promise<PrismaRecherche> {
    return this.prisma.recherche.create(args);
  }
  async updateRecherche(
    args: Prisma.RechercheUpdateArgs
  ): Promise<PrismaRecherche> {
    return this.prisma.recherche.update(args);
  }
  async deleteRecherche(
    args: Prisma.RechercheDeleteArgs
  ): Promise<PrismaRecherche> {
    return this.prisma.recherche.delete(args);
  }

  async findItinRaires(
    parentId: string,
    args: Prisma.ItinRaireFindManyArgs
  ): Promise<PrismaItinRaire[]> {
    return this.prisma.recherche
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .itinRaires(args);
  }
}