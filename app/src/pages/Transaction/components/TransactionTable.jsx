import { Stack, Table, TableCaption, TableContainer, Tag, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const TransactionTable = () => {
    const tableData = [
        {
            id: 'HD82NA2H',
            date: '2025-01-04',
            time: "05:00 PM",
            type: {
                name: "INR Deposite",
                tag: "E-Transfer",
            },
            amount: "+ $81,123",
            status: "pending",
        },
        {
            id: 'HD82NA2H',
            date: '2025-01-09',
            time: "02:40 PM",
            type: {
                name: "INR Withdraw",
                tag: "Wire Transfer",
            },
            amount: "- $81,123",
            status: "processing",
        },
        {
            id: 'HD82NA2H',
            date: '2025-01-11',
            time: "09:21 AM",
            type: {
                name: "Buy",
                tag: "BTC",
            },
            amount: "- $12.48513391 BTC",
            status: "cancelled",
        },
        {
            id: 'HD82NA2H',
            date: '2025-01-04',
            time: "05:00 PM",
            type: {
                name: "Sell",
                tag: "BTC",
            },
            amount: "-4.0573929 BTC",
            status: "completed",
        },
        {
            id: 'HD82NA2H',
            date: '2025-01-09',
            time: "02:40 PM",
            type: {
                name: "BTC Deposite",
            },
            amount: "+ 15.5000000",
            status: "pending",
        },
        {
            id: 'HD82NA2H',
            date: '2025-01-11',
            time: "09:21 AM",
            type: {
                name: "BTC Withdraw",
            },
            amount: "- 5.05555544",
            status: "completed",
        },
    ]

    const statusColor = {
        pending: "#797E82",
        processing: "#F5A50B",
        completed: "#059669",
        cancelled: "#DC2626",

    }

    return (
        <TableContainer>
            <Table variant='simple' colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Date & Time</Th>
                        <Th>Type</Th>
                        <Th>Amount</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody color="p.black">
                    {
                        tableData.map((data) => (
                            <Tr key={data.id}>
                                <Td fontSize="sm" fontWeight="medium">{data.id}</Td>
                                <Td>
                                    <Stack spacing={0}>
                                        <Text fontSize="sm" fontWeight="medium">{data.date}</Text>
                                        <Text fontSize="xs" color="black.60">{data.time}</Text>
                                    </Stack>
                                </Td>
                                <Td>
                                    <Stack spacing={0}>
                                        <Text fontSize="sm" fontWeight="medium">{data.type.name}</Text>
                                        <Text fontSize="xs" color="black.60">{data.type?.tag}</Text>
                                    </Stack>
                                </Td>
                                <Td fontSize="sm" fontWeight="medium">{data.amount}</Td>
                                <Td fontSize="sm" fontWeight="medium">
                                    <Tag bg={statusColor[data.status]} color='white' borderRadius='full'> {data.status}</Tag>
                                </Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default TransactionTable
