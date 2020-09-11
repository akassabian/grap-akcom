import Items from '../components/Items';

const Home = props => (
  <div>
<div className="bg-ajk-dark">	
		<div className="container content-main">
			<div className="row row-bio">						
				<div className="col-xs-12 col-md-6 d-flex bio_pic_col justify-content-center justify-content-lg-end">
					{/*<img className="display_pic" alt="Photo of Alain" src="<?php echo get_template_directory_uri(); ?>/images/display_pic_cropped.jpg" width="250" height="250">*/}
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
						{/*<img alt="Image for Web Resume" src="<?php echo get_template_directory_uri(); ?>/images/web-resume.svg">*/}					
						<div className="topics-overlay text-center d-flex flex-column justify-content-center">
							<span>View Resume</span>
						</div>
					</a>
					<p>Web</p>
				</li>
				<li className="col-12 col-md-6 d-flex justify-content-center flex-wrap">
					<a href="category/technology/" className="topics-container">						
            {/*<img alt="Image for Tech Blog" src="<?php echo get_template_directory_uri(); ?>/images/tech.svg">*/}			
						<div className="topics-overlay text-center d-flex flex-column justify-content-center">
							<span>View Blog</span>
						</div>
					</a>
					<p>Technology</p>
				</li>
				<li className="col-12 col-md-6 d-flex justify-content-center flex-wrap">
					<a href="category/health/" className="topics-container">						
						{/*<img alt="Image for Health Blog" src="<?php echo get_template_directory_uri(); ?>/images/health.svg">*/}					
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
  </div>
);

export default Home;
