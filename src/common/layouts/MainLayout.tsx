import { AppShell, Burger, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import { Navbar } from "../components/Navbar";

export const MainLayout = ({ children }: { children: ReactNode; }) => {
    const [opened, { toggle }] = useDisclosure();

    return <AppShell
        layout="alt"
        header={{ height: 60 }}
        footer={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
    >
        <AppShell.Header>
            <Group h="100%" px="md">
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                <Text hiddenFrom="sm">Daiko</Text>
            </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
            <Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            </Group>
            <Navbar />
        </AppShell.Navbar>
        <AppShell.Main>
            {children}
        </AppShell.Main>
        <AppShell.Footer p="md" />
    </AppShell>
}