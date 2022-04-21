import { Field, ObjectType } from '@nestjs/graphql';
import { Student } from './student';

@ObjectType()
export class Course {
  @Field()
  id: string;
@Field()
title:string

@Field()
slug:string;
}
