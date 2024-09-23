/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ItinRaireWhereInput } from "./ItinRaireWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ItinRaireOrderByInput } from "./ItinRaireOrderByInput";

@ArgsType()
class ItinRaireFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ItinRaireWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ItinRaireWhereInput, { nullable: true })
  @Type(() => ItinRaireWhereInput)
  where?: ItinRaireWhereInput;

  @ApiProperty({
    required: false,
    type: [ItinRaireOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ItinRaireOrderByInput], { nullable: true })
  @Type(() => ItinRaireOrderByInput)
  orderBy?: Array<ItinRaireOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ItinRaireFindManyArgs as ItinRaireFindManyArgs };