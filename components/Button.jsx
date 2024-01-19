import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const CustomButton = (props) => {
  const MyButton = styled(Button)({
    color: "darkslategray",
    backgroundColor: props.color,
    padding: 8,
    borderRadius: 4,
    "&:hover": {
      background: "aliceblue",
    },
  });
  const setColor = () => {
    props.SetScreenColor(props.color);
  };
  return (
    <>
      <MyButton onClick={setColor} variant="contained">
        {props.children}
      </MyButton>
    </>
  );
};

export default CustomButton;
