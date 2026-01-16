import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AdminLayout from '@/components/layout/AdminLayout';
import { useAdminWebinar, Trainer } from '@/context/AdminWebinarContext';
import { toast } from 'sonner';

const AdminTrainerForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addTrainer, updateTrainer, getTrainer } = useAdminWebinar();

    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        status: 'Active' as 'Active' | 'Inactive',
    });

    useEffect(() => {
        if (isEditMode) {
            const trainer = getTrainer(Number(id));
            if (trainer) {
                setFormData({
                    name: trainer.name,
                    email: trainer.email,
                    phone: trainer.phone,
                    role: trainer.role,
                    status: trainer.status,
                });
            } else {
                navigate('/admin/trainers');
                toast.error('Trainer not found');
            }
        }
    }, [id, isEditMode, getTrainer, navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isEditMode) {
            updateTrainer(Number(id), formData);
            toast.success('Trainer updated successfully');
        } else {
            addTrainer(formData as any);
            toast.success('Trainer added successfully');
        }

        navigate('/admin/trainers');
    };

    return (
        <AdminLayout subtitle={isEditMode ? 'Edit trainer details' : 'Add a new trainer'}>
            <div className="max-w-2xl mx-auto">
                <Button variant="ghost" className="mb-6 pl-0 hover:pl-0 hover:bg-transparent text-gray-500 hover:text-gray-900" onClick={() => navigate('/admin/trainers')}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Trainers
                </Button>

                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                        {isEditMode ? `Edit: ${formData.name}` : 'New Trainer Details'}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Trainer Name</Label>
                            <Input
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="e.g., Smt. Lakshmi Prassanna"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="trainer@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="+91..."
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="role">Expertise / Role</Label>
                            <Input
                                id="role"
                                required
                                value={formData.role}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                placeholder="e.g., Fashion Illustration Expert"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <Select
                                value={formData.status}
                                onValueChange={(val: 'Active' | 'Inactive') => setFormData({ ...formData, status: val })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Active">Active</SelectItem>
                                    <SelectItem value="Inactive">Inactive</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="pt-4 flex justify-end gap-4">
                            <Button type="button" variant="outline" onClick={() => navigate('/admin/trainers')}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="default">
                                {isEditMode ? 'Update Trainer' : 'Save Trainer'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminTrainerForm;
