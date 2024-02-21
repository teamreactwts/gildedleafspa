/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/no-array-index-key */
import { PriceCardWrapper } from "@/styles/StyledComponents/PriceCardWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import TickIcon from "@/ui/Icons/TickIcon";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import React, { HTMLAttributes } from "react";

export interface priceCardProps {
  title: string;
  price: number;
  description: string;
  benefits_options: string[];
  perfect_for_content: string;
  selectValuecallback: (data: number) => void;
  indexNumber: number;
  membership_deep_link: string;
}

const PriceCard: React.FC<priceCardProps & HTMLAttributes<HTMLDivElement>> = ({
  title,
  price,
  description,
  benefits_options,
  perfect_for_content,
  selectValuecallback,
  indexNumber,
  membership_deep_link,
  ...props
}) => {
  return (
    <PriceCardWrapper {...props}>
      <Box className="wrapper_otr">
        <Box className="wrapper">
          <Box className="title_block">
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h4">
              ${price}
              <Typography variant="caption">/month</Typography>
            </Typography>
          </Box>
          <Box className="description_block">
            <Typography
              dangerouslySetInnerHTML={{
                __html: description as string
              }}
            />
          </Box>
          <Box className="benefit_block">
            <Typography variant="h4">Benefits</Typography>
            <List disablePadding>
              {benefits_options?.map((data, index) => (
                <ListItem disablePadding key={index}>
                  <Icon>
                    <TickIcon />
                  </Icon>
                  {data}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box className="perfect_block">
            <Box className="perfect_block_top">
              <Typography variant="h4">Perfect For</Typography>
              <Typography
                dangerouslySetInnerHTML={{
                  __html: perfect_for_content as string
                }}
              />
            </Box>
            <CustomButtonPrimary
              variant="contained"
              color="primary"
              onClick={() => window.open(membership_deep_link)}
            >
              <Typography variant="caption">Subscribe</Typography>
            </CustomButtonPrimary>
          </Box>
        </Box>
      </Box>
    </PriceCardWrapper>
  );
};

export default PriceCard;
