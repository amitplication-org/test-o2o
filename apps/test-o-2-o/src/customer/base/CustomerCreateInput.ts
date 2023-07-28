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
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";
import { EnumCustomerCustomerType } from "./EnumCustomerCustomerType";
import { SomeThingWhereUniqueInput } from "../../someThing/base/SomeThingWhereUniqueInput";

@InputType()
class CustomerCreateInput {
  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: () => AddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereUniqueInput)
  @IsOptional()
  @Field(() => AddressWhereUniqueInput, {
    nullable: true,
  })
  address?: AddressWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumCustomerCustomerType,
  })
  @IsEnum(EnumCustomerCustomerType)
  @IsOptional()
  @Field(() => EnumCustomerCustomerType, {
    nullable: true,
  })
  customerType?: "INDIVIDUAL" | "COMPANY" | null;

  @ApiProperty({
    required: false,
    type: () => SomeThingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SomeThingWhereUniqueInput)
  @IsOptional()
  @Field(() => SomeThingWhereUniqueInput, {
    nullable: true,
  })
  someThing?: SomeThingWhereUniqueInput | null;
}

export { CustomerCreateInput as CustomerCreateInput };
