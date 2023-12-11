import { Button, Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    const currentPage = router.pathname;
    return (
        <Stack direction="row">
            <Button
                onClick={() => router.push('/')}
                style={{ color: getTabTextColor(currentPage, '/') }}
            >
                Home
            </Button>
            <Button
                onClick={() => router.push('/photography')}
                style={{ color: getTabTextColor(currentPage, '/photography') }}
            >
                Film Photography
            </Button>
            <Button
                onClick={() => router.push('/threejs')}
                style={{ color: getTabTextColor(currentPage, '/threejs') }}
            >
                ThreeJS
            </Button>
        </Stack>
    );
}

function getTabTextColor(currentPage: string, tabName: string) {
    return currentPage === tabName ? 'initial' : 'grey';
}