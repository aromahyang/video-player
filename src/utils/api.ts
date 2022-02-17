export function getVideos() {
  return {
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    subtitle: 'By Blender Foundation',
    thumb:
      'https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    title: 'Big Buck Bunny',
  };
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export type VideoInfo = {
  url: string;
  title: string;
  opening: [number, number] | null;
  ending: [number, number] | null;
};

export async function getVideoInfo() {
  await sleep(500);
  const data = {
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'Big Buck Bunny',
    opening: [0, 30],
    ending: [490, 580],
  };
  return data;
}
