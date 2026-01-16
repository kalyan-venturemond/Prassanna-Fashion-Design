import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, UserCheck, UserX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import AdminLayout from '@/components/layout/AdminLayout';
import { useAdminWebinar } from '@/context/AdminWebinarContext';
import { toast } from 'sonner';

const AdminTrainers = () => {
    const { trainers, deleteTrainer } = useAdminWebinar();
    const navigate = useNavigate();

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this trainer?')) {
            deleteTrainer(id);
            toast.success('Trainer removed successfully');
        }
    };

    return (
        <AdminLayout subtitle="Create and manage trainers for webinars">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">All Trainers</h2>
                        <p className="text-sm text-gray-500">Manage your institute's instructors</p>
                    </div>
                    <Button onClick={() => navigate('/admin/trainers/new')}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Trainer
                    </Button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500 font-medium">
                            <tr>
                                <th className="px-6 py-4">Trainer Name</th>
                                <th className="px-6 py-4">Contact Info</th>
                                <th className="px-6 py-4">Role / Expertise</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {trainers.map((trainer) => (
                                <tr key={trainer.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900">{trainer.name}</div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        <div>{trainer.email}</div>
                                        <div className="text-xs text-gray-400 mt-0.5">{trainer.phone}</div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600 font-medium">
                                        {trainer.role}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${trainer.status === 'Active'
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-gray-100 text-gray-800'
                                            }`}>
                                            {trainer.status === 'Active' ? <UserCheck className="w-3 h-3 mr-1" /> : <UserX className="w-3 h-3 mr-1" />}
                                            {trainer.status}
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
                                                <DropdownMenuItem onClick={() => navigate(`/admin/trainers/edit/${trainer.id}`)}>
                                                    <Edit className="w-4 h-4 mr-2" /> Edit Details
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem
                                                    className="text-red-600"
                                                    onClick={() => handleDelete(trainer.id)}
                                                >
                                                    <Trash2 className="w-4 h-4 mr-2" /> Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </td>
                                </tr>
                            ))}
                            {trainers.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                        No trainers found. Add one to get started.
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

export default AdminTrainers;
