export const queryKey = {
  CURRENT_USER: 'me',
  USER: (userId: number) => ['user', userId],
};
