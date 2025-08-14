type FooterStyles = {
  padding: string;
  textAlign: 'center';
  position: 'fixed';
  bottom: number;
  width: string;
  backgroundColor: string;
  borderTop: string;
}

const footerStyles: FooterStyles = {
  padding: '1rem',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: '#fff',
  borderTop: '1px solid #eaeaea'
}

const Footer = () => (
  <footer style={footerStyles}>
    © {new Date().getFullYear()} Powered By ADIBUS Platform
  </footer>
)

export default Footer
