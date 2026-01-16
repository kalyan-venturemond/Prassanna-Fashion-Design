import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.jpg';

interface DashboardLayoutProps {
    children: ReactNode;
    title?: string;
}

const DashboardLayout = ({ children, title = 'Webinar Dashboard' }: DashboardLayoutProps) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Dashboard Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="container-custom mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src={logo}
                                alt="Prassanna Fashion Designs"
                                className="h-10 w-auto object-contain rounded"
                            />
                        </Link>
                        <div className="h-6 w-px bg-gray-200 mx-2"></div>
                        <h1 className="font-display text-lg font-semibold text-gray-800">
                            {title}
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-sm text-gray-500 hidden sm:block">
                            Logged in as Student
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                            S
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 container-custom mx-auto px-4 md:px-8 py-8">
                {children}
            </main>

            {/* Simple Footer */}
            <footer className="bg-white border-t border-gray-200 py-6">
                <div className="container-custom mx-auto px-4 md:px-8 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Prassanna Fashion Designs. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default DashboardLayout;
