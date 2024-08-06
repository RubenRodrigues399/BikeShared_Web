import NavBar from "../components/NavBar";

export default function BikeSharedLayout({children}) {
    return (
      <main className='w-screen h-screen bg-[#CECECE]'>
           <NavBar />
           {children}
      </main>
       
    );
  }
  