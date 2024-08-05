
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import Image from "next/image";
import { LoginForm } from "./login-form";
export default function Login() {
    return (
        <div className='w-screen h-screen'>
           <Header/>
                <div className='w-full h-full flex items-center justify-center gap-10 bg-[#CECECE]'>
                    <div className='h-full flex items-center justify-center'>
                        <Image src={"/bike1.png"} width={500} height={200} alt="BikeShared logo" />
                    </div>
                   <LoginForm/>
                </div>            
           <Footer/>
        </div>
    );
}