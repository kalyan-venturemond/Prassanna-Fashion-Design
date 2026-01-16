import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Monitor, User, Video, CheckCircle, VideoOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

interface Webinar {
    id: number;
    title: string;
    trainer: string;
    date: string;
    time: string;
    mode: string;
    description: string;
    joinLink?: string;
}

const webinarsData: Webinar[] = [
    {
        id: 1,
        title: 'Basics of Fashion Design & Tailoring',
        trainer: 'Smt. Lakshmi Prassanna',
        date: 'January 25, 2026',
        time: '10:00 AM IST',
        mode: 'Online (Zoom)',
        description: 'Join our exclusive session to learn the fundamentals of fashion styling, fabric selection, and professional tailoring techniques. suitable for beginners.',
        joinLink: 'https://zoom.us/j/placeholder',
    },
    {
        id: 2,
        title: 'Saree Blouse Design Masterclass',
        trainer: 'Senior Instructor Anitha',
        date: 'February 1, 2026',
        time: '2:00 PM IST',
        mode: 'Online (Google Meet)',
        description: 'Master the art of measuring and cutting perfect saree blouses. Learn about different necklines and finishing touches.',
        joinLink: 'https://meet.google.com/placeholder',
    }
];

const WebinarCard = ({ webinar, isRegistered, onRegister }: { webinar: Webinar, isRegistered: boolean, onRegister: (id: number) => void }) => (
    <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
    >
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
            <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold uppercase tracking-wider">
                        {webinar.mode}
                    </span>
                    {isRegistered && (
                        <span className="flex items-center gap-1 text-green-600 text-xs font-medium">
                            <CheckCircle className="w-3 h-3" /> Registered
                        </span>
                    )}
                </div>

                <h2 className="text-2xl font-display text-foreground mb-3">
                    {webinar.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                    {webinar.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 text-sm text-foreground/80">
                        <User className="w-4 h-4 text-accent" />
                        <span>Trainer: {webinar.trainer}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground/80">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground/80">
                        <Clock className="w-4 h-4 text-accent" />
                        <span>{webinar.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground/80">
                        <Monitor className="w-4 h-4 text-accent" />
                        <span>{webinar.mode}</span>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="w-full md:w-64 flex flex-col gap-3 flex-shrink-0 bg-secondary/50 p-4 rounded-lg">
                <div className="text-center mb-2">
                    <span className="text-sm font-medium text-muted-foreground mr-2">Status: </span>
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-orange-100 text-orange-700">
                        Upcoming
                    </span>
                </div>

                {!isRegistered ? (
                    <Button
                        variant="fashion"
                        className="w-full"
                        onClick={() => onRegister(webinar.id)}
                    >
                        Register for Webinar
                    </Button>
                ) : (
                    <div className="flex flex-col gap-3">
                        <div className="p-3 bg-green-50 border border-green-100 rounded text-center">
                            <p className="text-sm text-green-700 font-medium">
                                You are registered!
                            </p>
                        </div>
                        <Button
                            variant="outline"
                            className="w-full opacity-70"
                            disabled={true}
                            title="Link activates 15 mins before session"
                        >
                            <VideoOff className="w-4 h-4 mr-2" />
                            Join Webinar
                        </Button>
                        <p className="text-xs text-center text-muted-foreground">
                            Link activates 15 mins before start
                        </p>
                    </div>
                )}
            </div>
        </div>
    </motion.div>
);

const Webinars = () => {
    const [registeredIds, setRegisteredIds] = useState<number[]>([]);

    const handleRegister = (id: number) => {
        // Simulate API call
        setTimeout(() => {
            setRegisteredIds(prev => [...prev, id]);
        }, 500);
    };

    const isRegistered = (id: number) => registeredIds.includes(id);

    const myWebinars = webinarsData.filter(w => isRegistered(w.id));
    const upcomingWebinars = webinarsData.filter(w => !isRegistered(w.id));

    return (
        <Layout>
            {/* Header Section */}
            <section className="relative pt-32 pb-20 bg-secondary">
                <div className="container-custom mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="badge-fashion mb-4 inline-block">Webinar Access</span>
                        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                            Views your registered webinars
                        </h1>
                        <p className="text-muted-foreground text-lg mb-8">
                            View your registered webinars and join live sessions when they start
                        </p>

                        <div className="flex justify-center">
                            <Button asChild variant="default" size="lg" className="bg-fashion-charcoal text-white hover:bg-black">
                                <Link to="/login">
                                    Go to Dashboard
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-custom mx-auto max-w-4xl space-y-16">

                    {/* Section A: My Webinars */}
                    {myWebinars.length > 0 && (
                        <div>
                            <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
                                <h2 className="font-display text-2xl text-foreground">My Webinars</h2>
                                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-sm font-semibold">
                                    {myWebinars.length}
                                </span>
                            </div>
                            <div className="space-y-8">
                                {myWebinars.map(webinar => (
                                    <WebinarCard
                                        key={webinar.id}
                                        webinar={webinar}
                                        isRegistered={true}
                                        onRegister={handleRegister}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Section B: Upcoming Webinars */}
                    <div>
                        <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
                            <h2 className="font-display text-2xl text-foreground">Upcoming Webinars</h2>
                            <span className="bg-secondary text-muted-foreground px-2 py-0.5 rounded-full text-sm font-semibold">
                                {upcomingWebinars.length}
                            </span>
                        </div>
                        {upcomingWebinars.length > 0 ? (
                            <div className="space-y-8">
                                {upcomingWebinars.map(webinar => (
                                    <WebinarCard
                                        key={webinar.id}
                                        webinar={webinar}
                                        isRegistered={false}
                                        onRegister={handleRegister}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="text-muted-foreground text-center py-8">
                                No new upcoming webinars at the moment.
                            </p>
                        )}
                    </div>

                </div>
            </section>
        </Layout>
    );
};

export default Webinars;
