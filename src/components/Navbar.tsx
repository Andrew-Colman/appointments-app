import Image from 'next/image';
import Link from 'next/link';

import { Box, Heading } from '@chakra-ui/react';

import AuthContainer from '../features/auth/AuthContainer';

export default function Navbar({ title }) {
    return (
        <header className="text-gray-600 body-font bg-slate-50 shadow">
            <Box
                display="flex"
                marginX="auto"
                padding="1.5rem"
                alignItems="center"
                flexWrap="wrap"
                elevation={1}
                className="justify-between"
            >
                <Link href="/">
                    <Box display="flex" alignItems="center" cursor="pointer">
                        <Image
                            src="/logo.svg"
                            alt={title}
                            width="28"
                            height="28"
                        />
                        <Heading size="lg" marginLeft=".5rem">
                            {title}
                        </Heading>
                    </Box>
                </Link>
                <Box
                    is="nav"
                    flexWrap="wrap"
                    marginLeft="auto"
                    alignItems="center"
                    justifyContent="center"
                    className="hidden sm:flex"
                ></Box>
                <AuthContainer />
            </Box>
        </header>
    );
}
