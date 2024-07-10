import YtShortsIcon from "@/app/assets/svg/YtShortsIcon";
import { SidebarItemProps } from "@/types";
import {
  Clapperboard,
  Gamepad,
  History,
  Home,
  LayoutGrid,
  Music2,
  Podcast,
  SquarePlay,
  SquarePlayIcon,
  SquareUserRound,
  Trophy,
} from "lucide-react";

export const sidebarData: SidebarItemProps[] = [
  {
    title: "Home",
    path: "/",
    query: "home",
    defaultIcon: <Home />,
    activeIcon: <Home />,
  },

  {
    title: "Shorts",
    path: "/shorts",
    query: "shorts",
    defaultIcon: <YtShortsIcon />,
    activeIcon: <YtShortsIcon />,
  },
  {
    sectionTitle: "Explore",
    nestedItems: [
      {
        title: "Trending",
        path: "/trending",
        query: "trending",
        defaultIcon: <LayoutGrid />,
        activeIcon: <LayoutGrid />,
      },
      {
        title: "Music",
        path: "/Music",
        query: "music",
        defaultIcon: <Music2 />,
        activeIcon: <Music2 />,
      },
      {
        title: "Movies",
        path: "/Movies",
        query: "movies",
        defaultIcon: <Clapperboard />,
        activeIcon: <Clapperboard />,
      },
      {
        title: "Gaming",
        path: "/Gaming",
        query: "gaming",
        defaultIcon: <Gamepad />,
        activeIcon: <Gamepad />,
      },
      {
        title: "Sports",
        path: "/Sports",
        query: "sports",
        defaultIcon: <Trophy />,
        activeIcon: <Trophy />,
      },
      {
        title: "Podcasts",
        path: "/Podcasts",
        query: "podcasts",
        defaultIcon: <Podcast />,
        activeIcon: <Podcast />,
      },
    ],
  },

  {
    sectionTitle: "Library",
    nestedItems: [
      {
        title: "History",
        path: "/history",
        query: "history",
        defaultIcon: <History />,
        activeIcon: <History />,
      },
      {
        title: "Your Videos",
        path: "/your-videos",

        defaultIcon: <SquarePlay />,
        activeIcon: <SquarePlayIcon />,
      },
    ],
  },
  {
    sectionTitle: "Account",
    nestedItems: [
      {
        title: "Your Channel",
        path: "/your-channel",
        defaultIcon: <SquareUserRound />,
        activeIcon: <SquareUserRound />,
      },
    ],
  },
];
