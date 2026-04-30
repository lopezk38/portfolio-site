import React, { useState } from 'react';

function Home() {
	
	const openPage = (url) => {
		if (url.length > 0)
		{
			window.open(url, "_blank", "noopener,noreferrer");
		}
	}
	
	const sendEmail = (address) => {
		window.location.href = `mailto:${address}`;
	}
	
	const projectCardEntries = [
		{
			clickHandler: openPage,
			url: 'https://github.com/lopezk38/PropertyPal-CS370-Section-20-Team-7',
			title: "PropertyPal",
			desc: "My Software Engineering design project. A Property management app designed to help Landlords and Tenants communicate, share documents, manage service tickets, make payments, and more. Client Server system with layered components and Model View Controller architecture for presentation. Utilizes a relational database to retain user state, data, and permissions management information to secure user data. Written in Java"
		},
		{
			clickHandler: openPage,
			url: 'https://github.com/lopezk38/DVR-Timeline-Preprocessor',
			title: "Davinci Resolve Timeline Preprocessor",
			desc: "Toolchain to automatically generate a Resolve timeline from a set of source clips. Automatically renames, transcodes, sorts, trims, and catalogs each clip. Makes ingestion of a project as easy as importing a timeline file. Includes Gemini integration for LLM assisted clip trimming with optimizations to reduce required bandwith and integration with the Gemini Files API. Written in PowerShell"
		},
		{
			clickHandler: openPage,
			url: 'https://github.com/lopezk38/piSunClock',
			title: "Pi Sun Clock",
			desc: "Application for Raspberry Pi which simulates sunrise to sunset including automatic monitor hardware brightness and power control using DDC/CI. Driven by a priority based task scheduler which handles and schedules update events and hardware calls at regular intervals. Minimalist interface with large, easily readable text for reading the time even in dark environments. Utilizes Raylib for UI rendering and driving the framebuffer. Written in C++"
		},
		{
			clickHandler: openPage,
			url: '',
			title: "Automotive Power Distribution Center",
			desc: "Fully integrated power distribution module for my LS swapped Camaro. Water resistant enclosure designed using SolidEdge and 3D scans of the engine compartment using RealityScan. Custom designed heavy copper four layer PCB transmits up to 50 amps on a single circuit. Features smart shutdown of the A/C compressor circuit when the engine is above 4,500 RPM to protect the compressor, automatic high speed radiator fan activaton upon A/C request, and three 150 amp high power circuits. PCB designed using KiCad"
		}
	]
	
	const [projectCards, setProjectCards] = useState(projectCardEntries);
	
	return (
		<main>		
			{/* Hero Section */}
			<section className="hero">
				<h1>Hi, I'm Kenneth Lopez</h1>
				<p>Aspiring Software Engineer and Maker</p>
			</section>
			
			<div id="about" className='v-container'>
				{/* About Section */}
				<section className="section glass-pane">
					<h2>About Me</h2>
					<p>
						I am a senior year student studying Computer Science at CSU San Marcos.
						I love architecting and developing complex software systems 
						which help make people's lives easier. I also enjoy
						working with embedded systems and even dabble in mechanical
						design and 3D printing. I graduate in May 2026!
					</p>
				</section>

				{/* Projects Section */}
				<section id="projects" className="section glass-pane">
					<h2>Projects</h2>
					<div className="projects-grid">
						{projectCards.map((data) => (
							<div
								key={Math.random()}
								className="project-card opaque-background"
								onClick={() => {data.clickHandler(data.url)}}
								url={data.url}
								title={data.title}
								desc={data.desc}>
								<h3>{data.title}</h3>
								<p>{data.desc}</p>
							</div>
						))}
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="section glass-pane">
					<h2>Contact Me!</h2>
					<div className="contact-container">
						<div className="contact-card project-card mini opaque-background">
							<img src="mail.svg"></img>
							<p className="section" onClick={() => {sendEmail('lopezk38@gmail.com')}}>
								Email: lopezk38@gmail.com
							</p>
						</div>
						<div className="contact-card project-card mini opaque-background">
							<img src="github.svg"></img>
							<p className="section" onClick={() => {openPage('https://github.com/lopezk38')}}>
								GitHub: github.com/lopezk38
							</p>
						</div>
					</div>
				</section>
			</div>
			
			{/*Background animation generated using https://wweb.dev/resources/animated-css-background-generator */}
			<ul className="background">
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

export default Home;