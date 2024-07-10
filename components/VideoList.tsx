import React from "react";
import VideoCard from "./VideoCard";

interface VideoAuthor {
  avatar: { height: number; url: string; width: number }[];
  badges: { text: string; type: string }[];
  canonicalBaseUrl: string;
  channelId: string;
  title: string;
}

interface Video {
  author: VideoAuthor;
  badges: string[];
  descriptionSnippet: string;
  isLiveNow: boolean;
  lengthSeconds: number;
  movingThumbnails: { height: number; url: string; width: number }[];
  publishedTimeText: string;
  stats: { views: number };
  thumbnails: { height: number; url: string; width: number }[];
  title: string;
  videoId: string;
}

interface VideoContent {
  type: string;
  video: Video;
}

const VideoList = ({ videos }: { videos: VideoContent[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((item, index) => {
        if (!item.video) {
          return null;
        }

        const { video } = item;
        const { videoId, thumbnails, title, author } = video;

        if (!videoId || !thumbnails?.length || !author?.title) {
          return null;
        }

        return (
          <VideoCard
            key={index}
            video={{
              videoId,
              thumbnail: thumbnails[0].url,
              title,
              channelTitle: author.title,
            }}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
