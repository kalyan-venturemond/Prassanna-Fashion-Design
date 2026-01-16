import { Link, useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Users, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import AdminLayout from '@/components/layout/AdminLayout';
import { useAdminWebinar } from '@/context/AdminWebinarContext';
import { toast } from 'sonner';

const AdminWebinars = () => {
    const { webinars, deleteWebinar } = useAdminWebinar();
    const navigate = useNavigate();

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this webinar?')) {
            deleteWebinar(id);
            toast('Webinar deleted successfully');
        }
    };

    return (
        <AdminLayout subtitle="Manage your webinars efficiently.">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-900">All Webinars</h2>
                    <Button onClick={() => navigate('/admin/webinars/new')}>
                        <Plus className="w-4 h-4 mr-2" />
                        Create Webinar
                    </Button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500 font-medium">
                            <tr>
                                <th className="px-6 py-4">Title</th>
                                <th className="px-6 py-4">Date & Time</th>
                                <th className="px-6 py-4">Trainer</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {webinars.map((webinar) => (
                                <tr key={webinar.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900">
                                        {webinar.title}
                                        <div className="text-xs text-gray-500 font-normal mt-0.5">{webinar.platform}</div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {webinar.date}
                                        <div className="text-xs text-gray-400 mt-0.5">{webinar.time} ({webinar.duration})</div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{webinar.trainer}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-0.5 rounded text-xs font-semibold ${webinar.status === 'Live' ? 'bg-red-100 text-red-700' :
                                                webinar.status === 'Upcoming' ? 'bg-orange-100 text-orange-700' :
                                                    webinar.status === 'Completed' ? 'bg-gray-100 text-gray-600' :
                                                        'bg-gray-100 text-gray-600'
                                            }`}>
                                            {webinar.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Open menu</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem onClick={() => navigate(`/admin/webinars/edit/${webinar.id}`)}>
                                                    <Edit className="w-4 h-4 mr-2" /> Edit Details
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => navigate('/admin/registrations')}>
                                                    <Users className="w-4 h-4 mr-2" /> View Registrations
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem
                                                    className="text-red-600"
                                                    onClick={() => handleDelete(webinar.id)}
                                                >
                                                    <Trash2 className="w-4 h-4 mr-2" /> Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </td>
                                </tr>
                            ))}
                            {webinars.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                        No webinars found. Create one to get started.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminWebinars;
