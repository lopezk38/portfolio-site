import React, { useState } from 'react';

import blogData from '@/assets/blogData/BlogContent.json';

class BlogEntry {
	name;
	date;
	heading;
	content;
};

function Blog() {
	const [blogEntries, setBlogEntries] = useState(blogData.entries);
	
	return (
		<main>
			<div className='v-container'>
				<section className="section glass-pane">
					<h1>Kenneth's Blog</h1>
					<p>
						Welcome to my blog! I'll post more about my projects here.
					</p>
				</section>

				{blogEntries.map((entry) => (
					<article key={Math.random()} className="blog-post glass-pane">
						<h2>{entry.name}</h2>
						<h3>{entry.heading}</h3>
						{entry.content.map((subContent, index) => (
							<section key={Math.random()} className="blog-subcontent glass-pane">
								<h3>{subContent.subContentHeading}</h3>
								<img src={subContent.subContentImg}></img>
								<p>{subContent.subContentText}</p>
							</section>
						))}
					</article>
				))}
			</div>
			
			{/*Background animation generated using https://wweb.dev/resources/animated-css-background-generator */}
			<ul class="background">
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			   <li></li>
			</ul>
		</main>
	);
}

export default Blog;