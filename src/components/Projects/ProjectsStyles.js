import styled from "styled-components";

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
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px 10px 0px 0px;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
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
  border: 1.5px solid #bf750683;
  text-align: center;
  width: 98%;
  & img {
    height: 300px;
  }
  height: 600px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    & img {
      height: 100%;
    }
    height: 100%;
  }
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #bf7506;
  padding: 0.5rem 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: ${(props) => (props.title ? "2.5rem" : "2rem")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2rem;
    line-height: 35px;
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
  padding: 0 50px;
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
  margin: 2.5rem;
`;

export const ExternalLinks = styled.a`
  color: #211b12;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #fff;
  transition: 0.5s;
  border: 1px solid #dd9c3c;
  margin-right: 0.7rem;
  &:hover {
    background: #bf7506;
    color: #fff;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  margin: 0.7rem;
  font-size: 1.5rem;
  border: 1px solid #dd9c3c;
  border-radius: 4px;
  padding: 5px 8px 4px;
`;
