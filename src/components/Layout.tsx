import { useAtom } from "jotai";
import Header from "./Header/Header";

import { Stack } from "@mui/material";
import { themeAtom } from "../../app/atoms/atoms";

export default function Layout({ children }) {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <Stack width="100%" height="100%" gap={5}>
      <Header theme={theme} setTheme={setTheme} className="header" />
      <main>{children}</main>
    </Stack>
  );
}
