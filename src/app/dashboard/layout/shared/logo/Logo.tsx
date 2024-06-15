import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Img = styled("img")(() => ({
  height: "70px !important",
  width: "174px",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      {/* <Image src="/images/logos/dark-logo.svg" alt="logo" height={70} width={174} sx={{height: auto}} priority /> */}
      <Img src="/images/logos/dark-logo.svg" alt="logo"/>
    </LinkStyled>
  );
};

export default Logo;
