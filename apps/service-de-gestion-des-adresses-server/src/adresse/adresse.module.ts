import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdresseModuleBase } from "./base/adresse.module.base";
import { AdresseService } from "./adresse.service";
import { AdresseController } from "./adresse.controller";
import { AdresseResolver } from "./adresse.resolver";

@Module({
  imports: [AdresseModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdresseController],
  providers: [AdresseService, AdresseResolver],
  exports: [AdresseService],
})
export class AdresseModule {}
