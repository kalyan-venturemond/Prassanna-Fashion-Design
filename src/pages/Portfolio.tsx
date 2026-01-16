import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, Award, Users, Star, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

import designerPortrait from '@/assets/designer-portrait.jpg';
import portfolioBridal from '@/assets/portfolio-bridal.jpg';
import portfolioCouture from '@/assets/portfolio-couture.jpg';
import portfolioCasual from '@/assets/portfolio-casual.jpg';
import portfolioStudent from '@/assets/portfolio-student.jpg';
import fashionEvent from '@/assets/fashion-event.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const categories = ['All', 'Bridal', 'Couture', 'Casual', 'Student Works'];

const portfolioItems = [
  { id: 1, src: portfolioBridal, title: 'Bridal Lehenga', category: 'Bridal' },
  { id: 2, src: portfolioCouture, title: 'Designer Gown', category: 'Couture' },
  { id: 3, src: portfolioCasual, title: 'Modern Kurta', category: 'Casual' },
  { id: 4, src: portfolioStudent, title: 'Student Design', category: 'Student Works' },
  { id: 5, src: portfolioBridal, title: 'Wedding Saree', category: 'Bridal' },
  { id: 6, src: portfolioCouture, title: 'Evening Wear', category: 'Couture' },
  { id: 7, src: portfolioCasual, title: 'Daily Wear', category: 'Casual' },
  { id: 8, src: portfolioStudent, title: 'Graduation Project', category: 'Student Works' },
];

const events = [
  {
    id: 1,
    title: 'Hyderabad Fashion Week 2025',
    date: 'December 2025',
    venue: 'HITEX Convention Centre',
    image: fashionEvent,
    type: 'Fashion Show',
  },
  {
    id: 2,
    title: 'Student Graduation Show',
    date: 'October 2025',
    venue: 'Institute Campus',
    image: fashionEvent,
    type: 'Exhibition',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="badge-fashion mb-4 inline-block">Our Story</span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Crafting Fashion, Empowering Women
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover the vision, passion, and craftsmanship behind Prassanna Fashion Designs and Institute.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About the Designer */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={designerPortrait}
                alt="Smt. Lakshmi Prassanna Gollapudi"
                className="rounded-xl shadow-xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg hidden lg:block">
                <p className="font-display text-3xl">15+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="badge-fashion mb-4 inline-block">Meet Our Founder</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Smt. Lakshmi Prassanna Gollapudi
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Prassanna Fashion Institute was founded by Smt. Lakshmi Prassanna Gollapudi, a passionate fashion designer who completed her B.F. Tech in Fashion Design from NIFT Hyderabad. With a vision to redefine fashion beyond luxury and make it accessible to every woman, she is dedicated to empowering women through skill development.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium text-foreground">NIFT Hyderabad</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Students Trained</p>
                    <p className="font-medium text-foreground">500+</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of experience, she has trained thousands of women across the twin cities. Many of her alumni have successfully started their own boutiques and tailoring businesses. She is known for simplifying complex tailoring concepts with creativity and making fashion education accessible to all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-20 bg-primary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <Quote className="w-12 h-12 text-primary-foreground/30 mx-auto mb-6" />
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-foreground italic leading-relaxed mb-6">
              "When a woman becomes strong and independent, the entire family becomes strong."
            </blockquote>
            <p className="text-primary-foreground/80">
              — Smt. Lakshmi Prassanna Gollapudi
            </p>
            <div className="w-20 h-0.5 bg-primary-foreground/30 mx-auto mt-8" />
            <p className="text-primary-foreground/70 mt-6 max-w-2xl mx-auto">
              Our mission is empowering women to stand on their own feet, build confidence, and create a unique identity in fashion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge-fashion mb-4 inline-block">Our Work</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Collections & Creations
            </h2>
            <div className="divider-elegant mt-4" />
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative group overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs text-primary-foreground/70 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-primary-foreground font-display text-lg">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Media & Events */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge-fashion mb-4 inline-block">Media & Events</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Fashion Shows & Exhibitions
            </h2>
            <div className="divider-elegant mt-4" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {events.map((event) => (
              <motion.div
                key={event.id}
                variants={fadeInUp}
                className="card-elevated overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <span className="badge-fashion mb-3 inline-block">{event.type}</span>
                  <h3 className="font-display text-xl text-foreground mb-3">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-fashion-charcoal">
        <div className="container-custom mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">
              Ready to Learn From the Best?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join our courses and learn fashion design from an industry-proven professional.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/courses">
                Explore Our Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
