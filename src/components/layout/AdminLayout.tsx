import { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Video, Users, LogOut, PlayCircle, Settings, UserSquare2, Menu, X } from 'lucide-react';
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

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const handleLogout = () => {
        if (confirm("Are you sure you want to logout?")) {
            navigate('/');
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex relative">
            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 z-50 overflow-y-auto
                transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0
            `}>
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <Link to="/admin/dashboard" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                            P
                        </div>
                        <div>
                            <h1 className="font-display font-semibold text-gray-900 leading-tight">Admin</h1>
                            <span className="text-xs text-muted-foreground">Webinar Manager</span>
                        </div>
                    </Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="md:hidden text-gray-500 hover:text-gray-700"
                    >
                        <X className="w-5 h-5" />
                    </button>
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
                                onClick={() => setIsMobileMenuOpen(false)}
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
            <main className="flex-1 w-full md:ml-64 p-4 md:p-8 transition-all duration-300">
                <header className="mb-6 md:mb-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-200 rounded-lg"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <div>
                            <h1 className="text-xl md:text-2xl font-display font-bold text-gray-900">
                                {navItems.find(item => location.pathname.startsWith(item.path))?.name || 'Dashboard'}
                            </h1>
                            {subtitle && <p className="text-sm text-muted-foreground mt-1 hidden sm:block">{subtitle}</p>}
                        </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4">
                        <span className="hidden sm:inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                            Live
                        </span>
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-sm md:text-base">
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
