import React from "react";
const Cards=(props)=>{
    return (
        <div class="card">
						<div class="card_image"><img src="https://picsum.photos/500/300/?image=5"></img></div>
						<div class="card_content">
							<h2 class="card_title">{props.title}</h2>
							<p class="card_text">{props.bio}</p>
							<button class="btn card_btn">Read More</button>
						</div>
					</div>
    )
}
export default Cards