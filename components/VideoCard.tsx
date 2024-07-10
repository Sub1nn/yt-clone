import React from "react";

interface VideoCardProps {
  video: {
    videoId: string;
    thumbnail: string;
    title: string;
    channelTitle: string;
  };
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <a
        href={`https://www.youtube.com/watch?v=${video.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-full" src={video.thumbnail} alt={video.title} />
      </a>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{video.title}</div>
        <p className="text-gray-700 text-base">{video.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
