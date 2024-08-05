import Image from "next/image";

export function Header() {
    return (
        <header className="bg-gray-50 border-b-2 border-lilas w-full flex py-2 px-4">
            <span className="text-lilas font-bold text-xl">BikeShared&nbsp;</span>
            <Image src={"/bike1.png"} width={50} height={50} alt="BikeShared logo" />
        </header>
    )
}