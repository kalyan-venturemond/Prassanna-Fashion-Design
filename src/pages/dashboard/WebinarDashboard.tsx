import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Monitor, User, CheckCircle, Video, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Types
type WebinarStatus = 'upcoming' | 'live' | 'completed';

interface Webinar {
    id: number;
    title: string;
    trainer: string;
    date: string;
    time: string;
    platform: string;
    status: WebinarStatus;
    description: string;
}

// Mock Data
const initialWebinars: Webinar[] = [
    {
        id: 1,
        title: 'Saree Blouse Design Masterclass',
        trainer: 'Senior Instructor Anitha',
        date: 'February 1, 2026',
        time: '2:00 PM IST',
        platform: 'Google Meet',
        status: 'upcoming',
        description: 'Master the art of measuring and cutting perfect saree blouses.',
    },
    {
        id: 2,
        title: 'Advanced Embroidery Techniques',
        trainer: 'Smt. Lakshmi Prassanna',
        date: 'February 5, 2026',
        time: '11:00 AM IST',
        platform: 'Zoom',
        status: 'upcoming',
        description: 'Learn intricate embroidery stitches and embellishment methods.',
    },
    {
        id: 3,
        title: 'Fabric Science & Selection',
        trainer: 'Smt. Lakshmi Prassanna',
        date: 'January 10, 2026',
        time: '10:00 AM IST',
        platform: 'Zoom',
        status: 'completed',
        description: 'Understanding different fabrics and their suitable applications.',
    },
    {
        id: 4,
        title: 'Live Q&A: Fashion Careers',
        trainer: 'Industry Experts',
        date: 'Today',
        time: 'Now',
        platform: 'Zoom',
        status: 'live',
        description: 'Join us now for a live session on career opportunities in fashion.',
    }
];

const WebinarDashboard = () => {
    const [registeredIds, setRegisteredIds] = useState<number[]>([]);
    const [activeTab, setActiveTab] = useState('upcoming');

    const handleRegister = (id: number) => {
        // Simulate registration
        setRegisteredIds(prev => [...prev, id]);
    };

    const isRegistered = (id: number) => registeredIds.includes(id);

    const getStatusBadge = (status: WebinarStatus, registered: boolean) => {
        if (status === 'live') {
            return (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700 flex items-center gap-1 animate-pulse">
                    Live Now
                </span>
            );
        }
        if (status === 'completed') {
            return (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                    Completed
                </span>
            );
        }
        if (registered) {
            return (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Registered
                </span>
            );
        }
        return (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                Upcoming
            </span>
        );
    };

    const filterWebinars = (tab: string) => {
        if (tab === 'live') return initialWebinars.filter(w => w.status === 'live');
        if (tab === 'completed') return initialWebinars.filter(w => w.status === 'completed');
        // Default to upcoming
        return initialWebinars.filter(w => w.status === 'upcoming');
    };

    const renderCard = (webinar: Webinar) => {
        const registered = isRegistered(webinar.id);

        return (
            <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                            {getStatusBadge(webinar.status, registered)}
                            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                                {webinar.platform}
                            </span>
                        </div>

                        <h3 className="text-xl font-display text-gray-900 mb-2">
                            {webinar.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {webinar.description}
                        </p>

                        <div className="flex flex-wrap text-sm text-gray-500 gap-x-6 gap-y-2">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-gray-400" />
                                {webinar.trainer}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                {webinar.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-gray-400" />
                                {webinar.time}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-end md:w-48 flex-shrink-0">
                        {webinar.status === 'live' ? (
                            <Button
                                className="w-full bg-red-600 hover:bg-red-700 text-white animate-pulse"
                                onClick={() => window.open('https://meet.google.com', '_blank')}
                            >
                                <Video className="w-4 h-4 mr-2" />
                                Join Now
                            </Button>
                        ) : webinar.status === 'completed' ? (
                            <Button variant="secondary" disabled className="w-full">
                                Ended
                            </Button>
                        ) : registered ? (
                            <Button variant="outline" disabled className="w-full border-green-200 text-green-700 bg-green-50">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Registered
                            </Button>
                        ) : (
                            <Button
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                onClick={() => handleRegister(webinar.id)}
                            >
                                Register
                            </Button>
                        )}
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <DashboardLayout>
            <div className="mb-8">
                <h2 className="text-2xl font-display text-gray-900">My Webinars</h2>
                <p className="text-gray-500">View and manage your webinar registrations</p>
            </div>

            <Tabs defaultValue="upcoming" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="mb-6 bg-gray-100 p-1">
                    <TabsTrigger value="upcoming" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                        Upcoming
                    </TabsTrigger>
                    <TabsTrigger value="live" className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-red-600 font-medium">
                        Live Now
                    </TabsTrigger>
                    <TabsTrigger value="completed" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                        Completed
                    </TabsTrigger>
                </TabsList>

                <div className="space-y-4">
                    <TabsContent value="upcoming" className="space-y-4 m-0">
                        {filterWebinars('upcoming').map(renderCard)}
                        {filterWebinars('upcoming').length === 0 && (
                            <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                                <AlertCircle className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                                <p className="text-gray-500">No upcoming webinars found</p>
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="live" className="space-y-4 m-0">
                        {filterWebinars('live').map(renderCard)}
                        {filterWebinars('live').length === 0 && (
                            <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                                <p className="text-gray-500">No live sessions at the moment</p>
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="completed" className="space-y-4 m-0">
                        {filterWebinars('completed').map(renderCard)}
                    </TabsContent>
                </div>
            </Tabs>

        </DashboardLayout>
    );
};

export default WebinarDashboard;
