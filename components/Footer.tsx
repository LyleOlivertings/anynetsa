const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-gray-800">
      <div className="container mx-auto py-6 px-4 text-center text-text-secondary">
        <p>&copy; {currentYear} AnyNet SA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;