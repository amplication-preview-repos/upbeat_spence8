import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ItinRaireService } from "./itinRaire.service";
import { ItinRaireControllerBase } from "./base/itinRaire.controller.base";

@swagger.ApiTags("itinRaires")
@common.Controller("itinRaires")
export class ItinRaireController extends ItinRaireControllerBase {
  constructor(
    protected readonly service: ItinRaireService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
