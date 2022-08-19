import { AddIcon, CalendarIcon, CheckIcon } from '@chakra-ui/icons';
import { VStack, Heading, Button, Text, Box, HStack } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import FeatureCard from './FeatureCard';

type Props = {};

export default function Landing({}: Props) {
    return (
        <HStack justifyContent="center" minH={'80vh'} spacing={8}>
            <VStack justifyContent={'center'}>
                <Image src="/calendar.svg" width={400} height={240} />
                <Box maxW="32rem" textAlign={{ base: 'center', md: 'left' }}>
                    <Heading as="h3" size="lg">
                        Appointment scheduling app
                    </Heading>

                    <Text fontSize="xl" mt={2}>
                        Sign in to get started and create your appointments
                    </Text>
                    <Button
                        size="lg"
                        colorScheme="green"
                        mt={4}
                        onClick={() => signIn(null, { callbackUrl: '/' })}
                    >
                        Sign In
                    </Button>
                </Box>
            </VStack>
            <div className="my-4 p-2 flex flex-wrap flex-col">
                <FeatureCard
                    title="Step 1"
                    description="click on a day in the calendar"
                    icon={<CalendarIcon />}
                />
                <FeatureCard
                    title="Step 2"
                    description="fill the form"
                    icon={<AddIcon />}
                />
                <FeatureCard
                    title="Step 3"
                    description="your appointment is scheduled"
                    icon={<CheckIcon />}
                />
            </div>
        </HStack>
    );
}
