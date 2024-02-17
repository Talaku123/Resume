import { Container, Card, Carousel } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";

export default function Hobbies() {
  return (
    <>
      <h2 className="hobb-head">
        <span
          style={{
            backgroundColor: "transparent",
            fontFamily: "Georgia, Times New Roman, Times, serif",
          }}
        >
          Amuse
        </span>
        ment.
      </h2>
      <br />

      {/* ------- carousel here ---------- */}

      <Carousel className="carusel">
        <Carousel.Item className="carusel-item">
          <img src={require("../Assets/IMG_20170208_095220.jpg")} alt="my" />
        </Carousel.Item>

        <Carousel.Item className="carusel-item">
          <img src={require("../Assets/20200521_152004.jpg")} alt="my" />
        </Carousel.Item>

        <Carousel.Item className="carusel-item" style={{ width: "100%" }}>
          <img src={require("../Assets/IMG_20170301_013229.jpg")} alt="my" />
        </Carousel.Item>
      </Carousel>
      <br />
      <hr />

      {/* -------- card starts here -------- */}

      <Container>
        <p className="hobb-link">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam
          rem magni voluptatem, tenetur sunt, et quae nostrum magnam excepturi
          numquam commodi? Deleniti porro quis quo asperiores. Molestias, aut
          sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          ipsam rem magni voluptatem, tenetur sunt, et quae nostrum magnam
          excepturi numquam commodi? Deleniti porro quis quo asperiores.
          Molestias, aut sit.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Culpa ipsam rem magni voluptatem, tenetur sunt, et quae nostrum
          magnam excepturi numquam commodi? Deleniti porro quis quo asperiores.
          Molestias, aut sit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Culpa ipsam rem magni voluptatem, tenetur sunt, et quae nostrum
          magnam excepturi numquam commodi? Deleniti porro quis quo asperiores.
          Molestias, aut sit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Culpa ipsam rem magni voluptatem, tenetur sunt, et quae nostrum
          magnam excepturi numquam commodi? Deleniti porro quis quo asperiores.
          Molestias, aut sit.
        </p>

        <br />
        <hr />
        <Card className="card">
          <Card.Img
            variant="top"
            src={require("../Assets/20200521_152004.jpg")}
          />
        </Card>
        <Card.Text className="text-card">
          <h4 className="card-h5">
            <span>Charchole</span> on Paper.
          </h4>
          <br />
          we needsome thing hear and there who and what the right then night
          tonhnnLorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          ipsam rem magni voluptatem, tenetur sunt, et quae nostrum magnam
          excepturi numquam commodi? Deleniti porro quis quo asperiores.
          Molestias, aut sit.
        </Card.Text>

        <hr />

        <Card className="card">
          <Card.Img
            variant="top"
            src={require("../Assets/IMG_20170225_134053.jpg")}
          />
        </Card>
        <Card.Text className="text-text">
          <h4 className="card-h5">
            <span>Water</span> Color<span> on Paper.</span>
          </h4>
          <br />
          we needsome thing hear and there who and what the right then night
          tonhnnLorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          ipsam rem magni voluptatem, tenetur sunt, et quae nostrum magnam
          excepturi numquam commodi? Deleniti porro quis quo asperiores.
          Molestias, aut sit.
        </Card.Text>

        <hr />

        <Card className="card">
          <Card.Img
            variant="top"
            src={require("../Assets/IMG_20170301_013229.jpg")}
          />
        </Card>

        <Card.Text className="text-card">
          <h4 className="card-h5">
            <span>Water</span> Color<span> on Paper.</span>
          </h4>
          <br />
          we needsome thing hear and there who and what the right then night
          tonhnnLorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          ipsam rem magni voluptatem, tenetur sunt, et quae nostrum magnam
          excepturi numquam commodi? Deleniti porro quis quo asperiores.
          Molestias, aut sit.
        </Card.Text>

        <hr />

        {/* ------------ sketchbook ---------------- */}

        <h4 className="card-h4">
          <span>From</span> Sketch<span>book.</span>
        </h4>

        <Card className="card">
          <Card.Img
            variant="top"
            src={require("../Assets/IMG_20170308_150905.jpg")}
          />
        </Card>

        <Card className="card">
          <Card.Img
            variant="top"
            src={require("../Assets/IMG_20170308_151035.jpg")}
          />
          {/* <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text> */}
        </Card>
      </Container>
      <br />

      {/* --------- first card finished ---------- */}

      <div className="classic">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
        aperiam ab voluptas minus. Eaque repellat cum ea, ipsam assumenda culpa
        fugiat totam optio dolor, amet, nisi commodi tempora velit deserunt.{" "}
      </div>
      <br />

      {/* ---------- second card start here ------------ */}

      <Container className="second-card-card">
        <Card>
          <Card.Img
            variant="top"
            src={require("../Assets/IMG_20171222_190328.jpg")}
          />
          <Card.Text>
            <h4 className="card-h6 mt-5">
              <span>Water</span> Color<span> on Paper.</span>
            </h4>
          </Card.Text>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src={require("../Assets/IMG_20171208_214705.jpg")}
            style={{ height: "57.5em" }}
          />
          <Card.Text>
            <h4 className="card-h6 mt-5">
              <span>Water</span> Color<span> on Paper.</span>
            </h4>
          </Card.Text>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src={require("../Assets/IMG_20170208_095220.jpg")}
          />
          <br />
          <Card.Text>
            <h4 className="card-h6 mt-5">
              <span>Accrlic</span> on Canvas.
            </h4>
          </Card.Text>
        </Card>
      </Container>
      <br />

      {/* ---------- added here ------------- */}

      <div className="classic-ancher">
        {" "}
        <span> Contact </span> Me.
        <a className="ancher" href="/contact">
          <FaPaperPlane />
        </a>
      </div>
      <br />
    </>
  );
}
