import { useSelector } from "react-redux";
//compmnents
import IdeaListHome from "./IdeaListHome";

//styling
import { HomeDiv, P6, H2, DivB } from "../../style";
import BestInv from "./BestInv";
const Home = () => {
  const ideas = useSelector((state) => state.ideas.ideas);
  const fullIdea = ideas.filter(
    (idea) => idea?.fundAmount === idea?.recievedFund
  );

  return (
    <HomeDiv>
      <BestInv />

      <DivB>
        <H2>Our Story</H2>
        <P6>
          Hello Start-ups we are here to make your dream become true, we aim to
          reach 1000 success stories all from the arab world by end the of 2022,
          our story starts when we found out how much the start-ups face issues
          in funding ,consultation and the huge gap between a start-up and
          investor. so we came up with this great idea to make that gap smaller
          and git you the right consultation. all you have to do is post your
          idea in our website and we will take care about it. also, we thought
          about the investor who is tired of looking for a great idea, idea
          allows him to expand and improves his business. we also give the
          chance to anyone to make a donation to help our beloved youth in our
          belover arab world.
        </P6>
      </DivB>
      <DivB>
        <H2>Success Story </H2>
        <P6>Some of the fully funded ideas. yours will be the next one.</P6>
        <IdeaListHome ideas={fullIdea} />
      </DivB>
    </HomeDiv>
  );
};
export default Home;
