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
  type: string;
  price: number;
  description: string;
  benefitList: string[];
  perfectFor: string;
}

const PriceCard: React.FC<priceCardProps & HTMLAttributes<HTMLDivElement>> = ({
  type,
  price,
  description,
  benefitList,
  perfectFor,
  ...props
}) => {
  return (
    <PriceCardWrapper {...props}>
      <Box className="gradient-box" />
      <Box className="wrapper_otr">
        <Box className="wrapper">
          <Box className="title_block">
            <Typography variant="h5">{type}</Typography>
            <Typography variant="h4">
              ${price}
              <Typography variant="caption">/month</Typography>
            </Typography>
          </Box>
          <Box className="description_block">
            <Typography>{description}</Typography>
          </Box>
          <Box className="benefit_block">
            <Typography variant="h4">Benefits</Typography>
            <List disablePadding>
              {benefitList?.map((data, index) => (
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
            <Typography variant="h4">Perfect For</Typography>
            <Typography>{perfectFor}</Typography>
            <CustomButtonPrimary variant="contained" color="primary">
              <Typography variant="caption">Subscribe</Typography>
            </CustomButtonPrimary>
          </Box>
        </Box>
      </Box>
    </PriceCardWrapper>
  );
};

export default PriceCard;
