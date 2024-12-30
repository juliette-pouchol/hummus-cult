import {
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Stack,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import styles from "./FAQs.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQs() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Stack className={styles.container} gap={isMobile ? 3 : 10}>
        <Stack gap={2}>
          <Typography variant="h2" style={{ textAlign: "center" }}>
            FAQs
          </Typography>
          <Stack gap={2}>
            <AccordionCard
              title="How much is a pound of hummus actually? 🤔"
              content={
                <Stack gap={2}>
                  <Typography variant="body2">
                    <span style={{ fontWeight: "bold", color: "#FF9966" }}>
                      16 ounces.
                    </span>
                    <br />
                    <br />
                    Instacart sells 10 ounces of Sabra (🤢) for $7.89.
                    <br />
                    <br />
                    Our hummus is cheaper, and way freaking better.
                    <br />
                    <br />
                    <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                      Okay, but how much food is this really?
                    </span>
                    <br />
                    <br />
                    We sold our friend Jacob a pound. He ate it all the same
                    day.
                    <br />
                    <br />
                    We sold our friend Siena a pound. She and her roommates
                    snacked it over a week.
                    <br />
                    <br />A pound of hummus is around{" "}
                    <span style={{ color: "#FF9966", fontWeight: "bold" }}>
                      ~1200 calories
                    </span>
                    .{" "}
                    <span style={{ fontWeight: "bold" }}>
                      You're crazy, Jacob.
                    </span>
                  </Typography>
                </Stack>
              }
              index={1}
            />
            <AccordionCard
              title="Is this actually a cult? 😳"
              content={
                <Typography variant="body2">
                  No, we just really love hummus. Though we do believe hummus
                  has mystical properties and should be treated as a sacred
                  food.
                </Typography>
              }
              index={2}
            />
            <AccordionCard
              title="What ingredients do you use? 🌱"
              content={
                <Typography variant="body2">
                  We use organic chickpeas, tahini, olive oil, lemon juice,
                  garlic, and spices. No preservatives or artificial
                  ingredients. Just pure, wholesome goodness.
                </Typography>
              }
              index={3}
            />
            <AccordionCard
              title="Do you deliver? 🚚"
              content={
                <Typography variant="body2">
                  Currently, we offer local pickup in San Francisco. Stay tuned
                  as we expand our delivery options!
                </Typography>
              }
              index={4}
            />
            <AccordionCard
              title="How long does it last? ⏰"
              content={
                <Typography variant="body2">
                  Our hummus stays fresh for up to 7 days when refrigerated. But
                  let's be honest, it's so good it probably won't last that
                  long!
                </Typography>
              }
              index={5}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

function AccordionCard({
  title,
  index,
  content,
}: {
  title: string;
  index: number;
  content: React.ReactNode;
}) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
      >
        <Typography component="span">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </Accordion>
  );
}
