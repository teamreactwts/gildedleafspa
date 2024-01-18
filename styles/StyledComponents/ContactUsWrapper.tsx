import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const ContactUsWrapper = styled(Box)`
  .contact_form_content {
    h3 {
      font-size: 45px;
      font-weight: 700;
      text-transform: capitalize;
      @media (max-width: 599px) {
        font-size: 32px;
      }
    }
    ul {
      margin-top: 50px;
      li {
        i {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 55px;
          height: 55px;
          flex-basis: 55px;
          background: #f2efe4;
          backdrop-filter: blur(32px);
          border-radius: 50%;
        }
        .contact_details {
          flex-basis: calc(100% - 55px);
          padding-left: 20px;
          h6 {
            color: ${primaryColors?.black};
            font-family: Noto Sans;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: 0;
          }
          address,
          a {
            color: ${primaryColors?.color66635e};
            font-style: normal;
          }
          a {
            &:hover {
              color: ${primaryColors?.colorA67033};
            }
          }
        }
        &:not(:last-child) {
          margin-bottom: 30px;
        }
      }
    }
  }
  .contact_form {
    padding: 35px 30px;
    border-radius: 10px;
    border: 1px solid ${primaryColors?.colore6e0d6};
    @media (max-width: 599px) {
      padding: 20px 20px;
    }
    h3 {
      font-size: 45px;
      font-weight: 700;
      @media (max-width: 599px) {
        font-size: 32px;
      }
    }
    .each_input_field {
      &:not(:last-child) {
        margin-bottom: 15px;
      }
      .transparent_input {
        .MuiInputBase-root {
          background: transparent;
        }
      }
    }
  }
`;
