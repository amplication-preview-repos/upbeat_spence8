import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RechercheService } from "./recherche.service";
import { RechercheControllerBase } from "./base/recherche.controller.base";

@swagger.ApiTags("recherches")
@common.Controller("recherches")
export class RechercheController extends RechercheControllerBase {
  constructor(
    protected readonly service: RechercheService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
