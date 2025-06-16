import {
  Arg,
  Field,
  FieldResolver,
  InputType,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql';

import Video from './Video';

import VideoSchema from '../../models/VideoSchema';
import CategorySchema from '../../models/CategorySchema';

import Category from '../category/Category';

@InputType()
class VideoInput {
  @Field()
  description: string;

  @Field()
  name: string;

  @Field()
  category: string;
}
@Resolver(Video)
class VideoResolver {
  @Query(() => [Video])
  async videos() {
    const videos = await VideoSchema.find();

    return videos;
  }

  @Mutation(() => Video)
  async createVideo(@Arg('videoInput') videoInput: VideoInput) {
    const video = await VideoSchema.create(videoInput);

    return video;
  }

  @FieldResolver(() => Category)
  async category(@Root() video: any) {
    return await CategorySchema.findById(video.category);
  }
}

export default VideoResolver;
