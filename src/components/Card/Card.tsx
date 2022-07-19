import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ICardProps } from "./Card.type";

const CustomCard = (props: ICardProps) => {
  const { imgURL, name, gender } = props;
  return (
    <Card
      variant="outlined"
      sx={{
        p: 1,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <CardMedia
        component="img"
        width="124"
        height="124"
        alt={name}
        src={imgURL}
        sx={{
          borderRadius: 0.5,
          width: "clamp(124px, (304px - 100%) * 999 , 100%)",
        }}
      />
      <Box sx={{ alignSelf: "center", px: { xs: 0, sm: 2 } }}>
        <Typography
          variant="body1"
          color="text.primary"
          fontWeight={600}
          sx={{
            textAlign: { xs: "center", sm: "start" },
            mt: { xs: 1.5, sm: 0 },
          }}
        >
          {name}
        </Typography>
        <Typography
          component="div"
          variant="caption"
          color="text.secondary"
          fontWeight={500}
          sx={{ textAlign: { xm: "center", sm: "start" } }}
        >
          Gender • {gender}
        </Typography>
      </Box>
    </Card>
  );
};

export default CustomCard;
