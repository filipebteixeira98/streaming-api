import { Query, Resolver } from 'type-graphql';

import Video from './Video';

import VideoSchema from '../../models/VideoSchema';

@Resolver(Video)
class VideoResolver {
  @Query(() => [Video])
  async videos() {
    const videos = await VideoSchema.find();

    return videos;
  }
}

export default VideoResolver;
