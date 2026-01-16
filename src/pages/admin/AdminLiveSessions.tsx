import { Play, Square, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AdminLayout from '@/components/layout/AdminLayout';
import { useAdminWebinar } from '@/context/AdminWebinarContext';
import { toast } from 'sonner';

const AdminLiveSessions = () => {
    const { webinars, updateWebinar } = useAdminWebinar();

    // Filter only Upcoming and Live webinars
    const activeWebinars = webinars.filter(w => w.status === 'Upcoming' || w.status === 'Live');

    const handleStatusChange = (id: number, status: 'Live' | 'Completed') => {
        updateWebinar(id, { status });
        const message = status === 'Live' ? 'Webinar is now Live!' : 'Webinar marked as Completed';
        toast(message);
    };

    return (
        <AdminLayout subtitle="Manage and control live webinar sessions.">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeWebinars.map(webinar => (
                    <div key={webinar.id} className={`bg-white rounded-xl border shadow-sm overflow-hidden ${webinar.status === 'Live' ? 'border-red-200 ring-1 ring-red-100' : 'border-gray-200'
                        }`}>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className={`px-2.5 py-0.5 rounded text-xs font-semibold ${webinar.status === 'Live' ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-orange-100 text-orange-700'
                                    }`}>
                                    {webinar.status}
                                </span>
                                <div className="text-xs text-gray-500 flex items-center gap-1">
                                    <Video className="w-3 h-3" />
                                    {webinar.platform}
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">{webinar.title}</h3>
                            <p className="text-sm text-gray-500 mb-6">
                                Scheduled: {webinar.date} • {webinar.time}
                            </p>

                            <div className="space-y-3">
                                {webinar.status === 'Upcoming' && (
                                    <Button
                                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                                        onClick={() => handleStatusChange(webinar.id, 'Live')}
                                    >
                                        <Play className="w-4 h-4 mr-2" />
                                        Start Live Session
                                    </Button>
                                )}

                                {webinar.status === 'Live' && (
                                    <Button
                                        variant="outline"
                                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                                        onClick={() => handleStatusChange(webinar.id, 'Completed')}
                                    >
                                        <Square className="w-4 h-4 mr-2" />
                                        End Session
                                    </Button>
                                )}

                                <a
                                    href={webinar.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-primary bg-primary/5 rounded-md hover:bg-primary/10 transition-colors"
                                >
                                    Join Meeting as Host
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

                {activeWebinars.length === 0 && (
                    <div className="col-span-full py-12 text-center bg-gray-50 rounded-xl border border-dashed border-gray-300">
                        <p className="text-gray-500">No upcoming or live sessions found.</p>
                        <Button variant="link" className="mt-2" onClick={() => window.location.href = '/admin/webinars/new'}>
                            Schedule a Webinar
                        </Button>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default AdminLiveSessions;
