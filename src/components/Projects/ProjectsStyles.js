import styled from "styled-components";

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const HeaderPreTitle = styled.h4`
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 1.5rem;
  color: #bf7506;
  text-align: center;
`;

export const HeaderTitle = styled.h2`
  font-weight: 600;
  letter-spacing: -0.05rem;
  font-size: 4rem;
  line-height: 25px;
  padding: 4rem 0px 4rem 0px;
  color: #2e2e2e;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
    line-height: 25px;
    padding: 3rem 0px 3rem 0px;
  }
`;

export const ProjectsWrapper = styled.div`
  margin: 10rem 0px 2rem 0px;

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 95%;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 0px 3.8rem;
    margin: 6rem 0px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    padding: 0px 0px 0px 1rem;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 450px;
  margin-bottom: 0;
  overflow: hidden;
  border-radius: 1rem 1rem 0px 0px;

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 100%;
  }
`;

export const GridContainer = styled.section`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
  padding: 5rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  margin-bottom: 6rem;
  text-align: center;
  width: 98%;
  height: 650px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderThree = styled.h3`
  text-align: left;
  font-weight: 700;
  letter-spacing: 2px;
  color: #bf7506;
  padding: 0 20px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  line-height: 25px;
  font-size: ${(props) => (props.title ? "1.8rem" : "2rem")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2rem;
    line-height: 25px;
    padding: 0px 0.6rem;
  }
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  margin-top: 2rem;
  padding: 0 20px;
  font-style: 2rem;
  line-height: 24px;
  text-align: left;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 1.5rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  margin: 2rem;
`;

export const ExternalLinks = styled.a`
  color: #211b12;
  font-size: 1.5rem;
  font-weight: 400;
  padding: 1rem 1.5rem;
  background: #fff;
  transition: 0.5s;
  border: 1px solid #dd9c3c;
  border-radius: 0.5rem;
  margin-right: 0.7rem;
  &:hover {
    background: #bf7506;
    color: #fff;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 1rem 12px;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  margin: 0.7rem;
  font-size: 1.2rem;
  border: 1px solid #dd9c3c;
  border-radius: 4px;
  padding: 5px 8px 4px;
`;
