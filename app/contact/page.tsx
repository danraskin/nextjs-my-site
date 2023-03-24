'use client'
// this turns this into client component(?)

import Link from "next/link";
import { useRouter } from 'next/navigation';
// Link is an anchor tag
export default function Contact() {
    const router = useRouter();
    // router.refresh;
    // router.push;
    return (
        <div>
            <h1>contact</h1>
            <Link href="/">home</Link>
            {/* <Link href="blog/sjdafdsa>post</Link>" */}
            <button onClick={()=> router.push('/')}>home</button>
        </div>
        
    )
}