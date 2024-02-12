import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Loader(props: CircularProgressProps & { value: number }) {
  return (
    <Box
      size={80}
      sx={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress
        variant="determinate"
        size={80}
        thickness={2}
        {...props}
      />
      <Box
        size={80}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Loader value={progress} />;
}
