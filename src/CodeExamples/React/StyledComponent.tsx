import styled from "styled-components";

const theme = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    paleBlue: "#0375f51a",
    red: "#E9553D",
    green: "#1FB463",
    ashGrey: "#8c9cb0",
    transparent: "transparent",
    riverBed: "#434c61",
    athensGrey: "#fcfcfd",
    pickledBluewood: "#2E384D",
  },
  fonts: {
    robotoBold: "Roboto-Bold",
    robotoMedium: "Roboto-Medium",
  },
  borderRadius: {
    2: "2px",
    4: "4px",
    16: "16px",
  },
};

export type CustomTheme = typeof theme;

declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

const Button = styled.div`
  background: ${(props) => props.theme.colors.ashGrey};
  color: ${(props) => props.theme.colors.white};
  // Pick value from theme
  border-radius: ${(props) => props.theme.borderRadius};
`;
