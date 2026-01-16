import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import AdminLayout from '@/components/layout/AdminLayout';

// Mock data
const registrations = [
    { id: 1, name: 'Priya Sharma', email: 'priya@example.com', phone: '+91 98765 43210', webinar: 'Basics of Fashion Design', date: '2026-01-14' },
    { id: 2, name: 'Anitha Reddy', email: 'anitha@example.com', phone: '+91 98765 43211', webinar: 'Saree Blouse Masterclass', date: '2026-01-15' },
    { id: 3, name: 'Sunitha Kumari', email: 'sunitha@example.com', phone: '+91 98765 43212', webinar: 'Basics of Fashion Design', date: '2026-01-16' },
];

const AdminRegistrations = () => {
    return (
        <AdminLayout subtitle="View and manage student registrations.">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h2 className="text-lg font-semibold text-gray-900">Registrations</h2>
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input placeholder="Search by name or email..." className="pl-9" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 text-gray-500 font-medium">
                            <tr>
                                <th className="px-6 py-4">Student Name</th>
                                <th className="px-6 py-4">Contact Info</th>
                                <th className="px-6 py-4">Webinar</th>
                                <th className="px-6 py-4">Registered Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {registrations.map((reg) => (
                                <tr key={reg.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900">
                                        {reg.name}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        <div>{reg.email}</div>
                                        <div className="text-xs text-gray-400">{reg.phone}</div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {reg.webinar}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {reg.date}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminRegistrations;
