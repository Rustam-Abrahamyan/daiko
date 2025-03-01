import { invoke } from '@tauri-apps/api/core';
import { useState } from 'react';
import { Box, Button, Center, Group, Stack, TextInput, Title } from '@mantine/core';

export default function DashboardPage() {
    const [greetMsg, setGreetMsg] = useState('');
    const [name, setName] = useState('');

    async function greet() {
        setGreetMsg(await invoke('greet', { name }));
    }

    return (
        <Box px="md" py="xs">
            <Title order={2} fw="400" mb="md">
                Dashboard
            </Title>
            <Center>
                <Stack justify="center">
                    <Title order={1}>Welcome to Daiko</Title>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            greet();
                        }}
                    >
                        <Group>
                            <TextInput
                                id="greet-input"
                                onChange={(e) => setName(e.currentTarget.value)}
                                placeholder="Enter a name..."
                            />
                            <Button type="submit">Greet</Button>
                        </Group>
                    </form>
                    <p>{greetMsg}</p>
                </Stack>
            </Center>
        </Box>
    );
}
