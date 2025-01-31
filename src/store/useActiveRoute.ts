import { create } from 'zustand';

interface ActiveRouteState {
  activeRoute: string;
  setActiveRoute: (route: string) => void;
}

const useActiveRoute = create<ActiveRouteState>(set => ({
  activeRoute: 'index',
  setActiveRoute: route => set({ activeRoute: route }),
}));

export default useActiveRoute;
