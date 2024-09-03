import { FirstFooter } from './firstFooter/firstFooter';
import { SecondFooter } from './secondFooter/secondFooter';
import { ThirdFooter } from './thirdFooter/thirdFooter';
import { FourthFooter } from './fourthFooter/fourthFooter';
import "./footer.css";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <FirstFooter />
      <SecondFooter />
      <ThirdFooter />
      <FourthFooter />
    </div>
  );
};

export default Footer;

