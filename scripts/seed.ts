import mongoose from "mongoose";
import Service from "../src/models/Service";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/makeup_app";

const newServices = [
  // Facials
  {
    name: "Hydrating Facial",
    price: 450,
    duration: "1 hour",
    category: "Facials",
    description: "Deeply moisturizing facial using premium hyaluronic acid and essential oils to restore skin's natural glow.",
    content: "<p>Deeply moisturizing facial using premium hyaluronic acid and essential oils to restore skin's natural glow.</p>",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Anti-Aging Facial",
    price: 750,
    duration: "1.5 hours",
    category: "Facials",
    description: "Advanced anti-aging treatment targeting fine lines and promoting collagen production for youthful, radiant skin.",
    content: "<p>Advanced anti-aging treatment targeting fine lines and promoting collagen production for youthful, radiant skin.</p>",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Deep Cleansing Facial",
    price: 550,
    duration: "1 hour",
    category: "Facials",
    description: "Thorough cleansing, exfoliation, and extraction to clear pores and refine skin texture.",
    content: "<p>Thorough cleansing, exfoliation, and extraction to clear pores and refine skin texture.</p>",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Brightening Facial",
    price: 600,
    duration: "1 hour",
    category: "Facials",
    description: "Vitamin C infused facial designed to even out skin tone and leave you with a luminous complexion.",
    content: "<p>Vitamin C infused facial designed to even out skin tone and leave you with a luminous complexion.</p>",
    image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },

  // Massage Therapy
  {
    name: "Swedish Massage",
    price: 600,
    duration: "1 hour",
    category: "Massage Therapy",
    description: "Classic relaxation massage using long, smooth strokes to relieve tension and improve circulation.",
    content: "<p>Classic relaxation massage using long, smooth strokes to relieve tension and improve circulation.</p>",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Deep Tissue Massage",
    price: 750,
    duration: "1.5 hours",
    category: "Massage Therapy",
    description: "Intense therapeutic massage focusing on deep muscle layers to release chronic tension.",
    content: "<p>Intense therapeutic massage focusing on deep muscle layers to release chronic tension.</p>",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Hot Stone Massage",
    price: 850,
    duration: "1.5 hours",
    category: "Massage Therapy",
    description: "Luxurious treatment using smooth, heated stones to deeply relax muscles and ease stress.",
    content: "<p>Luxurious treatment using smooth, heated stones to deeply relax muscles and ease stress.</p>",
    image: "https://images.unsplash.com/photo-1600334129128-685054110de4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Aromatherapy Massage",
    price: 650,
    duration: "1 hour",
    category: "Massage Therapy",
    description: "Relaxing massage utilizing customized essential oil blends to enhance physical and emotional well-being.",
    content: "<p>Relaxing massage utilizing customized essential oil blends to enhance physical and emotional well-being.</p>",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },

  // Body Treatments
  {
    name: "Body Scrub",
    price: 450,
    duration: "45 minutes",
    category: "Body Treatments",
    description: "Invigorating full-body exfoliation to remove dead skin cells and reveal smooth, glowing skin.",
    content: "<p>Invigorating full-body exfoliation to remove dead skin cells and reveal smooth, glowing skin.</p>",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Detox Wrap",
    price: 600,
    duration: "1 hour",
    category: "Body Treatments",
    description: "Purifying body wrap utilizing mineral-rich clay to draw out toxins and nourish the skin.",
    content: "<p>Purifying body wrap utilizing mineral-rich clay to draw out toxins and nourish the skin.</p>",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Skin Rejuvenation",
    price: 800,
    duration: "1.5 hours",
    category: "Body Treatments",
    description: "Complete body treatment including scrub, wrap, and deep moisturization for ultimate skin health.",
    content: "<p>Complete body treatment including scrub, wrap, and deep moisturization for ultimate skin health.</p>",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },

  // Nail Services
  {
    name: "Luxury Manicure",
    price: 250,
    duration: "1 hour",
    category: "Nail Services",
    description: "Premium nail shaping, cuticle care, hand massage, and flawless polish application.",
    content: "<p>Premium nail shaping, cuticle care, hand massage, and flawless polish application.</p>",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Luxury Pedicure",
    price: 350,
    duration: "1 hour",
    category: "Nail Services",
    description: "Indulgent foot treatment with exfoliation, massage, nail care, and polish.",
    content: "<p>Indulgent foot treatment with exfoliation, massage, nail care, and polish.</p>",
    image: "https://images.unsplash.com/photo-1516975080661-468e7f1d43a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Gel Nails",
    price: 300,
    duration: "1 hour",
    category: "Nail Services",
    description: "Long-lasting gel polish application available in a variety of elegant shades.",
    content: "<p>Long-lasting gel polish application available in a variety of elegant shades.</p>",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },

  // Beauty Treatments
  {
    name: "Eyebrow Shaping",
    price: 150,
    duration: "30 minutes",
    category: "Beauty Treatments",
    description: "Precision eyebrow shaping to frame your face perfectly.",
    content: "<p>Precision eyebrow shaping to frame your face perfectly.</p>",
    image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Eyelash Extensions",
    price: 450,
    duration: "2 hours",
    category: "Beauty Treatments",
    description: "Customized eyelash extensions for a natural or dramatic look, applied by our expert technicians.",
    content: "<p>Customized eyelash extensions for a natural or dramatic look, applied by our expert technicians.</p>",
    image: "https://images.unsplash.com/photo-1588636171850-2f9633e6b7d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Makeup Application",
    price: 500,
    duration: "1.5 hours",
    category: "Beauty Treatments",
    description: "Professional makeup application for special events or an evening out.",
    content: "<p>Professional makeup application for special events or an evening out.</p>",
    image: "https://images.unsplash.com/photo-1512496015851-a9089904d909?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },

  // Hair Services
  {
    name: "Hair Treatment",
    price: 450,
    duration: "1 hour",
    category: "Hair Services",
    description: "Deep conditioning and restorative treatment for damaged or dry hair.",
    content: "<p>Deep conditioning and restorative treatment for damaged or dry hair.</p>",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Hair Styling",
    price: 350,
    duration: "1 hour",
    category: "Hair Services",
    description: "Expert styling, blowouts, and updos tailored to your preference.",
    content: "<p>Expert styling, blowouts, and updos tailored to your preference.</p>",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f10cfb1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Hair Coloring",
    price: 850,
    duration: "2.5 hours",
    category: "Hair Services",
    description: "Premium hair coloring services including highlights, balayage, and full color.",
    content: "<p>Premium hair coloring services including highlights, balayage, and full color.</p>",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },

  // Wellness Packages
  {
    name: "Couples Spa Package",
    price: 2500,
    duration: "3 hours",
    category: "Wellness Packages",
    description: "A romantic retreat featuring side-by-side massages, facials, and complimentary champagne.",
    content: "<p>A romantic retreat featuring side-by-side massages, facials, and complimentary champagne.</p>",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Bridal Spa Package",
    price: 3500,
    duration: "4 hours",
    category: "Wellness Packages",
    description: "The ultimate preparation for your special day: glowing facial, body scrub, massage, and full nail services.",
    content: "<p>The ultimate preparation for your special day: glowing facial, body scrub, massage, and full nail services.</p>",
    image: "https://images.unsplash.com/photo-1512496015851-a9089904d909?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Executive Relaxation Package",
    price: 1800,
    duration: "2.5 hours",
    category: "Wellness Packages",
    description: "Designed for the busy professional: deep tissue massage followed by a revitalizing facial.",
    content: "<p>Designed for the busy professional: deep tissue massage followed by a revitalizing facial.</p>",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  },
  {
    name: "Full Day Luxury Retreat",
    price: 4500,
    duration: "6 hours",
    category: "Wellness Packages",
    description: "A complete day of pampering including all premium treatments and a healthy gourmet lunch.",
    content: "<p>A complete day of pampering including all premium treatments and a healthy gourmet lunch.</p>",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Gaborone"
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB.");

    // Delete existing services
    await Service.deleteMany({});
    console.log("Cleared existing services.");

    // Insert new services
    await Service.insertMany(newServices);
    console.log(`Successfully seeded ${newServices.length} luxury services.`);

    process.exit(0);
  } catch (error) {
    console.error("Error seeding services:", error);
    process.exit(1);
  }
}

seed();
