"use client";
import React from "react";
import { Stack, Typography } from "@mui/material";
import { MotionDiv } from "../../src/components/MotionComponents";

function GloryHats() {
  // Define the hat shape pattern (number of emojis per row)
  const hatPattern = [
    4, // Top of hat
    6, // Building up brim
    8,
    12, // Brim
    15, // Wide brim
    18, // Widest part of brim
    15, // Brim tapering
    12, // Brim end
  ];

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      {hatPattern.map((width, index1) => (
        <Stack
          key={index1}
          direction="row"
          gap={2}
          sx={{ justifyContent: "center" }}
        >
          {Array.from({ length: width }).map((_, index2) => (
            <MotionDiv
              key={index2}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: (index1 * Math.max(...hatPattern) + index2) * 0.01,
              }}
            >
              <Typography fontSize={40}>👒</Typography>
            </MotionDiv>
          ))}
        </Stack>
      ))}
    </Stack>
  );
}

export default GloryHats;
