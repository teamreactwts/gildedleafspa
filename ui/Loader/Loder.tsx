import loderData from "@/json/lottie/loader.json";
import { Backdrop } from "@mui/material";
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
import Image from "next/image";
import favicon from "../../public/favicon.ico";

const Lottie = dynamic(async () => await import("lottie-react"), {
  ssr: false
});

interface Iloading {
  isLoading: boolean;
}

export default function Loader(props: Iloading) {
  const { isLoading } = props;
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <Box sx={{ display: "flex", position: "relative" }}>
        <Lottie
          className="errorPage_image"
          animationData={loderData}
          loop
          style={{
            height: 150,
            width: 150
          }}
          height={150}
          width={150}
        />

        <Box
          sx={{
            display: "flex",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
          }}
        >
          <Image src={favicon} alt="img" priority width="35" height="35" />
        </Box>
      </Box>
      {/* <CircularProgress color="inherit" /> */}
    </Backdrop>
    // <Box>
    //   <CircularProgress color="inherit" />
    // </Box>
  );
}
