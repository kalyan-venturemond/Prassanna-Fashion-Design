import React, { createContext, useContext, useState, ReactNode } from 'react';

export type WebinarStatus = 'Draft' | 'Upcoming' | 'Live' | 'Completed';

export interface Webinar {
    id: number;
    title: string;
    description: string;
    trainer: string;
    date: string;
    time: string;
    duration: string;
    platform: 'Zoom' | 'Google Meet';
    link: string;
    status: WebinarStatus;
}

const initialWebinars: Webinar[] = [
    {
        id: 1,
        title: 'Basics of Fashion Design & Tailoring',
        description: 'Join our exclusive session to learn the fundamentals of fashion styling.',
        trainer: 'Smt. Lakshmi Prassanna',
        date: '2026-01-25',
        time: '10:00',
        duration: '2 Hours',
        platform: 'Zoom',
        link: 'https://zoom.us/j/123456789',
        status: 'Upcoming',
    },
    {
        id: 2,
        title: 'Saree Blouse Design Masterclass',
        description: 'Master the art of measuring and cutting perfect saree blouses.',
        trainer: 'Senior Instructor Anitha',
        date: '2026-02-01',
        time: '14:00',
        duration: '3 Hours',
        platform: 'Google Meet',
        link: 'https://meet.google.com/abc-defg-hij',
        status: 'Draft',
    },
];

// Trainer Type
export interface Trainer {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string;
    status: 'Active' | 'Inactive';
}

const initialTrainers: Trainer[] = [
    {
        id: 1,
        name: 'Smt. Lakshmi Prassanna',
        email: 'lakshmi@prassanna.com',
        phone: '+91 98765 43210',
        role: 'Founder & Lead Instructor',
        status: 'Active',
    },
    {
        id: 2,
        name: 'Senior Instructor Anitha',
        email: 'anitha@prassanna.com',
        phone: '+91 98765 43211',
        role: 'Blouse Design Specialist',
        status: 'Active',
    }
];

interface AdminWebinarContextType {
    webinars: Webinar[];
    addWebinar: (webinar: Omit<Webinar, 'id'>) => void;
    updateWebinar: (id: number, webinar: Partial<Webinar>) => void;
    deleteWebinar: (id: number) => void;
    getWebinar: (id: number) => Webinar | undefined;

    // Trainers
    trainers: Trainer[];
    addTrainer: (trainer: Omit<Trainer, 'id'>) => void;
    updateTrainer: (id: number, trainer: Partial<Trainer>) => void;
    deleteTrainer: (id: number) => void;
    getTrainer: (id: number) => Trainer | undefined;
}

const AdminWebinarContext = createContext<AdminWebinarContextType | undefined>(undefined);

export const AdminWebinarProvider = ({ children }: { children: ReactNode }) => {
    const [webinars, setWebinars] = useState<Webinar[]>(initialWebinars);
    const [trainers, setTrainers] = useState<Trainer[]>(initialTrainers);

    // Webinar Actions
    const addWebinar = (webinar: Omit<Webinar, 'id'>) => {
        const newWebinar = { ...webinar, id: Date.now() };
        setWebinars([...webinars, newWebinar]);
    };

    const updateWebinar = (id: number, updatedWebinar: Partial<Webinar>) => {
        setWebinars(
            webinars.map((w) => (w.id === id ? { ...w, ...updatedWebinar } : w))
        );
    };

    const deleteWebinar = (id: number) => {
        setWebinars(webinars.filter((w) => w.id !== id));
    };

    const getWebinar = (id: number) => webinars.find((w) => w.id === id);

    // Trainer Actions
    const addTrainer = (trainer: Omit<Trainer, 'id'>) => {
        const newTrainer = { ...trainer, id: Date.now() };
        setTrainers([...trainers, newTrainer]);
    };

    const updateTrainer = (id: number, updatedTrainer: Partial<Trainer>) => {
        setTrainers(
            trainers.map((t) => (t.id === id ? { ...t, ...updatedTrainer } : t))
        );
    };

    const deleteTrainer = (id: number) => {
        setTrainers(trainers.filter((t) => t.id !== id));
    };

    const getTrainer = (id: number) => trainers.find((t) => t.id === id);

    return (
        <AdminWebinarContext.Provider
            value={{
                webinars, addWebinar, updateWebinar, deleteWebinar, getWebinar,
                trainers, addTrainer, updateTrainer, deleteTrainer, getTrainer
            }}
        >
            {children}
        </AdminWebinarContext.Provider>
    );
};

export const useAdminWebinar = () => {
    const context = useContext(AdminWebinarContext);
    if (!context) {
        throw new Error('useAdminWebinar must be used within an AdminWebinarProvider');
    }
    return context;
};
