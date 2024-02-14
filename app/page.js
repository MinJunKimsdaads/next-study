import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Page(){
    return (
        <div>
            <h1>Hello, Next.js!</h1>
            <Link href='/link/dashboard'>dashboard</Link>
        </div>
    )
}