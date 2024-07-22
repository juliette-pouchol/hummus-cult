import {  Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    const currentPage = router.pathname;
    return (
        <Stack direction="row">
            <Link href='/' style={{ color: getTabTextColor(currentPage, '/') }}>
                Home
            </Link>
            <Link
                href='/photography'
                style={{ color: getTabTextColor(currentPage, '/photography') }}
            >
                Film Photography
            </Link>
            <Link
                href="/threejs"
                style={{ color: getTabTextColor(currentPage, '/threejs') }}
            >
                ThreeJS
            </Link>
        </Stack>
    );
}

function getTabTextColor(currentPage: string, tabName: string) {
    return currentPage === tabName ? 'initial' : 'grey';
}