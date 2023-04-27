import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="..">
			<nav class="navbar navbar-light bg-light justify-content-between"></nav>
			<nav class="navbar navbar-dark bg-dark">
				<a class="navbar-brand">Start Bootstrap</a>
				<ul class="nav justify-content-end">
					<li class="nav-item">
						<a class="nav-link active" href="#">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">About</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Services</a>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled" href="#">Contact</a>
					</li>
				</ul>
			</nav>
			<div class="jumbotron">
				<h1 class="display-4">Hello, world!</h1>
				<p class="lead">I'm so excited that I worked and used my resources to finish this project. It really put my researching skills to the test!</p>
				<hr class="my-4"></hr>
				<p>I used different cards because the cards from Bootstrap aren't working for some reason. Besides these cards are more appealing to the eye!</p>
				<p class="lead">
					<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
				</p>
			</div>
			<ul class="cards">
				<li class="cards_item">
					<div class="card">
						<div class="card_image"><img src="https://picsum.photos/500/300/?image=10"></img></div>
						<div class="card_content">
							<h2 class="card_title">Location</h2>
							<p class="card_text">I decided to take a quick trip away from my usual environment for a few days so I can study and finish my projects. I didnt have my daughter so I was able to put in more work than usual.</p>
							<button class="btn card_btn">Read More</button>
						</div>
					</div>
				</li>
				<li class="cards_item">
					<div class="card">
						<div class="card_image"><img src="https://picsum.photos/500/300/?image=5"></img></div>
						<div class="card_content">
							<h2 class="card_title">Study & Resources</h2>
							<p class="card_text">Putting in 3-4 hours of study will really help you understand coding. You will learn this language pretty quickly with time and repitiveness.</p>
							<button class="btn card_btn">Read More</button>
						</div>
					</div>
				</li>
				<li class="cards_item">
					<div class="card">
						<div class="card_image"><img src="https://picsum.photos/500/300/?image=11"></img></div>
						<div class="card_content">
							<h2 class="card_title">Serenity</h2>
							<p class="card_text">Waking up to the beach and birds chirping, really calms my nerves and mental so I can be able to focus and study.</p>
							<button class="btn card_btn">Read More</button>
						</div>
					</div>
				</li>
			</ul>


		</div>
	);
};

export default Home;
