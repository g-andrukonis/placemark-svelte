export const load = async ({ cookies }) => {
  cookies.delete("event-user", { path: "/" });
};
