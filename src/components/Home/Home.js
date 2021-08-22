import { useSelector } from "react-redux";

//compmnents
import IdeaListHome from "./IdeaListHome";

//styling
import { Carousel } from "react-bootstrap";
import { HomeDiv, Image, P6, H2, DivB } from "../../style";
const Home = () => {
  const ideas = useSelector((state) => state.ideas.ideas);
  const fullIdea = ideas.filter(
    (idea) => idea?.fundAmount === idea?.recievedFund
  );

  // console.log(fullIdea);

  return (
    <HomeDiv>
      <Carousel>
        <Carousel.Item interval={5000}>
          <Image
            className="d-block w-100"
            src="https://assets.entrepreneur.com/content/3x2/2000/1593614340-IsMyIdeaAnyGood.jpg?width=1200&crop=2:1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Steve Jobs</h3>
            <p>"If you haven't found it yet, keep looking. Don't settle"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Image
            className="d-block w-100"
            src="https://www.wordwritepr.com/hs-fs/hubfs/lightbulb%20(1).png?width=640&name=lightbulb%20(1).png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Victor Hugo</h3>
            <p>"No one can withstand the strength of an idea"</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Image
            className="d-block w-100"
            src="https://media.istockphoto.com/illustrations/big-idea-concept-on-blackboard-illustration-id507141090?k=6&m=507141090&s=612x612&w=0&h=Aj3GWFxPG8AmQRjl8lhHFG7-WJtw9ZN7f_amVHZ28Zk="
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Earl Nightingale</h3>
            <p>"everything begins with an idea"</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
