/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/jsx-no-useless-fragment */
import { primaryColors } from "@/themes/_muiPalette";
import HomeIcon from "@/ui/Icons/HomeIcon";
import NextArrowIcon from "@/ui/Icons/NextArrowIcon";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export const BreadcumbTitleWrapper = styled(Box)`
  padding: 25px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 40px;
    font-weight: 700;
  }
  .MuiBreadcrumbs-li {
    p,
    a {
      color: ${primaryColors?.textPrimaryColor};
      font-size: 16px;
    }
  }
`;

type navItemsType = {
  name: string;
  linkName: string;
  icon?: string;
};

interface titleProps {
  title: string;
  navItems?: navItemsType[];
  pageName?: string;
  pageIcon?: string;
}

export default function BreadcumbTitle({
  navItems,
  title,
  pageName,
  pageIcon
}: titleProps) {
  return (
    <BreadcumbTitleWrapper>
      <Container fixed>
        <Stack
          direction="row"
          alignItems="center"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <Typography variant="h1">{title}</Typography>
          <Breadcrumbs aria-label="breadcrumb" separator={<NextArrowIcon />}>
            <Link href="/">
              <HomeIcon />
            </Link>
            {navItems?.map((item, index) => (
              <Link href={item?.linkName} key={index}>
                <Typography component="i">{item?.icon}</Typography>
                {item?.name}
              </Link>
            ))}
            <Typography>
              {pageIcon && <Typography component="i">{pageIcon}</Typography>}

              {pageName}
            </Typography>
          </Breadcrumbs>
        </Stack>
      </Container>
    </BreadcumbTitleWrapper>
  );
}
