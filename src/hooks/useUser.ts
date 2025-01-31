import { useEffect } from 'react';

import useUserStore from '@/store/useUserStore';

const useUser = () => {
  const { user, setUser, clearUser } = useUserStore();

  // Example effect to simulate fetching user data
  useEffect(() => {
    const fetchUserData = async () => {
      // Simulate an API call
      const fetchedUser = { id: 1, name: 'John Doe' }; // Example user data
      setUser(fetchedUser);
    };

    fetchUserData();

    // Cleanup function to clear user data on unmount
    return () => {
      clearUser();
    };
  }, [setUser, clearUser]);

  const login = () => {
    setUser({ id: 1, name: 'John Doe' });
  };

  return { user, setUser, clearUser, login };
};

export default useUser;
