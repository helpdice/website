export type SessionContextType = {
  authenticated: Boolean;
  info: {
    name: string;
    email: string;
    avatar: string;
    membership: string;
  };
};