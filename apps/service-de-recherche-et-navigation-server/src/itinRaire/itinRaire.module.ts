import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ItinRaireModuleBase } from "./base/itinRaire.module.base";
import { ItinRaireService } from "./itinRaire.service";
import { ItinRaireController } from "./itinRaire.controller";
import { ItinRaireResolver } from "./itinRaire.resolver";

@Module({
  imports: [ItinRaireModuleBase, forwardRef(() => AuthModule)],
  controllers: [ItinRaireController],
  providers: [ItinRaireService, ItinRaireResolver],
  exports: [ItinRaireService],
})
export class ItinRaireModule {}
