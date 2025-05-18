import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  // TODO: add real authentication logic
  return { user, login: () => setUser({ id: '1' }), logout: () => setUser(null) };
}
