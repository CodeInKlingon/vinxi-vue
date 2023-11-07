'use server';

let store = { count: 0 };
export function sayHello() {
  console.log('Only on the server do we say Hello World');
  store.count++;
  return store.count;
}

export function getStore() {
  return store.count;
}
