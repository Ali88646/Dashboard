import DashboardLayout from "../../../Components/DashboardLayout";
import { Icon, Stack } from "@chakra-ui/react";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { IoMail } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import InfoCard from "../components/InfoCard";
const Support = () => {
  return (
    <DashboardLayout title={"Support"}>
      <Stack gap={6}>
        <SupportCard
          leftComponent={<ContactCard />}
          title={"Contact Us"}
          text={
            "Have a question or just to know mpre? feel free to reach out to us."
          }
          icon={IoMail}
        />
        <SupportCard
          leftComponent={
            <InfoCard 
              imgUrl={"/visual.svg"}
              tagText={"Chatbot"}
              tagBg={"#fff"}
              tagColor={"#5F00D9"}
              cardText={"Chat with us now..."}
            />
          }
          title={"Live Chat"}
          text={"Don’t have time to wait for the answer? Chat with us now."}
          icon={BiSolidMessageRounded}
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
