import NavBar from "./navbar";

import '../../theme/fonts/fonts.css';


const CustomRootLayout = ({children}) => {
  return ( 
    <div className="w-full open-sans">
      <NavBar/>
      <div>{children}</div>
    </div>
  );
}
 
export default CustomRootLayout;