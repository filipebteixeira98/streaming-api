import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class Video {
  @Field()
  _id: string;

  @Field()
  description: string;

  @Field()
  name: string;
}

export default Video;
