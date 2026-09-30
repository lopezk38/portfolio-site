import React, { useState } from 'react';
import PrismaticBurst from '@/components/PrismaticBurst'

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
			key: 'proj-nodepipe26',
			clickHandler: openPage,
			url: '',
			title: "NodePipe",
			desc: "My Capstone project. A bioinformatics genetic analysis pipeline generator app created to reduce the barrier of entry for new bioinformatics research students. Provides a node based graphical interface for intuitive pipeline construction, prebuilt presets, and cloud backup. Client server system with containerized backend for maximum system compatibility and ease of deployment. Architected to be modular and flexible for future adaptation into a larger distributed system on an HPC. Generates NextFlow code on the backend to utilize existing and future containerized bioinformatic tools with minimal changes. Written in Python"
		},
		{
			key: 'proj-proppal25',
			clickHandler: openPage,
			url: 'https://github.com/lopezk38/PropertyPal-CS370-Section-20-Team-7',
			title: "PropertyPal",
			desc: "My Software Engineering project. A Property management app designed to help Landlords and Tenants communicate, share documents, manage service tickets, make payments, and more. Client Server system with layered components and Model View Controller architecture for presentation. Utilizes a relational database to retain user state, data, and permissions management information to secure user data. Client and server communicate over a custom REST API, decoupling the two systems for flexible deployment, maintainability, and easier QC. Written in Java"
		},
		{
			key: 'proj-dvrcodegen25',
			clickHandler: openPage,
			url: 'https://github.com/lopezk38/DVR-Timeline-Preprocessor',
			title: "Davinci Resolve Timeline Preprocessor",
			desc: "Toolchain to automatically generate a Resolve timeline script from a set of source clips. Automatically renames clips by date, transcodes using multiple processes simultaneously, sorts, trims out dead frames, and catalogs each clip into a manifest file. Makes ingestion of a project as easy as importing a timeline file. Includes Gemini integration for LLM assisted clip trimming with optimizations to reduce required bandwith and integration with the Gemini Files API. Written in PowerShell"
		},
		{
			key: 'proj-mcapi26',
			clickHandler: openPage,
			url: 'https://github.com/lopezk38/mc_rcon_api',
			title: "Minecraft Server RCON API Backend",
			desc: "Containerized FastAPI server which provides access to select Minecraft server commands through a REST API. Designed to be utilized by a React site which shows live updates to players in my community from anywhere in the world. Caches results from the Minecraft server to avoid excessive RCON requests while still providing instant response time. Written in Python"
		},
		{
			key:'proj-woinvdb26',
			clickHandler: openPage,
			url: '',
			title: "Work Order DB with External Backend Sync",
			desc: "Database program which automatically syncs with a reverse engineered external backend. Designed to make an easily searchable local catalog of work orders which is always up to date with the remote system by detecting work order desync between the local DB and external backend. Currently saves significant employee labor time at a business by allowing more sophisticated searching strategies to be applied against the dataset than what is provided by the external vendor's frontend site. Written in Python"
		},
		{
			key:'proj-llminvcat25',
			clickHandler: openPage,
			url: '',
			title: "AI Powered Invoice Annotation Tool",
			desc: "Automation tool designed to remove the tedium of data entry from the workplace. Imports bulk scanned invoice PDFs, slices them up, and prepares them for annotation by an LLM. Implements JSON structured data layouts with automatic validation and retries when the LLM returns faulty data. Modular with interchangeable LLM providers and automatic switchover to avoid rate limits. Returns structured descriptions for each invoice which are used to catalog them for quick lookup later. In use at a real business today. Written in PowerShell"
		},
		{
			key:'proj-sunclock25',
			clickHandler: openPage,
			url: 'https://github.com/lopezk38/piSunClock',
			title: "Pi Sun Clock",
			desc: "Application for Raspberry Pi which simulates sunrise to sunset including automatic monitor hardware brightness and power control using DDC/CI. Driven by a priority based task scheduler which handles and schedules update events and hardware calls at regular intervals. Minimalist interface with large, easily readable text for reading the time even in dark environments. Utilizes Raylib for UI rendering and driving the framebuffer. Written in C++"
		},
		{
			key:'proj-powerdist22',
			clickHandler: openPage,
			url: 'https://github.com/lopezk38/smart-fuse-box',
			title: "Automotive Power Distribution Center",
			desc: "Fully integrated power distribution module for my LS swapped Camaro. Water resistant enclosure designed using SolidEdge and 3D scans of the engine compartment using RealityScan. Custom designed heavy copper four layer PCB transmits up to 50 amps on a single circuit. Features smart shutdown of the A/C compressor circuit when the engine is above 4,500 RPM to protect the compressor, automatic high speed radiator fan activaton upon A/C request, and three 150 amp high power circuits. PCB designed using KiCad. Reliable and in daily service for the past four years"
		},
		{
			key:'proj-swapharness22',
			clickHandler: openPage,
			url: '',
			title: "Automotive Electrical System Overhaul",
			desc: "Complete redesign of engine compartment electrical systems for my LS swapped Camaro. Meticulously documented electrical schematics complete with connector view graphics, wire gauge calculations based upon circuit power distribution due to resistive losses, and subharnesses for ease of maintenance. Wire harness designed and built from scratch using Tefzel wire, terminated utilizing aircraft grade pins, high quality connectors, and sleeved in fire retardent wrap. Harness guides designed and printed out of CF-Nylon to prevent wire fatigue failures due to vibration"
		},
		{
			key:'proj-brakes24',
			clickHandler: openPage,
			url: '',
			title: "Automotive High Performance Brake Retrofit",
			desc: "6 piston Brembo upgrade kit for my Camaro. Replaces weak factory brakes with massive brakes by modifying the factory spindles and installing a mounting bracket of my design. Front suspension and caliper 3D scanned to facilitate CAD modeling of the upright assembly, allowing me to design a bracket which places the caliper in the perfect position without machining and weaking the caliper like in other designs. Use of finite element analysis to ensure that the bracket can handle the stress of heavy braking in racing environments without failure"
		}
	]
	
	const [projectCards, setProjectCards] = useState(projectCardEntries);
	
	return (
		<main>		
			{/* Hero Section */}
			<div className="hero-container">
				<div className="hero-background">
					<PrismaticBurst
						animationType="rotate3d"
						intensity={1}
						speed={0.5}
						distort={7.9}
						paused={false}
						offset={{ x: 0, y: 0 }}
						hoverDampness={0.25}
						rayCount={0}
						mixBlendMode="lighten"
						colors={['#ff007a', '#4d3dff', '#ffffff']}
						color0="#5557f7"
						color1="#3a76ed"
						color2="#637df1"
					/>
				</div>

				<section className="hero">
					<h1>Hi, I'm Kenneth Lopez</h1>
					<p>Aspiring Software Engineer and Maker</p>
				</section>
			</div>
			
			<div id="about" className='v-container'>
				{/* About Section */}
				<section className="section glass-pane">
					<h2>About Me</h2>
					<p className="base-card mini opaque-background">
						I love architecting and developing complex software systems 
						which help make people's lives easier. I also enjoy
						working with embedded systems and even dabble in mechanical
						design, electronics engineering, and 3D printing. I have a 
						Computer Science degree from CSUSM and am located in SoCal. 
						If you're interested in reaching out, you can find my 
						information at the bottom of this page!
					</p>
				</section>

				{/* Projects Section */}
				<section id="projects" className="section glass-pane">
					<h2>Projects</h2>
					<div className="projects-grid">
						{projectCards.map((data) => (
							<div
								key={data.key}
								className="base-card project-card opaque-background"
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
						<div className="base-card contact-card project-card mini opaque-background">
							<img src="/portfolio-site/mail.svg"></img>
							<p className="section" onClick={() => {sendEmail('lopezk38@gmail.com')}}>
								Email: lopezk38@gmail.com
							</p>
						</div>
						<div className="base-card contact-card project-card mini opaque-background">
							<img src="/portfolio-site/github.svg"></img>
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