export default defineNuxtRouteMiddleware(async (to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (!(await isAuthenticated()) && isPageRequiringAuthenticated(to.fullPath)) {
    return navigateTo("/login", { external: true, replace: true });
  }
});

function isPageRequiringAuthenticated(path: string) {
  return confidentialPages.includes(path);
}

const confidentialPages = ["/authenticated"];

async function isAuthenticated(): Promise<boolean> {
  await sleep(1000);
  return false;
}

function sleep(ms: number): Promise<void> {
  return new Promise((res) => setTimeout(res, ms));
}
