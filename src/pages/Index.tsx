import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Award, Clock, MapPin, Calendar, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import RegistrationModal from '@/components/modals/RegistrationModal';
import PaymentModal from '@/components/modals/PaymentModal';

// Images
import heroImage from '@/assets/hero-fashion.jpg';
import portfolioBridal from '@/assets/portfolio-bridal.jpg';
import portfolioCouture from '@/assets/portfolio-couture.jpg';
import portfolioCasual from '@/assets/portfolio-casual.jpg';
import portfolioStudent from '@/assets/portfolio-student.jpg';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';
import studentsLearning from '@/assets/students-learning.jpg';

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

const programs = [
  {
    id: 1,
    name: 'Fashion Design Fundamentals',
    duration: '1 Month',
    mode: 'Online',
    price: 4999,
    description: 'Perfect for beginners. Learn the basics of fashion design, sketching, and fabric selection.',
  },
  {
    id: 2,
    name: 'Professional Tailoring Course',
    duration: '3 Months',
    mode: 'Offline',
    price: 14999,
    description: 'Master professional tailoring techniques with hands-on training and real-world projects.',
  },
  {
    id: 3,
    name: 'Advanced Fashion Design',
    duration: '6 Months',
    mode: 'Hybrid',
    price: 29999,
    description: 'Comprehensive program covering all aspects of fashion design from concept to creation.',
  },
];

const webinars = [
  {
    id: 1,
    title: 'Introduction to Fashion Design',
    date: 'January 25, 2026',
    time: '10:00 AM IST',
    mode: 'Online (Zoom)',
    fee: 0,
    isFree: true,
  },
  {
    id: 2,
    title: 'Saree Blouse Design Masterclass',
    date: 'February 1, 2026',
    time: '2:00 PM IST',
    mode: 'Online (Zoom)',
    fee: 499,
    isFree: false,
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    image: testimonial1,
    text: 'Lakshmi Ma\'am made learning so easy! I started my own boutique within 6 months of completing the course.',
    course: 'Advanced Fashion Design',
  },
  {
    id: 2,
    name: 'Anitha Reddy',
    image: testimonial2,
    text: 'The hands-on training was excellent. I now design for local exhibitions and fashion shows.',
    course: 'Professional Tailoring',
  },
  {
    id: 3,
    name: 'Sunitha Kumari',
    image: testimonial3,
    text: 'As a homemaker, this course gave me a new identity. I\'m now financially independent.',
    course: '3 Month Course',
  },
];

const portfolioImages = [
  { src: portfolioBridal, alt: 'Bridal Collection' },
  { src: portfolioCouture, alt: 'Couture Design' },
  { src: portfolioCasual, alt: 'Casual Wear' },
  { src: portfolioStudent, alt: 'Student Work' },
];

