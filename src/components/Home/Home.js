//compmnents
import IdeaListHome from "./IdeaListHome";

//styling
import { Carousel } from "react-bootstrap";
import { HomeDiv, Image, P, H2 } from "../../style";
import { useSelector } from "react-redux";
const Home = () => {
  const ideas = useSelector((state) => state.ideas.ideas);
  const fullIdea = ideas.filter(
    (idea) => idea.fundAmount === idea.recievedFund
  );

  // console.log(fullIdea);

  return (
    <HomeDiv>
      <Carousel>
        <Carousel.Item interval={5000}>
          <Image
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Image
            className="d-block w-100"
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Image
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <H2>Our Story</H2>
      <P>
        Hello Start-ups we are here to make your dream become true, we have
        helped hundreds of ideas Hello Start-ups we are here to make your dream
        become true, we have helped hundreds of ideasHello Start-ups we are here
        to make your dream become true, we have helped hundreds of ideasHello
        Start-ups we are here to make your dream become true, we have helped
        hundreds of ideasHello Start-ups we are here to make your dream become
        true, we have helped hundreds of ideasHello Start-ups we are here to
        make your dream become true, we have helped hundreds of ideasHello
        Start-ups we are here to make your dream become true, we have helped
        hundreds of ideasHello Start-ups we are here to make your dream become
        true, we have helped hundreds of ideasHello Start-ups we are here to
        make your dream become true, we have helped hundreds of ideas
      </P>
      <H2>Success Story </H2>
      <P>Some of the fully funded ideas</P>
      <IdeaListHome ideas={fullIdea} />
    </HomeDiv>
  );
};
export default Home;
