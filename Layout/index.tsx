import GlobalStyle from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;
