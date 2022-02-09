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
