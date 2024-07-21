'use client'
import { ReactNode } from 'react';
import { SessionProvider } from "next-auth/react";

// export default function Provider ({children}) {
//    return( 
//    <SessionProvider>
//       {children}
//    </SessionProvider>
//    )
// }

type ProviderProps = {
  children: ReactNode;
};

export default function Provider({ children }: ProviderProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}


// --use client : Ajouté en haut du fichier pour indiquer que ce composant est un composant client.
// --Type des children : Utilisation de ReactNode pour spécifier que children peut être n'importe quel élément React.
// --TypeScript : Ajout du type ProviderProps pour typer les props du composant.