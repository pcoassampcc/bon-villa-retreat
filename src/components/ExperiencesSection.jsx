import React from 'react';
import { FaCampground, FaFire, FaLeaf, FaHiking, FaUtensils, FaSpa } from 'react-icons/fa';
import '../ExperiencesSection.scss';

const experiences = [
	{
		icon: <FaFire size={36} color="#a68a64" />,
		title: 'Bonfire Evenings',
		caption: 'Gather under the stars for cozy bonfire nights.',
	},
	{
		icon: <FaUtensils size={36} color="#a68a64" />,
		title: 'Organic Food',
		caption: 'Savor farm-to-table organic cuisine.',
	},
	{
		icon: <FaLeaf size={36} color="#a68a64" />,
		title: 'Tribal Culture',
		caption: 'Immerse in local tribal traditions and art.',
	},
	{
		icon: <FaHiking size={36} color="#a68a64" />,
		title: 'Adventure Trails',
		caption: 'Explore scenic trails and nature walks.',
	},
	{
		icon: <FaSpa size={36} color="#a68a64" />,
		title: 'Peaceful Retreats',
		caption: 'Unwind with yoga, meditation, and spa therapies.',
	},
];

const ExperiencesSection = () => (
	<section className="section experiences-section" id="experiences">
		<div className="container">
			<h2>Experiences & Amenities</h2>
			<div className="experiences-list">
				{experiences.map((exp) => (
					<div className="experience-card" key={exp.title}>
						<div className="experience-icon">{exp.icon}</div>
						<h3>{exp.title}</h3>
						<p>{exp.caption}</p>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default ExperiencesSection;
