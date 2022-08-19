import { QuestionIcon } from '@chakra-ui/icons';
import { Avatar, Button, HStack, Tooltip } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { ReactElement } from 'react';

export default function AuthContainer(): ReactElement {
    const { data: session, status } = useSession();

    return (
        <div className="p-2">
            {!session && status !== 'loading' && (
                <>
                    <Button
                        colorScheme={'linkedin'}
                        size="md"
                        onClick={() => signIn(null, { callbackUrl: '/' })}
                    >
                        Sign in
                    </Button>
                </>
            )}
            {session && (
                <>
                    <HStack spacing={'4'}>
                        <Tooltip label="click on a day to create new events">
                            <QuestionIcon />
                        </Tooltip>
                        <Avatar
                            src={session?.user?.image || 'USER'}
                            size={'sm'}
                            userSelect="none"
                        />
                        <Button
                            colorScheme={'linkedin'}
                            variant="outline"
                            size="md"
                            onClick={() => signOut({ callbackUrl: '/' })}
                        >
                            Sign out
                        </Button>
                    </HStack>
                </>
            )}
        </div>
    );
}
