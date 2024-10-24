import Link from "next/link";

export default function Footer() {
  return (
      <footer className="bg-[#466691] text-[#F9F8F8] p-8">
        <ul>
            <li><a href="https://github.com/mattstrick/publishpublishpublish">Github</a></li>
            <li><Link href={'/terms-of-service'}>Terms of Service</Link></li>
        </ul>
      </footer>
  );
}
