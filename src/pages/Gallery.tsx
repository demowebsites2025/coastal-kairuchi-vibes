import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bg.jpg";
import idliCurry from "@/assets/idli-curry.jpg";
import grilledFish from "@/assets/grilled-fish.jpg";
import ricePlatter from "@/assets/rice-platter.jpg";
import vegThali from "@/assets/veg-thali.jpg";
import biryani from "@/assets/biryani.jpg";

const Gallery = () => {
  const fadeInUp = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const images = [
    { src: heroImage, alt: "Fresh Coastal Seafood Spread", caption: "Fresh Catch of the Day" },
    { src: idliCurry, alt: "Idli with Coastal Curry", caption: "Soft Idlis with Curry" },
    { src: grilledFish, alt: "Tandoori Fish Fry", caption: "Perfectly Grilled Fish" },
    { src: ricePlatter, alt: "Coastal Rice Platter", caption: "Complete Rice Meal" },
    { src: vegThali, alt: "Vegetarian Thali", caption: "Traditional Veg Thali" },
    { src: biryani, alt: "Seafood Biryani", caption: "Aromatic Seafood Biryani" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Our Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A visual journey through our authentic coastal delicacies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {images.map((image, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold text-lg p-6">{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ready to Taste These Delights?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the authentic flavors of coastal Karnataka at our location
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Mangalore,Karnataka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
            >
              Visit Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
