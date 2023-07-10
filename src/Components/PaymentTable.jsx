import { useState } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Box,
  Image,
  Flex,
  Text,
  Tooltip,
} from "@chakra-ui/react";

const PaymentTable = ({ data }) => {
  return (
    <Box border={"0px solid"}>
      <TableContainer
        p={10}
        shadow={"2xl"}
        border={"0px solid red"}
        borderRadius={20}
      >
        <Table size="sm">
          <Thead
            color={"white"}
            bgColor={"black"}
            h={"12"}
            textAlign={"center"}
            border={"0px solid red"}
          >
            <Tr textAlign={"center"} borderRadius={20} border={"1px solid red"}>
              <Th textAlign={"center"} color={"white"}>
                PAYMENT METHOD
              </Th>
              <Th textAlign={"center"} color={"white"}>
                MINIMUM AMOUNT
              </Th>
              <Th textAlign={"center"} color={"white"}>
                COMMISSION
              </Th>
              <Th textAlign={"center"} color={"white"}>
                FIXED RATE
              </Th>
              <Th textAlign={"center"} color={"white"}>
                EXECUTION TIME
              </Th>
              <Th textAlign={"center"} color={"white"}></Th>
            </Tr>
          </Thead>
          <Tbody textAlign={"center"}>
            {data.slice().map((el) => (
              <Tr alignItem={"center"}>
                <Td>
                  <Flex alignItems={"center"} justify={"center"}>
                    <Tooltip label={el.name}>
                      <Image w={12} src={el.method} alt={el.name} />
                    </Tooltip>
                  </Flex>
                </Td>
                <Td textAlign={"center"}>{el.min}</Td>
                <Td textAlign={"center"}>{el.commission}</Td>
                <Td textAlign={"center"}>{el.rate}</Td>
                <Td textAlign={"center"}>{el.time}</Td>
                <Td textAlign={"center"}>
                  <Button variant={"outline"} size={"xs"} colorScheme="green">
                    {el.status}
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default PaymentTable;
