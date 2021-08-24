import "./successIdea.css";
const SI = () => {
	return (
		<div class="wrapper">
			<div class="card front-face">
				<img
					src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
					alt="Flip Card"
				/>
			</div>
			<div class="card back-face">
				<img
					src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
					alt="Flip Card"
				/>
				<div class="info">
					<div class="title">CodingLab</div>
					<p>
						User interface designer and <br />
						front-end developer
					</p>
				</div>
				<ul>
					<a href="#">
						<i class="fab fa-facebook-f"></i>
					</a>
					<a href="#">
						<i class="fab fa-twitter"></i>
					</a>
					<a href="#">
						<i class="fab fa-instagram"></i>
					</a>
					<a href="#">
						<i class="fab fa-youtube"></i>
					</a>
				</ul>
			</div>
		</div>
	);
};

export default SI;
