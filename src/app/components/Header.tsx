import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex p-8 bg-[#F9F8F8] text-[#466691]">
            <Link href={'/'}><Image className="mr-4" src={'/craiyon_123205_always_be_publishing.png'} alt="Publish Publish Publish Logo" height={50} width={50} /></Link>
            <h1 className="text-3xl font-bold"><Link href={'/'}>Publish Publish Publish</Link></h1>
        </div>
    )
}