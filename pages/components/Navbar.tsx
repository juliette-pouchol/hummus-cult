import { Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { MotionDiv } from "./MotionComponents";

function NavIconAnimation({
  emoji,
  isEnabled,
}: {
  emoji: string;
  isEnabled: boolean;
}) {
  return isEnabled ? (
    <MotionDiv
      className="animated-slide"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 0.3,
      }}
    >
      {emoji}
    </MotionDiv>
  ) : (
    <div>{emoji}</div>
  );
}

export default function Navbar() {
  const router = useRouter();
  const currentPage = router.pathname;
  const styles = {
    link: {
      textDecoration: "none",
      fontSize: "18px",
    },
    icon: {
      color: getTabTextColor(currentPage, "/"),
    },
  };
  return (
    <Stack display="flex" direction="row" gap={2}>
      <Link
        href="/"
        style={{ ...styles.link, color: getTabTextColor(currentPage, "/") }}
      >
        <Stack direction="row" gap={1}>
          Playground
          <NavIconAnimation emoji="🛝" isEnabled={currentPage === "/"} />
        </Stack>
      </Link>
      <Link
        href="/hummus-cult"
        style={{
          ...styles.link,
          color: getTabTextColor(currentPage, "/hummus-cult"),
        }}
      >
        <Stack direction="row" gap={1}>
          Hummus Cult
          <NavIconAnimation
            emoji="🧆"
            isEnabled={currentPage === "/hummus-cult"}
          />
        </Stack>
      </Link>
      <Link
        href="/glory-hats"
        style={{
          ...styles.link,
          color: getTabTextColor(currentPage, "/glory-hats"),
        }}
      >
        <Stack direction="row" gap={1}>
          Glory Hats
          <NavIconAnimation
            emoji="👒"
            isEnabled={currentPage === "/glory-hats"}
          />
        </Stack>
      </Link>
    </Stack>
  );
}

function getTabTextColor(currentPage: string, tabName: string) {
  return currentPage === tabName ? "initial" : "grey";
}
