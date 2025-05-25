import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import useSound from 'use-sound';

const EasterEgg: React.FC = () => {
  const [konami, setKonami] = useState<string[]>([]);
  const [playSuccess] = useSound('/sounds/success.mp3', { volume: 0.5 });

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newKonami = [...konami, event.key];
      if (newKonami.length > konamiCode.length) {
        newKonami.shift();
      }
      setKonami(newKonami);

      if (newKonami.join(',') === konamiCode.join(',')) {
        playSuccess();
        toast.success('Easter Egg: .gg/reloadtapub en statut', {
          duration: 5000,
        });
        setKonami([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konami, playSuccess]);

  return null;
};

export default EasterEgg;