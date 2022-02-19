import { sleep } from '~/utils/sleep';

export interface DataType {
  description: string;
  subtitle: string;
  thumb: string;
  title: string;
};

export async function getData() {
  await sleep(500);
  return {
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    subtitle: 'By Blender Foundation',
    thumb:
      'https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    title: 'Big Buck Bunny',
  } as DataType;
}
