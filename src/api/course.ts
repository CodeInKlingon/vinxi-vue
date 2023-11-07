import { Wait } from './utils';

export async function fetchCourseConfig(courseId: string) {
  console.log('load course data');
  await Wait();

  return {
    seasonId: courseId,
    name: 'Web App Course',
    config: {
      active: true,
    },
  };
}
