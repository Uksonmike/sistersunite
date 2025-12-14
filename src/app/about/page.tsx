import InnerAbout from "@/components/inner-pages/about";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "About | Sisters Unite For Children (SUC)",
};
const index = () => {
   return (
      <Wrapper>
         <InnerAbout />
      </Wrapper>
   )
}

export default index