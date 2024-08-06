import { Toaster } from 'react-hot-toast';

import { ReactNode } from "react";
import NavBar from "../components/NavBar";
type Props = {
  children: ReactNode
}
export default function BikeSharedLayout({ children }: Props) {
  return (
    <main className='w-screen min-h-screen bg-[#CECECE] container'>
      <NavBar />
      <div className="">

        {children}
      </div>
      <Toaster position="top-center" />
    </main>

  );
}
