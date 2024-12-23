import { Button } from "@mui/material";
import { useState } from "react";

export default function TabItem({
  title,
  isActive,
  onClick,
  id,
}: {
  title: string;
  isActive: boolean;
  onClick: (newValue: string) => void;
  id: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(id)}
      sx={{
        color: isActive ? "var(--color-primary)" : "var(--color-gray-700)",
      }}
    >
      {title}
    </Button>
  );
}
