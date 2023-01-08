import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class Category {
  @Field()
  _id: string;

  @Field()
  description: string;

  @Field()
  name: string;
}

export default Category;
