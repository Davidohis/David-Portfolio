import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 95%;
    display: flex;
    flex-direction: column;
    padding: 0px 1rem;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    padding: 0px 0px 0px 2.5rem;
  }
`;

export const Span = styled.span`
  font-size: 90px;
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 36px;
    line-height: 58px;
  }
`;

export const Span2 = styled.span`
  font-size: 9rem;
  background: linear-gradient(130deg, #f4743b 70%, #122c34 100%);
  -webkit-text-fill-color: transparent;
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 35px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 25px;
    padding-top: 15px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;
