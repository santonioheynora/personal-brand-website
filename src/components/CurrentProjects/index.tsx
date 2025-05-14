// React is used implicitly for JSX
import './styles.css';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  vision: string;
  imageUrl: string;
  url: string;
  ctaText: string;
}

const CurrentProjects = (): JSX.Element => {
  // No need for hover state as the CSS handles the hover effects
  
  const projects: ProjectData[] = [
    {
      id: 'heynora',
      title: 'HeyNora',
      description: 'Your real-time music co-pilot and companion for making music. Built for producers, DJs, and anyone with a beat in their head.',
      vision: 'Everyone can finish a song — even if they\'ve never made music before.',
      imageUrl: '/src/assets/images/HeyNora-preview.png', // Purple site with headphones
      url: 'https://heynora.ai',
      ctaText: 'Visit Site'
    },
    {
      id: 'summitsummary',
      title: 'SummitSummary',
      description: 'An RFP Executive Summary Generator. Built for proposal managers who want to win more, write less.',
      vision: 'Save hours on every bid — and finally kill the blank page.',
      imageUrl: '/src/assets/images/SummitSummary-preview.png', // Save hours on proposal writing
      url: '#',
      ctaText: 'Visit Site'
    },
    {
      id: 'resumeplug',
      title: 'ResumePlug',
      description: 'A resume chatbot that actually improves your resume on the spot.',
      vision: 'Make everyone look hire-ready, fast — no resume consultant needed.',
      imageUrl: '/src/assets/images/ResumePlug-preview.png', // Optimize your resume
      url: 'https://resumeplug.netlify.app',
      ctaText: 'Visit Site'
    }
  ];

  return (
    <section id="current-projects" className="current-projects-section">
      <div className="current-projects-container">
        <div className="current-projects-header">
          <h2 className="current-projects-title">Creating Tools for Everyday Creators</h2>
          <p className="current-projects-subtitle">
            These are not just products, they're building blocks for communities. 
            I'm designing tech that empowers people to do things they never thought possible,
            from writing better proposals to finishing their first track.
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card"
            >
              <div className="project-card-content">
                <div className="project-preview">
                  <img 
                    src={project.imageUrl} 
                    alt={`${project.title} preview`} 
                    onError={(e) => {
                      // Simple fallback - hide the image on error
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-vision">
                  <span>Vision:</span> {project.vision}
                </p>
                <a 
                  href={project.url} 
                  className="project-cta"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {project.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentProjects;
