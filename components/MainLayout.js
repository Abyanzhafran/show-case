import BaseNavbar from './BaseNavbar';
import BaseFooter from './BaseFooter';
// import { HtmlHTMLAttributes } from 'react';

const MainLayout = ({ children, ...props }) => {
  return (
    <div>
      <BaseNavbar />

      <main {...props}>{children}</main>

      <BaseFooter />
    </div>
  );
};

export default MainLayout;
