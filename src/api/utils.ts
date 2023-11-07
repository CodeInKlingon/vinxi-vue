export async function Wait(ms: number = 1000) {
  const p = new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
  return p;
}
