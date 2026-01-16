import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import logo from '@/assets/logo.jpg';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API login delay
        setTimeout(() => {
            setIsLoading(false);

            // For MVP: Accept any credentials
            if (formData.email && formData.password) {
                toast.success('Successfully logged in!');

                // Determine redirect path
                const searchParams = new URLSearchParams(location.search);
                const redirectPath = searchParams.get('redirect') || '/admin/dashboard';

                navigate(redirectPath);
            } else {
                toast.error('Please fill in all fields');
            }
        }, 800);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <img
                            src={logo}
                            alt="Prassanna Fashion Designs"
                            className="h-16 mx-auto mb-4 object-contain"
                        />
                        <h1 className="text-2xl font-bold text-gray-900 font-display">Welcome Back</h1>
                        <p className="text-gray-500 mt-2">Sign in to access your account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="pl-10 h-11"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="pl-10 pr-10 h-11"
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                                <span className="text-gray-600">Remember me</span>
                            </label>
                            <a href="#" className="text-primary hover:text-primary/80 font-medium">
                                Forgot password?
                            </a>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-11 text-base bg-fashion-charcoal hover:bg-black transition-all"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </form>
                </div>

                <div className="p-4 bg-gray-50 text-center border-t border-gray-100 text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="/courses" className="text-primary font-bold hover:underline">
                        Register for a course
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
