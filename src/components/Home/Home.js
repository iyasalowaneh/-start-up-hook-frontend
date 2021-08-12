//styling
import { Carousel } from "react-bootstrap";
import { HomeDiv, Image, P, H2, FDiv } from "../../style";
const Home = () => {
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
        helped hundreds of ideas{" "}
      </P>
      <FDiv>
        <footer class=" text-white text-center text-lg-start">
          <div class="container p-4">
            <div class="row">
              <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 class="text-uppercase">Footer Content</h5>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                  atque ea quis molestias. Fugiat pariatur maxime quis culpa
                  corporis vitae repudiandae aliquam voluptatem veniam, est
                  atque cumque eum delectus sint!
                </p>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-0">Links</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!" class="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="text-center p-3">
            © 2020 Copyright:
            <a class="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </FDiv>
    </HomeDiv>
  );
};
export default Home;
