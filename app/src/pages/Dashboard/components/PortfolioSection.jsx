import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineInfoCircle } from 'react-icons/ai'

const PortfolioSection = () => {
  return (
    <HStack justify='space-between' bg='white' borderRadius='xl' p='6' align={{
      flex: 'flex-start',
      xl: "Center",
    }} flexDir={{
      base: "column",
      xl: "row",
    }} spacing={{
      base: 4,
      xl: 0,
    }}>
      <HStack spacing={{
        base: "0",
        xl: '16',
      }} align={{
        flex: 'flex-start',
        xl: "center",
      }} flexDir={{
        base: "column",
        xl: "row",
      }}>
        <Stack>
          <HStack color='black.80'>
            <Text fontSize='14px'>Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle='h2' fontWeight='medium'>$ 112,312.24</Text>
        </Stack>
        <Stack>
          <HStack color='black.80'>
            <Text fontSize='14px'>Wallet Balances</Text>
          </HStack>
          <HStack spacing={4} align={{
            flex: 'flex-start',
            sm: "center",
          }} flexDir={{
            base: "column",
            sm: "row",
          }}>
            <HStack>
              <Text textStyle='h2' fontWeight='medium'>22.39401000</Text> <Tag colorScheme='gray' fontWeight='medium'>BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle='h2' fontWeight='medium'>$ 1,300.00</Text> <Tag colorScheme='gray' fontWeight='medium'>INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposite</Button>
        <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
      </HStack>
    </HStack>
  )
}

export default PortfolioSection
