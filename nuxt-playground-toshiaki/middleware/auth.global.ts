export default defineNuxtRouteMiddleware(async (to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  if (
    !(await isAuthenticated(to.query.isLogin === "true")) &&
    isPageRequiringAuthenticated(to.fullPath)
  ) {
    return navigateTo("/login", { external: true, replace: true });
  }
});

function isPageRequiringAuthenticated(path: string) {
  return confidentialPages.includes(path);
}

const confidentialPages = ["/authenticated"];

async function isAuthenticated(isLogin: boolean): Promise<boolean> {
  await sleep(200);
  return isLogin;
}

function sleep(ms: number): Promise<void> {
  return new Promise((res) => setTimeout(res, ms));
}
