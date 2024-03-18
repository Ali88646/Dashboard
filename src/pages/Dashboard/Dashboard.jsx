import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import Portfolio from "./components/Portfolio";
import Price from "./components/Price";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridAutoColumns={{ md: "repeat(2, 1fr)", base: "repeat(1,1fr)" }}
        gap={6}
      >
        <GridItem colSpan="2">
          <Portfolio />
        </GridItem>
        <GridItem colSpan="1">
          <Price />
        </GridItem>
        <GridItem colSpan="1">
          <Transactions />
        </GridItem>
        <GridItem colSpan="1">
          <InfoCard
            imgUrl={"/visual.svg"}
            tagText={"Loans"}
            tagBg={"#5F00D9"}
            tagColor={"#fff"}
            cardText={
              "Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            }
          />
        </GridItem>
        <GridItem colSpan="1">
          <InfoCard
            imgUrl={"/visual2.svg"}
            tagText={"Contacts"}
            tagBg={"#fff"}
            tagColor={"#000"}
            customBg={"#5f00d9"}
            cardText={
              "Learn more about our real estate, mortgage, and  corporate account services"
            }
            textColor={"#fff"}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
