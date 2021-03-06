export interface UserData {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export enum AuthStatuses {
  notLoggedIn,
  loggedIn,
  loading,
}

export interface Login {
  uid: string | undefined;
  email: string | undefined;
  displayName: string | undefined;
  error?: string | null;
  authStatus: AuthStatuses;
}
