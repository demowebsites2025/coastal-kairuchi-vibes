import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import idliCurry from "@/assets/idli-curry.jpg";
import grilledFish from "@/assets/grilled-fish.jpg";
import ricePlatter from "@/assets/rice-platter.jpg";
import vegThali from "@/assets/veg-thali.jpg";
import biryani from "@/assets/biryani.jpg";

const Menu = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const menuCategories = [
    {
      title: "Seafood Specials",
      dishes: [
        {
          name: "Idli with Coastal Curry",
          image: idliCurry,
          desc: "Soft steamed idlis served with authentic coastal curry and sides",
          spicy: "Medium",
        },
        {
          name: "Tandoori Fish Fry",
          image: grilledFish,
          desc: "Fresh fish marinated in coastal spices and grilled to perfection",
          spicy: "High",
        },
        {
          name: "Coastal Rice Platter",
          image: ricePlatter,
          desc: "Traditional rice meal with fish fry, curry, pickles and accompaniments",
          spicy: "Medium",
        },
      ],
    },
    {
      title: "Veg Delights",
      dishes: [
        {
          name: "Coastal Veg Thali",
          image: vegThali,
          desc: "Complete meal with rice, sambar, vegetables, and traditional sides",
          spicy: "Mild",
        },
      ],
    },
    {
      title: "Biryani & Meals",
      dishes: [
        {
          name: "Coastal Seafood Biryani",
          image: biryani,
          desc: "Aromatic rice with prawns and fish, cooked with coastal spices",
          spicy: "Medium",
        },
      ],
    },
  ];

  const getSpicyBadgeColor = (level: string) => {
    switch (level) {
      case "High":
        return "bg-destructive text-destructive-foreground";
      case "Medium":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
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
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Our Menu</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our selection of authentic coastal delicacies, crafted with fresh ingredients
              and traditional recipes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      {menuCategories.map((category, catIndex) => (
        <section key={catIndex} className={`py-16 ${catIndex % 2 === 0 ? "bg-background" : "bg-muted"}`}>
          <div className="container mx-auto px-4">
            <motion.h2
              {...fadeInUp}
              className="text-4xl font-bold text-center text-foreground mb-12"
            >
              {category.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {category.dishes.map((dish, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all group h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className={`absolute top-3 right-3 ${getSpicyBadgeColor(dish.spicy)}`}>
                        {dish.spicy} Spice
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{dish.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{dish.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-4">Craving These Flavors?</h2>
            <p className="text-xl mb-8 opacity-90">Visit us to enjoy authentic coastal cuisine</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Mangalore,Karnataka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
            >
              Visit Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
