'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import {
  AppShell,
  Avatar,
  Button,
  Flex,
  Header,
  Menu,
  Text,
} from '@mantine/core'
import { IconLogout } from '@tabler/icons'

export default function Home() {
  const { data: session, status } = useSession()

  return (
    <AppShell
      header={
        <Header height={60} p="xs">
          <Flex justify="space-between" align="center">
            <Text fz="xl" fw="bold">
              next13-prisma-nextauth-template
            </Text>
            {status === 'authenticated' ? (
              <Menu>
                <Menu.Target>
                  <Avatar src={session.user?.image} radius="xl" />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item icon={<IconLogout size={14} />}>
                    ログアウト
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            ) : status === 'unauthenticated' ? (
              <Button onClick={() => signIn('google')}>login</Button>
            ) : (
              <Button onClick={() => signOut()} loading>
                logout
              </Button>
            )}
          </Flex>
        </Header>
      }
    >
      <main>app</main>
    </AppShell>
  )
}