const Index = () => {
  const [registrationModal, setRegistrationModal] = useState<{
    isOpen: boolean;
    type: 'webinar' | 'course' | 'workshop';
    title: string;
    isPaid: boolean;
    price: number;
  }>({
    isOpen: false,
    type: 'webinar',
    title: '',
    isPaid: false,
    price: 0,
  });

  const [paymentModal, setPaymentModal] = useState<{
    isOpen: boolean;
    courseName: string;
    price: number;
  }>({
    isOpen: false,
    courseName: '',
    price: 0,
  });

  const openWebinarModal = (webinar: typeof webinars[0]) => {
    setRegistrationModal({
      isOpen: true,
      type: 'webinar',
      title: webinar.title,
      isPaid: !webinar.isFree,
      price: webinar.fee,
    });
  };

  const openPaymentModal = (program: typeof programs[0]) => {
    setPaymentModal({
      isOpen: true,
      courseName: program.name,
      price: program.price,
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Fashion Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fashion-charcoal/90 via-fashion-charcoal/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              15+ Years of Excellence
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
              Learn Fashion Design from an <span className="text-accent">Industry-Proven</span> Designer
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed">
              Professional fashion education, real-world exposure & career-focused training. Empowering women to build their own fashion careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" asChild>
                <Link to="/courses">
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                asChild
              >
                <Link to="/webinars">
                  <Play className="mr-2 w-5 h-5" />
                  Join Free Webinar
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom mx-auto px-4 md:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Users, value: '500+', label: 'Students Trained' },
              { icon: Award, value: '15+', label: 'Years Experience' },
              { icon: Star, value: '100+', label: 'Success Stories' },
              { icon: Clock, value: '1000+', label: 'Hours of Training' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-foreground mb-1">{stat.value}</h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge-fashion mb-4 inline-block">Our Programs</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Transform Your Passion Into a Career
            </h2>
            <div className="divider-elegant mt-4" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {programs.map((program) => (
              <motion.div
                key={program.id}
                variants={fadeInUp}
                className="card-elevated p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="badge-fashion">{program.mode}</span>
                  <span className="text-sm text-muted-foreground">{program.duration}</span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{program.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="border-t border-border pt-4 mt-auto">
                  <p className="text-2xl font-display text-primary mb-4">
                    ₹{program.price.toLocaleString('en-IN')}
                  </p>
                  <div className="flex gap-3">
                    <Button
                      variant="fashion"
                      className="flex-1"
                      onClick={() => setRegistrationModal({
                        isOpen: true,
                        type: 'course',
                        title: program.name,
                        isPaid: false,
                        price: 0,
                      })}
                    >
                      Register
                    </Button>
                    <Button
                      variant="gold"
                      className="flex-1"
                      onClick={() => openPaymentModal(program)}
                    >
                      Pay Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/courses">
                View All Courses
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About / Image Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={studentsLearning}
                alt="Students learning fashion design"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge-fashion mb-4 inline-block">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Industry-Led Training for Real Success
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our courses are designed by Smt. Lakshmi Prassanna Gollapudi, a NIFT graduate with over 15 years of industry experience. We focus on practical skills that lead to real career opportunities.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Hands-on training with modern equipment',
                  'Small batch sizes for personal attention',
                  'Industry exposure and internship opportunities',
                  'Lifetime support and alumni network',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="fashion" size="lg" asChild>
                <Link to="/portfolio">Meet Our Founder</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
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
              Featured Collections
            </h2>
            <div className="divider-elegant mt-4" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-primary-foreground font-medium">{image.alt}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Button variant="fashion" size="lg" asChild>
              <Link to="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge-fashion mb-4 inline-block">Testimonials</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              What Our Students Say
            </h2>
            <div className="divider-elegant mt-4" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                className="card-elevated p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-display text-lg text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge-fashion mb-4 inline-block">Upcoming Events</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Webinars & Workshops
            </h2>
            <div className="divider-elegant mt-4" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {webinars.map((webinar) => (
              <motion.div
                key={webinar.id}
                variants={fadeInUp}
                className="card-elevated p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2">{webinar.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {webinar.isFree ? (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          FREE
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                          ₹{webinar.fee}
                        </span>
                      )}
                      <span className="badge-fashion">{webinar.mode}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{webinar.time}</span>
                  </div>
                </div>
                <Button
                  variant="fashion"
                  className="w-full"
                  asChild
                >
                  <Link to="/webinars">Register Now</Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-fashion-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
              Seats Are Limited. Start Your Fashion Journey Today.
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join hundreds of successful women who transformed their lives through fashion design education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/courses">
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => {
                  const whatsappNumber = '916302458752';
                  const message = encodeURIComponent('Hello! I am interested in learning more about your fashion design courses.');
                  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
                }}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <RegistrationModal
        isOpen={registrationModal.isOpen}
        onClose={() => setRegistrationModal({ ...registrationModal, isOpen: false })}
        type={registrationModal.type}
        title={registrationModal.title}
        isPaid={registrationModal.isPaid}
        price={registrationModal.price}
      />

      <PaymentModal
        isOpen={paymentModal.isOpen}
        onClose={() => setPaymentModal({ ...paymentModal, isOpen: false })}
        courseName={paymentModal.courseName}
        price={paymentModal.price}
      />
    </Layout>
  );
};

export default Index;
