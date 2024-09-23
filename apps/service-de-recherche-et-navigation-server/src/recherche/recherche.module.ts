import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RechercheModuleBase } from "./base/recherche.module.base";
import { RechercheService } from "./recherche.service";
import { RechercheController } from "./recherche.controller";
import { RechercheResolver } from "./recherche.resolver";

@Module({
  imports: [RechercheModuleBase, forwardRef(() => AuthModule)],
  controllers: [RechercheController],
  providers: [RechercheService, RechercheResolver],
  exports: [RechercheService],
})
export class RechercheModule {}
