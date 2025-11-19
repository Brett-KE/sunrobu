import { Zap, Gauge, Sun, Droplets, Cog, Sprout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import industrialElectricalImg from "@/assets/service-industrial-electrical.jpg";
import automationImg from "@/assets/service-automation.jpg";
import solarImg from "@/assets/service-solar.jpg";
import waterTreatmentImg from "@/assets/service-water-treatment.jpg";
import boreholeImg from "@/assets/service-borehole.jpg";
import irrigationImg from "@/assets/service-irrigation.jpg";

const services = [
  {
    icon: Zap,
    title: "Industrial Electrical Installation",
    description: "Complete electrical systems for commercial and industrial facilities with certified engineering.",
    color: "text-primary",
    image: industrialElectricalImg,
  },
  {
    icon: Gauge,
    title: "Electrical Automation Control",
    description: "Advanced automation systems, instrumentation, and industrial heating control solutions.",
    color: "text-secondary",
    image: automationImg,
  },
  {
    icon: Sun,
    title: "Solar Energy Solutions",
    description: "Borehole solarization, solar backup systems, and solar water heating installations.",
    color: "text-primary-light",
    image: solarImg,
  },
  {
    icon: Droplets,
    title: "Water Treatment Systems",
    description: "Industrial and commercial RO systems, water purification, and treatment plants.",
    color: "text-secondary-light",
    image: waterTreatmentImg,
  },
  {
    icon: Cog,
    title: "Borehole Engineering",
    description: "Complete borehole pump installation, motor services, and solar pump sizing.",
    color: "text-accent",
    image: boreholeImg,
  },
  {
    icon: Sprout,
    title: "Irrigation Systems",
    description: "Professional drip irrigation system design and installation for agriculture.",
    color: "text-primary",
    image: irrigationImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive engineering solutions for industrial, commercial, and agricultural applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-lg bg-background/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon className={`${service.color} w-6 h-6`} strokeWidth={2} />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
