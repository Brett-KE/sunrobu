import { Building2, Users, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Sunrobu Africa
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a leading engineering company specializing in industrial electrical 
              installations, renewable solar energy solutions, and comprehensive water 
              treatment systems across Kenya and East Africa.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Under the leadership of <span className="font-semibold text-foreground">Eng. Urbanus Mbinyo</span>, 
              our team of certified engineers delivers high-quality, reliable solutions 
              for industrial, commercial, and agricultural applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From solar borehole systems to industrial automation control, we provide 
              end-to-end engineering services that power businesses and communities.
            </p>
          </div>

          {/* Right Content - Stats/Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-muted rounded-lg">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <Building2 className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Industry Experience
                </h3>
                <p className="text-muted-foreground">
                  Extensive track record in industrial and commercial electrical installations, 
                  automation systems, and renewable energy projects.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-muted rounded-lg">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                <Users className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Expert Team
                </h3>
                <p className="text-muted-foreground">
                  Certified professional engineers with specialized expertise in electrical 
                  systems, solar technology, and water treatment engineering.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-muted rounded-lg">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <Target className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  Driving sustainable development through innovative green energy solutions 
                  and reliable industrial infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
