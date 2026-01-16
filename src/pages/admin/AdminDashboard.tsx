import { useNavigate } from 'react-router-dom';
import { Users, Video, Clock, PlayCircle } from 'lucide-react';
import AdminLayout from '@/components/layout/AdminLayout';
import { useAdminWebinar } from '@/context/AdminWebinarContext';

const AdminDashboard = () => {
    const { webinars } = useAdminWebinar();
    const navigate = useNavigate();

    const stats = [
        { label: 'Total Webinars', value: webinars.length, icon: Video, color: 'bg-blue-50 text-blue-600' },
        { label: 'Upcoming', value: webinars.filter(w => w.status === 'Upcoming').length, icon: Clock, color: 'bg-orange-50 text-orange-600' },
        { label: 'Registrations', value: '1,234', icon: Users, color: 'bg-green-50 text-green-600' }, // Mock
        { label: 'Live Now', value: webinars.filter(w => w.status === 'Live').length, icon: PlayCircle, color: 'bg-red-50 text-red-600' },
    ];

    return (
        <AdminLayout subtitle="Overview of your webinar performance and upcoming sessions.">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions / Recent Activity placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Webinars</h2>
                    <div className="space-y-4">
                        {webinars.slice(0, 3).map(webinar => (
                            <div key={webinar.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <h4 className="font-medium text-gray-900">{webinar.title}</h4>
                                    <p className="text-sm text-gray-500">{webinar.date} at {webinar.time}</p>
                                </div>
                                <span className={`px-2.5 py-0.5 rounded text-xs font-semibold ${webinar.status === 'Live' ? 'bg-red-100 text-red-700' :
                                    webinar.status === 'Upcoming' ? 'bg-orange-100 text-orange-700' :
                                        webinar.status === 'Completed' ? 'bg-gray-100 text-gray-600' :
                                            'bg-gray-100 text-gray-600'
                                    }`}>
                                    {webinar.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                    <div className="space-y-3">
                        <button
                            onClick={() => navigate('/admin/webinars/new')}
                            className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-medium transition-colors"
                        >
                            + Schedule New Webinar
                        </button>
                        <button
                            onClick={() => navigate('/admin/registrations')}
                            className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-medium transition-colors"
                        >
                            View Recent Registrations
                        </button>
                        <button
                            onClick={() => navigate('/admin/trainers')}
                            className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-medium transition-colors"
                        >
                            Manage Trainers
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboard;
