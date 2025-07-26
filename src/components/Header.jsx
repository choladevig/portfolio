import { FaGithub, FaLinkedin } from 'react-icons/fa';
export default function Header() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="fixed w-full bg-secondary bg-opacity-90 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">Choladevi Gheereddy</div>
        <nav className="space-x-6">
          {links.map(link => (
            <a key={link.href} href={link.href} className="hover:text-accent transition">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex space-x-4">
          <a href="https://github.com/choladevig" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/choladevi-gheereddy" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </header>
  );
}