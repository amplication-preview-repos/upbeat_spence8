import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ItinRaireResolverBase } from "./base/itinRaire.resolver.base";
import { ItinRaire } from "./base/ItinRaire";
import { ItinRaireService } from "./itinRaire.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItinRaire)
export class ItinRaireResolver extends ItinRaireResolverBase {
  constructor(
    protected readonly service: ItinRaireService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
