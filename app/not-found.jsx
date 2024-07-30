import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function notFound(){
    return(
        <div className="flex flex-col items-center justify-center h-screen">
             <Image height={500} width={500} alt=" Page Not Found " src={'/notfound.png'} />
            <span> Essa página não existe</span>
           
            <Link href={'/bikeshared'} className='hover:underline text-lilas'>Home</Link>
        </div>
    );
}