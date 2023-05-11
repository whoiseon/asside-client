import { client } from '@/lib/client';
import {
  Project,
  StudyGroup,
  Team,
  UserProfileParams,
  UserProfileResult,
} from '@/lib/apis/types';

export async function getUserProfile(username: string) {
  const response = await client.get<UserProfileResult>(
    `/api/user?username=${username}`,
  );

  return response.data;
}

export async function updateUserProfile(params: UserProfileParams) {
  const { username, description } = params;
  const response = await client.patch('/api/user/profile', {
    username,
    description,
  });

  return response.data;
}

export async function getUserContents(type: string, username: string) {
  switch (type) {
    case 'projects': {
      const response = await client.get<Project[]>(
        `/api/user/projects?username=${username}`,
      );

      return response.data;
    }
    case 'teams': {
      const response = await client.get<Team[]>(
        `/api/user/teams?username=${username}`,
      );

      return response.data;
    }
    case 'studyGroups': {
      const response = await client.get<StudyGroup[]>(
        `/api/user/studygroups?username=${username}`,
      );

      return response.data;
    }
    default: {
      const response = await client.get<Project[]>(
        `/api/user/projects?username=${username}`,
      );

      return response.data;
    }
  }
}
