"use client";

import { createContext, useState } from "react";

interface NavigationContextType {
  isMobileNavOpen: boolean; // indicates if the mobile navigation is open
  setIsMobileNavOpen: (open: boolean) => void; // function to update the nav state
  closeMobileNav: () => void; // function to close the mobile nav
}

export const NavigationContext = createContext<NavigationContextType>({
  isMobileNavOpen: false,
  setIsMobileNavOpen: () => {},
  closeMobileNav: () => {},
});

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const closeMobileNav = () => setIsMobileNavOpen(false);
  return (
    <NavigationContext
      value={{
        isMobileNavOpen,
        setIsMobileNavOpen,
        closeMobileNav,
      }}
    >
      {children}
    </NavigationContext>
  );
}
