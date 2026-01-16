import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Monitor, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import RegistrationModal from '@/components/modals/RegistrationModal';
import PaymentModal from '@/components/modals/PaymentModal';

import studentsLearning from '@/assets/students-learning.jpg';
import portfolioBridal from '@/assets/portfolio-bridal.jpg';
import portfolioCouture from '@/assets/portfolio-couture.jpg';
import portfolioCasual from '@/assets/portfolio-casual.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const courses = [
  {
    id: 1,
    name: '1 Month Foundation Course',
    duration: '1 Month',
    mode: 'Online & Offline',
    price: 4999,
    image: portfolioCasual,
    description: 'Perfect for beginners who want to explore fashion design.',
    highlights: [
      'Basic sketching and illustration',
      'Introduction to fabrics and textiles',
      'Understanding body measurements',
      'Basic stitching techniques',
      'Pattern making fundamentals',
      'Certificate of completion',
    ],
  },
  {
    id: 2,
    name: '3 Month Professional Course',
    duration: '3 Months',
    mode: 'Offline (Hyderabad)',
    price: 14999,
    image: portfolioCouture,
    description: 'Comprehensive training for those serious about fashion design.',
    highlights: [
      'Advanced pattern making',
      'Blouse, saree, and dress construction',
      'Embroidery and embellishment techniques',
      'Fashion illustration and CAD',
      'Portfolio development',
      'Industry exposure visits',
      'Internship opportunities',
      'Professional certification',
    ],
    popular: true,
  },
  {
    id: 3,
    name: '6 Month Advanced Diploma',
    duration: '6 Months',
    mode: 'Hybrid (Online + Offline)',
    price: 29999,
    image: portfolioBridal,
    description: 'Complete fashion education for aspiring professionals.',
    highlights: [
      'Everything in 3 Month course',
      'Bridal and couture designing',
      'Business and entrepreneurship skills',
      'Fashion show participation',
      'One-on-one mentorship',
      'Placement assistance',
      'Lifetime alumni support',
      'Advanced diploma certificate',
    ],
  },
];

const CourseDetails = () => {
  const [registrationModal, setRegistrationModal] = useState<{
    isOpen: boolean;
    title: string;
  }>({
    isOpen: false,
    title: '',
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
            <span className="badge-fashion mb-4 inline-block">Our Courses</span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Choose Your Path to Fashion Excellence
            </h1>
            <p className="text-muted-foreground text-lg">
              Industry-designed curriculum with practical training, real-world projects, and career support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="space-y-16">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={course.image}
                    alt={course.name}
                    className="rounded-xl shadow-lg w-full aspect-[4/5] object-cover"
                  />
                  {course.popular && (
                    <div className="absolute top-4 right-4 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Monitor className="w-4 h-4" />
                      {course.mode}
                    </span>
                  </div>

                  <h2 className="font-display text-3xl text-foreground mb-4">
                    {course.name}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {course.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-4">What You'll Learn:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-end gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Course Fee</p>
                      <p className="font-display text-3xl text-primary">
                        ₹{course.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      EMI options available
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="fashion"
                      size="lg"
                      onClick={() => setRegistrationModal({
                        isOpen: true,
                        title: course.name,
                      })}
                    >
                      Enroll Now
                    </Button>
                    <Button
                      variant="gold"
                      size="lg"
                      onClick={() => setPaymentModal({
                        isOpen: true,
                        courseName: course.name,
                        price: course.price,
                      })}
                    >
                      Pay Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={studentsLearning}
                alt="Fashion design classroom"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="badge-fashion mb-4 inline-block">Why Join Us</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                More Than Just a Course
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: 'Small Batch Sizes',
                    desc: 'Maximum 10 students per batch for personalized attention',
                  },
                  {
                    icon: Monitor,
                    title: 'Modern Equipment',
                    desc: 'Latest sewing machines and design tools',
                  },
                  {
                    icon: CheckCircle,
                    title: 'Industry Certification',
                    desc: 'Recognized certification upon completion',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
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
              Have Questions? We're Here to Help
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Schedule a free counseling session with our admissions team to find the perfect course for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gold"
                size="xl"
                onClick={() => {
                  const whatsappNumber = '916302458752';
                  const message = encodeURIComponent('Hello! I would like to schedule a free counseling session.');
                  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
                }}
              >
                Schedule Free Counseling
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <RegistrationModal
        isOpen={registrationModal.isOpen}
        onClose={() => setRegistrationModal({ ...registrationModal, isOpen: false })}
        type="course"
        title={registrationModal.title}
        isPaid={false}
        price={0}
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

export default CourseDetails;
