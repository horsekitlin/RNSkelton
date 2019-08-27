function mockFetch() {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}
export default async function initialPromise(setIsInitialApp) {
  try {
    await mockFetch();
    setIsInitialApp(true);
  }catch(error) {
    throw error;
  }
}