import { ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Video, Users, LogOut, PlayCircle, Settings, UserSquare2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminLayoutProps {
    children: ReactNode;
    subtitle?: string;
}

const AdminLayout = ({ children, subtitle }: AdminLayoutProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Webinars', path: '/admin/webinars', icon: Video },
        { name: 'Trainers', path: '/admin/trainers', icon: UserSquare2 },
        { name: 'Registrations', path: '/admin/registrations', icon: Users },
        { name: 'Live Sessions', path: '/admin/live-sessions', icon: PlayCircle },
        { name: 'Settings', path: '/admin/settings', icon: Settings },
    ];

    const handleLogout = () => {
        if (confirm("Are you sure you want to logout?")) {
            // Clear any local storage if needed in future
            navigate('/');
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 z-50 overflow-y-auto">
                <div className="p-6 border-b border-gray-100">
                    <Link to="/admin/dashboard" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                            P
                        </div>
                        <div>
                            <h1 className="font-display font-semibold text-gray-900 leading-tight">Admin</h1>
                            <span className="text-xs text-muted-foreground">Webinar Manager</span>
                        </div>
                    </Link>
                </div>

                <nav className="p-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname.startsWith(item.path);
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                    ? 'bg-primary/5 text-primary'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-4 left-4 right-4">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={handleLogout}
                    >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8">
                <header className="mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-display font-bold text-gray-900">
                            {navItems.find(item => location.pathname.startsWith(item.path))?.name || 'Dashboard'}
                        </h1>
                        {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                            Environment: Live
                        </span>
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                            A
                        </div>
                    </div>
                </header>
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;
