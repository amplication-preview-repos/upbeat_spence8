/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ItinRaireWhereInput } from "./ItinRaireWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ItinRaireListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ItinRaireWhereInput,
  })
  @ValidateNested()
  @Type(() => ItinRaireWhereInput)
  @IsOptional()
  @Field(() => ItinRaireWhereInput, {
    nullable: true,
  })
  every?: ItinRaireWhereInput;

  @ApiProperty({
    required: false,
    type: () => ItinRaireWhereInput,
  })
  @ValidateNested()
  @Type(() => ItinRaireWhereInput)
  @IsOptional()
  @Field(() => ItinRaireWhereInput, {
    nullable: true,
  })
  some?: ItinRaireWhereInput;

  @ApiProperty({
    required: false,
    type: () => ItinRaireWhereInput,
  })
  @ValidateNested()
  @Type(() => ItinRaireWhereInput)
  @IsOptional()
  @Field(() => ItinRaireWhereInput, {
    nullable: true,
  })
  none?: ItinRaireWhereInput;
}
export { ItinRaireListRelationFilter as ItinRaireListRelationFilter };