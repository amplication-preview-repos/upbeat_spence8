import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdresseService } from "./adresse.service";
import { AdresseControllerBase } from "./base/adresse.controller.base";

@swagger.ApiTags("adresses")
@common.Controller("adresses")
export class AdresseController extends AdresseControllerBase {
  constructor(
    protected readonly service: AdresseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
