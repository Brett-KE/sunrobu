import electricalImage from "@/assets/electrical-panel.jpg";
import boreholeImage from "@/assets/borehole-solar.jpg";
import waterImage from "@/assets/water-treatment.jpg";

const projects = [
  {
    image: electricalImage,
    title: "Industrial Control System",
    category: "Electrical Automation",
  },
  {
    image: boreholeImage,
    title: "Solar Borehole Installation",
    category: "Solar & Water",
  },
  {
    image: waterImage,
    title: "RO Water Treatment Plant",
    category: "Water Engineering",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional installations across industrial, commercial, and agricultural sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium mb-2 text-primary-light">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
