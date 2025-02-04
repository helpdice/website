"use client"

import React from 'react';
import { Auth } from '@helpdice/sdk';
import type { SessionContextType } from '@/types/auth';

export const AuthContext = React.createContext<SessionContextType | null>(null);

const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const authenticated = Auth.isAuthenticated();
  const info = Auth.getUserFromStrorage();
  return <AuthContext.Provider value={{ authenticated: authenticated, info: info }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;