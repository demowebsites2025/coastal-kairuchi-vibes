import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Users } from "lucide-react";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Coastal Journey
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bringing the authentic taste of coastal Karnataka to your plate, one dish at a time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeInUp} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Welcome to <span className="font-bold text-foreground">Coastal Kairuchi</span>, where
              the rich culinary heritage of coastal Karnataka comes alive. Our journey began with a
              simple yet powerful vision: to share the authentic flavors of Mangalorean cuisine with
              food lovers everywhere.
            </p>
            <p>
              Rooted in tradition and inspired by the coastal communities of Karnataka, we take pride
              in serving dishes that have been perfected over generations. From the bustling fish
              markets of Mangalore to your table, we ensure every ingredient is fresh, every spice
              is authentic, and every dish is prepared with love.
            </p>
            <p>
              The name "Kairuchi" itself embodies our philosophy - it represents the traditional
              basket used to carry fresh catch from the sea, symbolizing freshness, authenticity,
              and the connection between the coast and your plate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12"
          >
            What We Stand For
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Leaf,
                title: "Fresh Ingredients",
                desc: "We source the freshest seafood and locally grown spices to ensure authentic taste in every dish",
              },
              {
                icon: Heart,
                title: "Authentic Taste",
                desc: "Traditional recipes passed down through generations, preserving the genuine flavors of coastal cuisine",
              },
              {
                icon: Users,
                title: "Homely Feel",
                desc: "Every dish is prepared with the same care and love you'd find in a coastal Karnataka home",
              },
            ].map((value, index) => (
              <motion.div key={index} {...fadeInUp} transition={{ delay: index * 0.2 }}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Promise to You</h2>
            <p className="text-xl leading-relaxed opacity-90">
              At Coastal Kairuchi, we promise to deliver not just a meal, but an experience - a
              journey to the shores of Karnataka with every bite. We're committed to quality,
              authenticity, and the warmth that defines coastal hospitality.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
