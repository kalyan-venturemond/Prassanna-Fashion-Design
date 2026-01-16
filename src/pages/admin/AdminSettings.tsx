import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import AdminLayout from '@/components/layout/AdminLayout';
import { toast } from 'sonner';

const AdminSettings = () => {

    const handleSave = () => {
        toast.success('Settings saved successfully!');
    };

    const handleReset = () => {
        if (confirm("Are you sure you want to reset all data? This cannot be undone.")) {
            toast.success('System reset successfully (Demo Mode)');
        }
    };

    return (
        <AdminLayout subtitle="Manage your dashboard configurations">
            <div className="max-w-3xl mx-auto space-y-8">

                {/* General Settings */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">General Settings</h2>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label>Institute Name</Label>
                            <Input defaultValue="Prassanna Fashion Designs and Institute Pvt. Ltd" readOnly className="bg-gray-50" />
                            <p className="text-xs text-muted-foreground">Contact support to change your institute name.</p>
                        </div>
                        <div className="space-y-2">
                            <Label>Admin Email</Label>
                            <Input defaultValue="admin@prassanna.com" />
                        </div>
                        <div className="space-y-2">
                            <Label>Timezone</Label>
                            <Select defaultValue="IST">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select timezone" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="IST">India Standard Time (IST) - UTC+05:30</SelectItem>
                                    <SelectItem value="UTC">UTC</SelectItem>
                                    <SelectItem value="EST">Eastern Standard Time (EST)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* Webinar Defaults */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Webinar Defaults</h2>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label>Default Platform</Label>
                                <Select defaultValue="Zoom">
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
                                <Label>Default Duration</Label>
                                <Input defaultValue="1 Hour" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Default Registration Message</Label>
                            <Input defaultValue="Thank you for registering! The link will be sent to your email." />
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                        <Button onClick={handleSave}>
                            Save Changes
                        </Button>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="bg-red-50 rounded-xl border border-red-100 p-6 md:p-8">
                    <h2 className="text-xl font-bold text-red-900 mb-4">Danger Zone</h2>
                    <p className="text-red-700 text-sm mb-6">
                        Resetting the dashboard will revert all data to the initial state. This action cannot be undone.
                    </p>
                    <Button variant="destructive" onClick={handleReset}>
                        Reset Demo Data
                    </Button>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminSettings;
