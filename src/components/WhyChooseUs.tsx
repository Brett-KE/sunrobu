import { Award, Wrench, Shield, Leaf } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certified Engineers",
    description: "Licensed and experienced professional engineers with proven expertise",
  },
  {
    icon: Wrench,
    title: "Quality Workmanship",
    description: "High-standard installations using premium equipment and materials",
  },
  {
    icon: Shield,
    title: "Reliable Solutions",
    description: "Dependable power and water systems built for long-term performance",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Technology",
    description: "Sustainable renewable energy and efficient water treatment systems",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Sunrobu Africa?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted engineering excellence for your industrial and commercial needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Icon className="text-white w-10 h-10" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
