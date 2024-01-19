import Stack from "@mui/material/Stack";
import CustomButton from "./Button";
import {
  blue,
  blueGrey,
  green,
  purple,
  red,
  yellow,
} from "@mui/material/colors";

const Bar = ({ SetScreenColor }) => {
  const colorArray = [red, purple, blue, blueGrey, yellow, green];

  return (
    <>
      <Stack
        direction={{ xs: "row", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        alignItems="center"
        style={{
          background: "#e1e4e2",
          maxWidth: "auto",
          height: "2.7rem",
          border: "2px solid #c9ccca",
          borderRadius: "5px",
          padding: "10px",
          margin: "2px",
        }}
      >
        {colorArray.map((c) => {
          return (
            <CustomButton
              SetScreenColor={SetScreenColor}
              key={String(c[400])}
              color={String(c[400])}
            >
              Button1
            </CustomButton>
          );
        })}
      </Stack>
    </>
  );
};

export default Bar;
