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
  Text,
  Box,
  Image,
} from "@chakra-ui/react";

const TradingTable = ({ data }) => {
  const [displayedRows, setDisplayedRows] = useState(5);
  // Define table columns
  const handleLoadMore = () => {
    setDisplayedRows(displayedRows + 5); // Increase the number of rows to display
  };

  return (
    <Box>
      <TableContainer border={"0px solid red"}>
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
                Symbol
              </Th>
              <Th textAlign={"center"} color={"white"}>
                Bid Price
              </Th>
              <Th textAlign={"center"} color={"white"}>
                Current Spread
              </Th>
              <Th textAlign={"center"} color={"white"}>
                Ask Price
              </Th>
              <Th textAlign={"center"} color={"white"}>
                Date/Time
              </Th>
              <Th textAlign={"center"} color={"white"}>
                Leverage{" "}
              </Th>
            </Tr>
          </Thead>
          <Tbody textAlign={"center"}>
            {data.slice(0, displayedRows).map((el) => (
              <Tr textAlign={"center"}>
                <Td textAlign={"center"}>
                  <Text overflow={"hidden"} textOverflow="ellipsis">
                    {el.symbol}
                  </Text>
                </Td>
                <Td textAlign={"center"}>{el.bidPrice}</Td>
                <Td textAlign={"center"}>₹ {el.currentSpread}</Td>
                <Td textAlign={"center"}>{el.askPrice}</Td>
                <Td textAlign={"center"}>{el.dateTime}</Td>
                <Td textAlign={"center"}>{el.leverage}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Button
        onClick={handleLoadMore}
        mt={4}
        mx="auto"
        display="block"
        colorScheme="orange"
      >
        Load More...
      </Button>
    </Box>
  );
};

export default TradingTable ;

// method:
//       "https://octacdn.net/assets/pic/banks-svg/local-banks.svg?fd46756e07e29f4973538ab92e8058c6eec2c5ad",
//     name: "India Case",
//     min: "500000.00 INR",
//     commission: "Free",
//     rate: "Available",
//     time: "1-3 Hours",
//     status: "Make A Deposit",
//   },
