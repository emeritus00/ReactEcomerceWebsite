const Footer = () => {
  const date = new Date();

  return (
    <footer className="footer">copyright &copy; {date.getFullYear()}</footer>
  );
};

export default Footer;
