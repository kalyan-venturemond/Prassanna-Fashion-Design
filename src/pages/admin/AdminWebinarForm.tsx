import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AdminLayout from '@/components/layout/AdminLayout';
import { useAdminWebinar, WebinarStatus } from '@/context/AdminWebinarContext';
import { toast } from 'sonner';

const AdminWebinarForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addWebinar, updateWebinar, getWebinar } = useAdminWebinar();

    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        trainer: '',
        date: '',
        time: '',
        duration: '',
        platform: 'Zoom',
        link: '',
        status: 'Draft' as WebinarStatus,
    });

    useEffect(() => {
        if (isEditMode) {
            const webinar = getWebinar(Number(id));
            if (webinar) {
                setFormData({
                    title: webinar.title,
                    description: webinar.description,
                    trainer: webinar.trainer,
                    date: webinar.date,
                    time: webinar.time,
                    duration: webinar.duration,
                    platform: webinar.platform,
                    link: webinar.link,
                    status: webinar.status,
                });
            } else {
                navigate('/admin/webinars');
                toast.error('Webinar not found');
            }
        }
    }, [id, isEditMode, getWebinar, navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isEditMode) {
            updateWebinar(Number(id), formData as any);
            toast('Webinar updated successfully');
        } else {
            addWebinar(formData as any);
            toast('Webinar created successfully');
        }

        navigate('/admin/webinars');
    };

    return (
        <AdminLayout subtitle={isEditMode ? 'Edit webinar details' : 'Create a new webinar session'}>
            <div className="max-w-3xl mx-auto">
                <Button variant="ghost" className="mb-6 pl-0 hover:pl-0 hover:bg-transparent text-gray-500 hover:text-gray-900" onClick={() => navigate('/admin/webinars')}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Webinars
                </Button>

                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                        {isEditMode ? `Edit: ${formData.title}` : 'New Webinar Details'}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="title">Webinar Title</Label>
                                <Input
                                    id="title"
                                    required
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    placeholder="e.g., Summer Fashion Trends 2026"
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    required
                                    rows={3}
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    placeholder="Brief overview of the session..."
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="trainer">Trainer Name</Label>
                                <Input
                                    id="trainer"
                                    required
                                    value={formData.trainer}
                                    onChange={(e) => setFormData({ ...formData, trainer: e.target.value })}
                                    placeholder="e.g., Lakshmi Prassanna"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="platform">Platform</Label>
                                <Select
                                    value={formData.platform}
                                    onValueChange={(val) => setFormData({ ...formData, platform: val })}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select platform" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Zoom">Zoom</SelectItem>
                                        <SelectItem value="Google Meet">Google Meet</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="date">Date</Label>
                                <Input
                                    id="date"
                                    type="date"
                                    required
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="time">Time</Label>
                                <Input
                                    id="time"
                                    type="time"
                                    required
                                    value={formData.time}
                                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="duration">Duration</Label>
                                <Input
                                    id="duration"
                                    required
                                    value={formData.duration}
                                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                    placeholder="e.g., 2 Hours"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="status">Status</Label>
                                <Select
                                    value={formData.status}
                                    onValueChange={(val: WebinarStatus) => setFormData({ ...formData, status: val })}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Draft">Draft</SelectItem>
                                        <SelectItem value="Upcoming">Upcoming</SelectItem>
                                        <SelectItem value="Live">Live</SelectItem>
                                        <SelectItem value="Completed">Completed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="link">Webinar Link</Label>
                                <Input
                                    id="link"
                                    type="url"
                                    required
                                    value={formData.link}
                                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                                    placeholder="https://..."
                                />
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end gap-4">
                            <Button type="button" variant="outline" onClick={() => navigate('/admin/webinars')}>
                                Cancel
                            </Button>
                            <Button type="submit" variant="default">
                                {isEditMode ? 'Update Webinar' : 'Save Webinar'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminWebinarForm;
