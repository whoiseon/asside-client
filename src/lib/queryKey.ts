export const queryKey = {
  CURRENT_USER: 'me',
  USER: (username: string) => ['user', username],
};
