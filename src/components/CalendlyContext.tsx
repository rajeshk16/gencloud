'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import CalendlyPopup from './CalendlyPopup';

interface CalendlyContextType {
  openCalendly: () => void;
  closeCalendly: () => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendly = () => setIsOpen(true);
  const closeCalendly = () => setIsOpen(false);

  return (
    <CalendlyContext.Provider value={{ openCalendly, closeCalendly }}>
      {children}
      <CalendlyPopup isOpen={isOpen} onClose={closeCalendly} />
    </CalendlyContext.Provider>
  );
}

export function useCalendly() {
  const context = useContext(CalendlyContext);
  if (context === undefined) {
    throw new Error('useCalendly must be used within a CalendlyProvider');
  }
  return context;
}
