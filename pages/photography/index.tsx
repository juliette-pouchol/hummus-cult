import { ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import ocean_beach_01 from "../../images/ocean01.jpg"
import ocean_beach_02 from "../../images/ocean02.jpg"
import ocean_beach_03 from "../../images/ocean03.jpg"
import city01 from "../../images/city01.jpg"
import { ReactElement, useState } from "react";
import { StaticImageData } from "next/image";
import Layout from '../components/Layout'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const PhotographyPage = () => {
    const itemData = {
        ocean: [ocean_beach_01, ocean_beach_02, ocean_beach_03],
        city: [city01],
    };
    const [currTab, setCurrTab] = useState(0);
    const handleChange = (_event, newValue: number) => {
        setCurrTab(newValue);
    };
    return (
        <Stack display="flex" alignItems=" center">
            <Tabs value={currTab} onChange={handleChange} aria-label="Photography tabs">
                <Tab label="Ocean" />
                <Tab label="City" />
            </Tabs>
            <CustomTabPanel value={currTab} index={0}>
                <ImageListComponent items={itemData.ocean} />
            </CustomTabPanel>
            <CustomTabPanel value={currTab} index={1}>
                <ImageListComponent items={itemData.city} />
            </CustomTabPanel>
            {/* Add more TabPanel as needed */}
        </Stack >
    );
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <Stack
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && children}
        </Stack>
    );
}

function ImageListComponent({ items }: { items: Array<StaticImageData> }) {
    return (
        <ImageList variant="masonry" cols={1} gap={8} sx={{ width: "100vh" }}>
            {items.map((item) => (
                <ImageListItem key={item.src}>
                    <img
                        srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.src}?w=248&fit=crop&auto=format`}
                        alt="img"
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

PhotographyPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default PhotographyPage