// useIsMobile.js
import { useState, useEffect } from 'react';

export const useIsMobile = () => {
  // Marca este componente para ejecución exclusiva en el cliente
  'use client';

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const maxWidth = 768; // Define el punto de ruptura para móviles
      setIsMobile(window.innerWidth <= maxWidth);
    };

    // Verifica el tamaño al montar
    checkIfMobile();

    // Añade un listener para cambios de tamaño
    window.addEventListener('resize', checkIfMobile);

    // Limpia el listener al desmontar
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile;
};
