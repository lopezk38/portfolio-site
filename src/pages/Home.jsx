function Home() {
	return (
		<main>		
			{/* Hero Section */}
			<section className="hero">
				<h1>Hi, I'm Kenneth Lopez</h1>
				<p>Aspiring Software Engineer and Maker</p>
			</section>
			
			<div className='v-container'>
				{/* About Section */}
				<section id="about" className="section glass-pane">
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
						<ProjectCard
							href="https://github.com/lopezk38/PropertyPal-CS370-Section-20-Team-7"
							target="_blank"
							rel="noopener noreferrer"
							title="PropertyPal"
							desc="My Software Engineering design project. A Property management app designed to help Landlords and Tenants communicate, share documents, manage service tickets, make payments, and more. Client Server system with layered components and Model View Controller architecture for presentation. Utilizes a relational database to retain user state, data, and permissions management information to secure user data. Written in Java"
						/>
						<ProjectCard
							href="https://github.com/lopezk38/DVR-Timeline-Preprocessor"
							target="_blank"
							rel="noopener noreferrer"
							title="Davinci Resolve Timeline Preprocessor"
							desc="Toolchain to automatically generate a Resolve timeline from a set of source clips. Automatically renames, transcodes, sorts, trims, and catalogs each clip. Makes ingestion of a project as easy as importing a timeline file. Includes Gemini integration for LLM assisted clip trimming with optimizations to reduce required bandwith and integration with the Gemini Files API. Written in PowerShell"
						/>
						<ProjectCard
							href="https://github.com/lopezk38/piSunClock"
							target="_blank"
							rel="noopener noreferrer"
							title="Pi Sun Clock"
							desc="Application for Raspberry Pi which simulates sunrise to sunset including automatic monitor hardware brightness and power control using DDC/CI. Driven by a priority based task scheduler which handles and schedules update events and hardware calls at regular intervals. Minimalist interface with large, easily readable text for reading the time even in dark environments. Utilizes Raylib for UI rendering and driving the framebuffer. Written in C++"
						/>
						<ProjectCard
							title="Automotive Power Distribution Center"
							desc="Fully integrated power distribution module for my LS swapped Camaro. Water resistant enclosure designed using SolidEdge and 3D scans of the engine compartment using RealityScan. Custom designed heavy copper four layer PCB transmits up to 50 amps on a single circuit. Features smart shutdown of the A/C compressor circuit when the engine is above 4,500 RPM to protect the compressor, automatic high speed radiator fan activaton upon A/C request, and three 150 amp high power circuits. PCB designed using KiCad"
						/>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="section glass-pane">
					<h2>Contact Me!</h2>
					<p>Email: lopezk38@gmail.com</p>
					<p>GitHub: github.com/lopezk38</p>
				</section>
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

function ProjectCard({ title, desc }) {
	return (
		<div className="project-card">
			<h3>{title}</h3>
			<p>{desc}</p>
		</div>
	);
}

export default Home;