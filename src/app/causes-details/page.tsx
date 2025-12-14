import CauseDetails from "@/components/causes/causes-details";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Our Project Details",
};
const index = () => {
   return (
      <Wrapper>
         <CauseDetails />
      </Wrapper>
   )
}

export default index