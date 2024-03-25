import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
  Text,
  Tag,
} from "@chakra-ui/react";
import { data } from "autoprefixer";
const tableHeaders = ["ID", "Date & Time", "Type", "Amount", "Status"];
const statusColor = {
  Pending: "gray",
  Processing: "orange",
  Cancelled: "red",
  Completed: "green",
};
const TransactionTable = ({ tableData }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {tableHeaders.map((item) => {
              return (
                <Th textTransform={"capitalize"} color={"#999"}>
                  {item}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((item) => {
            return (
              <Tr>
                <Td fontWeight={"semibold"}>{item.id}</Td>
                <Td>
                  <Stack>
                    <Text fontWeight={"semibold"}>{item.date}</Text>
                    <Text fontSize={"12px"} color={"#999"}>
                      {item.time}
                    </Text>
                  </Stack>
                </Td>
                <Td>
                  <Stack>
                    <Text fontWeight={"semibold"}>{item.type}</Text>
                    <Text fontSize={"12px"} color={"#999"}>
                      {item.transactionType}
                    </Text>
                  </Stack>
                </Td>
                <Td fontWeight={"semibold"}>{item.amount}</Td>
                <Td fontWeight={"semibold"}>
                  <Tag
                    bg={statusColor[item.status]}
                    color={"#fff"}
                    rounded={"full"}
                  >
                    {item.status}
                  </Tag>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
