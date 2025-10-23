import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Fish, Heart, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import idliCurry from "@/assets/idli-curry.jpg";
import grilledFish from "@/assets/grilled-fish.jpg";
import ricePlatter from "@/assets/rice-platter.jpg";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Taste of the Coast,
            <br />
            <span className="text-accent">Served Fresh!</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            Authentic Mangalorean Seafood & Regional Delicacies
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full">
              <a href="https://www.google.com/maps/search/?api=1&query=Mangalore,Karnataka" target="_blank" rel="noopener noreferrer">
                Visit Us
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full bg-white hover:bg-white/90">
              <Link to="/menu">Explore Menu</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Fish, number: "50+", label: "Authentic Dishes" },
              { icon: Heart, number: "1000+", label: "Happy Customers" },
              { icon: Utensils, number: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div key={index} {...fadeInUp} transition={{ delay: index * 0.2 }}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                    <p className="text-muted-foreground text-lg">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Coastal Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bringing the authentic flavors of Karnataka's coast to your plate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <motion.div {...fadeInUp}>
              <img
                src={idliCurry}
                alt="Idli with Curry"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Rooted in Tradition, Served with Love
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Coastal Kairuchi brings you the genuine taste of Mangalorean coastal cuisine,
                crafted with fresh ingredients and traditional recipes passed down through
                generations.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From our signature fish curries to authentic prawn preparations, every dish
                tells a story of coastal Karnataka's rich culinary heritage.
              </p>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Customer Favorites
            </h2>
            <p className="text-xl text-muted-foreground">
              Taste the dishes everyone loves
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Idli with Coastal Curry", image: idliCurry, desc: "Soft idlis paired with authentic coastal curry" },
              { name: "Tandoori Fish Fry", image: grilledFish, desc: "Perfectly marinated and grilled fish with traditional spices" },
              { name: "Coastal Rice Platter", image: ricePlatter, desc: "Complete meal with rice, fish fry, curry and sides" },
            ].map((dish, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{dish.name}</h3>
                    <p className="text-muted-foreground mb-4">{dish.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Coastal Flavors?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Visit us and taste authentic Mangalorean cuisine at our location
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full">
              <a href="https://www.google.com/maps/search/?api=1&query=Mangalore,Karnataka" target="_blank" rel="noopener noreferrer">
                Visit Us
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
