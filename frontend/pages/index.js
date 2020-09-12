import Items from '../components/Items';
import styled from 'styled-components';

const BgAjkDark = styled.div`
  .row-bio {
  margin: 0;
  padding: 80px 0 0;
  .bio_pic_col {
    margin-bottom: 60px;
  }
}

.row-bio-2 {
  margin: 0 0 50px;
  border-bottom: 3px solid #f7f7f7;
  padding: 50px 0;
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

  li {
    padding: 0 20px;
    margin-bottom: 70px;
  }

  .topics-container {
    position: relative;
    border: 1px solid #262626;
    border-radius: 25px;
    width: 100%;
    height: 95%;
    text-decoration: none;
    color: white;
    transition: 0.2s ease;
  }
  .topics-container:hover {
    border: 1px solid #0e0e0e;
  }

  img {
    width: 90%;
  }

  .topics-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.2s ease;
    background-color: black;
    opacity: 0;
    top: 0;
    border-radius: 25px;
  }
  .topics-container:hover .topics-overlay {
    opacity: 0.9;
  }
}

.row-cta {
  padding: 40px 0 45px;
  h2 {
    font-size: 1.8rem;
  }
}

.ajk-button {
  color: white;
  padding: 20px;
  border: 3px solid white;
  transition-duration: .2s;
  text-decoration: none;
  display: inline-block;
}

.ajk-button:hover {
  background-color: white;
  color: #0e0e0e !important;
  text-decoration: none;
}
@media (min-width: 768px) {
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

const Home = props => (
  <BgAjkDark>
<div className="bg-ajk-dark">	
		<div className="container content-main">
			<div className="row row-bio">						
				<div className="col-xs-12 col-md-6 d-flex bio_pic_col justify-content-center justify-content-lg-end">
					<img className="display_pic" alt="Photo of Alain" src="/static/display_pic_cropped.jpg" width="250" height="250" />
				</div>
				<div className="col-xs-12 col-md-6 d-flex flex-column justify-content-center">
					<p className="text-center text-md-left">
						Hello! My name is Alain (AJ).
						<br />
						I am a Mississauga based web developer.
					</p>
				</div>
			</div>
			<div className="row row-bio-2">
				<div className="col text-justify text-md-left">
					<p>I grew up in Whitby, Ontario. I'm an autodidactic polymath (self taught on broad range of topics) that gravitates towards technology, art, health, and social systems. I began developing websites professionaly near the end of 2018.</p>
				</div>
			</div>
		</div>

	
		<div className="container topics">
			<ul className="row row-topics justify-content-center">
				<li className="col-12 col-md-6 d-flex justify-content-center flex-wrap">
					<a href="https://registry.jsonresume.org/akassabian" className="topics-container">						
						<img alt="Image for Web Resume" src="/static/web-resume.svg" />					
						<div className="topics-overlay text-center d-flex flex-column justify-content-center">
							<span>View Resume</span>
						</div>
					</a>
					<p>Web</p>
				</li>
				<li className="col-12 col-md-6 d-flex justify-content-center flex-wrap">
					<a href="category/technology/" className="topics-container">						
            <img alt="Image for Tech Blog" src="/static/tech.svg" />	
						<div className="topics-overlay text-center d-flex flex-column justify-content-center">
							<span>View Blog</span>
						</div>
					</a>
					<p>Technology</p>
				</li>
				<li className="col-12 col-md-6 d-flex justify-content-center flex-wrap">
					<a href="category/health/" className="topics-container">						
						<img alt="Image for Health Blog" src="/static/health.svg" />
						<div className="topics-overlay text-center d-flex flex-column justify-content-center">
							<span>View Blog</span>
						</div>
					</a>
					<p>Health</p>
				</li>
			</ul>
		</div>
	</div>

	<div className="bg-ajk-primary">
		<div className="container">
			<div className="row row-cta">
				<div className="col text-center">
					<h2>Need help on a project?</h2><a href="mailto:alainkassabian@gmail.com" className="ajk-button">Free Consultation</a>
				</div>
			</div>
		</div>
	</div>
  </BgAjkDark>
);

export default Home;
