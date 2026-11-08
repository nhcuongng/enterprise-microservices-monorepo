export interface UserProfileDto {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  isActive: boolean;
}