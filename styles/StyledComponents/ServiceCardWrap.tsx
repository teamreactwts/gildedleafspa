import { primaryColors } from "@/themes/_muiPalette";
import { Stack, styled } from "@mui/system";

export const ServiceCardWrap = styled(Stack)`
  border-radius: 20px;
  width: 100%;
  background: linear-gradient(
    120deg,
    rgba(253, 252, 248, 0.74) 3.57%,
    rgba(253, 252, 248, 0.29) 96.74%
  );

  backdrop-filter: blur(2px);

  backdrop-filter: blur(2px);
  padding: 24px 32px 24px 20px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    background: var(
      --Linear,
      linear-gradient(
        135deg,
        rgba(140, 96, 52, 0.2) 7.03%,
        rgba(169, 130, 79, 0.2) 30.96%,
        rgba(242, 217, 147, 0.2) 85.67%,
        rgba(255, 231, 159, 0.2) 94.22%,
        rgba(226, 192, 124, 0.2) 121.57%,
        rgba(166, 112, 51, 0.2) 177.99%
      )
    );
  }
  .servie_imgWrap {
    border-radius: 10px;
    border: 1px solid ${primaryColors.colorE4DDD3};
    background: linear-gradient(
      139deg,
      #f3f1e6 6.74%,
      rgba(243, 241, 230, 0.48) 96.06%
    );

    backdrop-filter: blur(32px);
    width: 130px;
    height: 157px;
    display: flex;
    align-items: center;
    justify-content: center;

    figure {
      line-height: 0;
      font-size: 0;
      width: 62px;
      height: 62px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .service_details {
    width: calc(100% - 130px);
    margin-left: 32px;
    h4 {
      color: ${primaryColors.primary};
      font-size: 26px;
      font-weight: 700;
      line-height: 1.5;
      margin-bottom: 10px;
    }
    p {
      color: ${primaryColors.textPrimaryColor};
      font-family: Noto Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5;
      max-width: 338px;
    }
    ul {
      margin-top: 20px;
      display: flex;
      align-items: center;
      li {
        width: auto;
        margin-right: 15px;
        &:last-child {
          margin-right: 0;
        }
        .book_nowbtn {
          padding: 13px;
          /* span {
            color: ${primaryColors.primary};

            font-weight: 600;
          } */
        }
        .member_btn {
          padding: 13px;
          min-width: 185px;
        }
      }
    }
  }
`;
