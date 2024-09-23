/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RechercheService } from "../recherche.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RechercheCreateInput } from "./RechercheCreateInput";
import { Recherche } from "./Recherche";
import { RechercheFindManyArgs } from "./RechercheFindManyArgs";
import { RechercheWhereUniqueInput } from "./RechercheWhereUniqueInput";
import { RechercheUpdateInput } from "./RechercheUpdateInput";
import { ItinRaireFindManyArgs } from "../../itinRaire/base/ItinRaireFindManyArgs";
import { ItinRaire } from "../../itinRaire/base/ItinRaire";
import { ItinRaireWhereUniqueInput } from "../../itinRaire/base/ItinRaireWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RechercheControllerBase {
  constructor(
    protected readonly service: RechercheService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Recherche })
  @nestAccessControl.UseRoles({
    resource: "Recherche",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRecherche(
    @common.Body() data: RechercheCreateInput
  ): Promise<Recherche> {
    return await this.service.createRecherche({
      data: data,
      select: {
        adresseId: true,
        createdAt: true,
        dateDeRecherche: true,
        id: true,
        termeDeRecherche: true,
        updatedAt: true,
        utilisateurId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Recherche] })
  @ApiNestedQuery(RechercheFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Recherche",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async recherches(@common.Req() request: Request): Promise<Recherche[]> {
    const args = plainToClass(RechercheFindManyArgs, request.query);
    return this.service.recherches({
      ...args,
      select: {
        adresseId: true,
        createdAt: true,
        dateDeRecherche: true,
        id: true,
        termeDeRecherche: true,
        updatedAt: true,
        utilisateurId: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Recherche })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Recherche",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async recherche(
    @common.Param() params: RechercheWhereUniqueInput
  ): Promise<Recherche | null> {
    const result = await this.service.recherche({
      where: params,
      select: {
        adresseId: true,
        createdAt: true,
        dateDeRecherche: true,
        id: true,
        termeDeRecherche: true,
        updatedAt: true,
        utilisateurId: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Recherche })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Recherche",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRecherche(
    @common.Param() params: RechercheWhereUniqueInput,
    @common.Body() data: RechercheUpdateInput
  ): Promise<Recherche | null> {
    try {
      return await this.service.updateRecherche({
        where: params,
        data: data,
        select: {
          adresseId: true,
          createdAt: true,
          dateDeRecherche: true,
          id: true,
          termeDeRecherche: true,
          updatedAt: true,
          utilisateurId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Recherche })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Recherche",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRecherche(
    @common.Param() params: RechercheWhereUniqueInput
  ): Promise<Recherche | null> {
    try {
      return await this.service.deleteRecherche({
        where: params,
        select: {
          adresseId: true,
          createdAt: true,
          dateDeRecherche: true,
          id: true,
          termeDeRecherche: true,
          updatedAt: true,
          utilisateurId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/itinRaires")
  @ApiNestedQuery(ItinRaireFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ItinRaire",
    action: "read",
    possession: "any",
  })
  async findItinRaires(
    @common.Req() request: Request,
    @common.Param() params: RechercheWhereUniqueInput
  ): Promise<ItinRaire[]> {
    const query = plainToClass(ItinRaireFindManyArgs, request.query);
    const results = await this.service.findItinRaires(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        pointsDeRepere: true,

        recherche: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/itinRaires")
  @nestAccessControl.UseRoles({
    resource: "Recherche",
    action: "update",
    possession: "any",
  })
  async connectItinRaires(
    @common.Param() params: RechercheWhereUniqueInput,
    @common.Body() body: ItinRaireWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itinRaires: {
        connect: body,
      },
    };
    await this.service.updateRecherche({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/itinRaires")
  @nestAccessControl.UseRoles({
    resource: "Recherche",
    action: "update",
    possession: "any",
  })
  async updateItinRaires(
    @common.Param() params: RechercheWhereUniqueInput,
    @common.Body() body: ItinRaireWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itinRaires: {
        set: body,
      },
    };
    await this.service.updateRecherche({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/itinRaires")
  @nestAccessControl.UseRoles({
    resource: "Recherche",
    action: "update",
    possession: "any",
  })
  async disconnectItinRaires(
    @common.Param() params: RechercheWhereUniqueInput,
    @common.Body() body: ItinRaireWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      itinRaires: {
        disconnect: body,
      },
    };
    await this.service.updateRecherche({
      where: params,
      data,
      select: { id: true },
    });
  }
}