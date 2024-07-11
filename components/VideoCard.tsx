import React from "react";
import "../app/globals.css";

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
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col card-background"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <a
        href={`https://www.youtube.com/watch?v=${video.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-full" src={video.thumbnail} alt={video.title} />
      </a>
      <div className="px-6 py-4 flex flex-col flex-grow justify-between">
        <div>
          <div className="font-bold text-xl mb-2">
            {video.title.length > 50
              ? video.title.substring(0, 30) + "..."
              : video.title}
          </div>
        </div>
        <p className="text-gray-700 text-base ">{video.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
