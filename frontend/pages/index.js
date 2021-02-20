import styled from "styled-components";
import Link from "next/link";

const BgAjkDark = styled.div`
  .row-bio {
    margin: 0;
    padding: 80px 0 0;
    font-size: 24px;
    .bio_pic_col {
      margin-bottom: 60px;
    }
  }

  .row-bio-2 {
    margin: 0 0 50px;
    border-bottom: 3px solid #f7f7f7;
    padding: 50px 0;
    font-size: 24px;
  }

  .display_pic {
    border-radius: 50%;
    border: 3px solid #f7f7f7;
  }

  .topics.container {
    padding-top: 30px;
  }

  .row-topics {
    background-color: #0e0e0e;
    margin-bottom: 0;
    list-style: none;
    padding: 0 0 20px;
    font-size: 24px;

    li {
      padding: 0 20px;
      margin-bottom: 70px;
    }

    .topics-container {
      position: relative;
      border: 3px solid #262626;
      border-radius: 25px;
      width: 100%;
      height: 95%;
      text-decoration: none;
      color: white;
      transition: 0.2s ease;
      display: flex;
      justify-content: center;
    }
    .topics-container:hover {
      border: 3px solid #fff;
    }

    img {
      width: 90%;
    }

    .topics-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      transition: 0.2s ease;
      background-color: #0e0e0e;
      opacity: 0;
      top: 0;
      border-radius: 25px;
    }
    .topics-container:hover .topics-overlay {
      opacity:0.9;
      //opacity: 0.98;
    }
  }

  .row-cta {
    padding: 40px 0 45px;
    h2 {
      font-size: 32px;
    }
  }

  .ajk-button {
    color: white;
    padding: 20px;
    border: 3px solid white;
    transition-duration: 0.2s;
    text-decoration: none;
    display: inline-block;
    font-size: 24px;
  }

  .ajk-button:hover {
    background-color: white;
    color: #0e0e0e !important;
    text-decoration: none;
  }
  @media (min-width: 768px) {
    .mobile-topic-title{
      display: none;
    }
    .row-bio {
      margin: 0 0 50px;
      .bio_pic_col {
        margin: 0;
      }
    }
    .topics.container {
      padding-top: 0;
      .row-topics {
        padding: 0 0 50px;
        li {
          padding: 0 20px;
          margin-bottom: 20px;
        }
      }
    }
    .row-cta h2 {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    nav {
      ul {
        li {
          margin: 0 20px;
        }
      }
    }
  }
`;

const Home = (props) => (
  <BgAjkDark>
    <div className="bg-ajk-dark">
      <div className="container content-main">
        <div className="row row-bio">
          <div className="col-xs-12 col-md-6 d-flex bio_pic_col justify-content-center justify-content-lg-end">
            <img
              className="display_pic"
              alt="Photo of Alain"
              src="/static/display_pic_cropped.jpg"
              width="250"
              height="250"
            />
          </div>
          <div className="col-xs-12 col-md-6 d-flex flex-column justify-content-center">
            <p className="text-center text-md-left">
              Hello! My name is Alain (AJ).
              <br />I am a Toronto based web developer.
            </p>
          </div>
        </div>
        <div className="row row-bio-2">
          <div className="col text-justify text-md-left">
            <p>
            I'm self taught on a broad range of topics and gravitate towards technology, art, health, and social systems.
            </p>
          </div>
        </div>
      </div>

      <div className="container topics">
        <ul className="row row-topics justify-content-center">
          <li className="col-12 col-md-6 d-flex justify-content-center flex-wrap">
            <Link href="tech">
              <a className="topics-container">
                <img alt="Image for Tech Blog" src="/static/code-icon.svg" />
                <div className="topics-overlay text-center d-flex flex-column justify-content-center">
                  <span>Tech Musings</span>
                </div>
              </a>
            </Link>
            <p class="mobile-topic-title">Tech Musings</p>
          </li>
          <li className="col-12 col-md-6 d-flex justify-content-center flex-wrap">
            <Link href="health">
              <a className="topics-container">
                <img alt="Image for Health Blog" src="/static/health-icon.svg" />
                <div className="topics-overlay text-center d-flex flex-column justify-content-center">
                  <span>Health Musings</span>
                </div>
              </a>
            </Link>
            <p class="mobile-topic-title">Health Musings</p>
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-ajk-primary">
      <div className="container">
        <div className="row row-cta">
          <div className="col text-center">
            <h2>Need help on a project?</h2>
            <a href="mailto:alainkassabian@gmail.com" className="ajk-button">
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  </BgAjkDark>
);

export default Home;
