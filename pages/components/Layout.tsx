import Navbar from './navbar'

import { Stack } from '@mui/material'

export default function Layout({ children }) {
    return (
        <Stack>
            <Navbar />
            <main>{children}</main>
        </Stack>
    )
}