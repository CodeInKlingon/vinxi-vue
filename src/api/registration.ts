import { Wait } from './utils';

export async function fetchRegistration(
  courseId: string,
  registrationId: string
) {
  console.log('load registrations');
  await Wait();

  return {
    courseId: courseId,
    registrationId: registrationId,
    modules: [{ name: 'Meta-Frameworks 101' }, { name: 'Meta-Frameworks 102' }],
    items: [{ name: 'item 1' }, { name: 'item 2' }],
  };
}
