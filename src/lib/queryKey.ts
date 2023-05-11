export const queryKey = {
  CURRENT_USER: ['me'],
  USER: (username: string) => ['user', username],
  USER_CONTENTS: (type: string, username: string) => ['user', username, type],
};
