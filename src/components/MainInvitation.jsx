import React, { useState, useEffect } from 'react';
import RsvpForm from './RsvpForm';
import PhotoGallery from './PhotoGallery';
import VenueSection from './VenueSection';
import Footer from './Footer';

const MainInvitation = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Countdown timer
    useEffect(() => {
        const weddingDate = new Date('2026-02-14T18:00:00').getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-cream mandala-pattern">
            {/* Hero Section - Responsive with Mandala Background */}
            <section className="relative py-20 px-6 bg-gradient-to-b from-maroon to-transparent overflow-hidden">
                {/* Mandala Pattern Background with Low Opacity */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 border-8 border-gold rounded-full"></div>
                    <div className="absolute top-1/3 right-1/4 w-48 h-48 border-8 border-cream rounded-full"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-56 h-56 border-8 border-gold rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
                    <div className="flex items-center justify-center mb-8">
                        <div className="h-px w-16 md:w-24 bg-gold"></div>
                        <span className="mx-3 md:mx-4 text-gold text-2xl md:text-3xl">❖</span>
                        <div className="h-px w-16 md:w-24 bg-gold"></div>
                    </div>

                    <p className="font-poppins text-lg md:text-xl text-gold mb-6">
                        Together with their families, request the honor of your presence
                    </p>

                    {/* Couple Names - Stacked on Mobile, Side-by-Side on Desktop */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
                        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-cream">
                            Priya
                        </h1>
                        <span className="text-gold text-4xl md:text-6xl hidden md:block">&</span>
                        <span className="text-gold text-3xl md:hidden">❖</span>
                        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-cream">
                            Raj
                        </h1>
                    </div>

                    <p className="font-poppins text-xl md:text-2xl text-gold/80 mb-8">
                        at their wedding celebration
                    </p>

                    <div className="flex items-center justify-center">
                        <div className="h-px w-16 md:w-24 bg-gold"></div>
                        <span className="mx-3 md:mx-4 text-gold text-2xl md:text-3xl">❖</span>
                        <div className="h-px w-16 md:w-24 bg-gold"></div>
                    </div>
                </div>
            </section>

            {/* Countdown Timer - 2x2 Grid on Mobile, 1x4 on Desktop */}
            <section className="py-12 px-6 bg-white/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-maroon text-center mb-8">
                        Counting Down to Our Big Day
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {/* Days */}
                        <div className="bg-gradient-to-br from-maroon to-maroon/80 rounded-lg p-6 text-center shadow-lg">
                            <div className="font-playfair text-4xl md:text-5xl font-bold text-gold mb-2">
                                {timeLeft.days}
                            </div>
                            <div className="font-poppins text-sm md:text-base text-cream uppercase tracking-wider">
                                Days
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-gradient-to-br from-gold to-gold/80 rounded-lg p-6 text-center shadow-lg">
                            <div className="font-playfair text-4xl md:text-5xl font-bold text-maroon mb-2">
                                {timeLeft.hours}
                            </div>
                            <div className="font-poppins text-sm md:text-base text-maroon uppercase tracking-wider">
                                Hours
                            </div>
                        </div>

                        {/* Minutes */}
                        <div className="bg-gradient-to-br from-maroon to-maroon/80 rounded-lg p-6 text-center shadow-lg">
                            <div className="font-playfair text-4xl md:text-5xl font-bold text-gold mb-2">
                                {timeLeft.minutes}
                            </div>
                            <div className="font-poppins text-sm md:text-base text-cream uppercase tracking-wider">
                                Minutes
                            </div>
                        </div>

                        {/* Seconds */}
                        <div className="bg-gradient-to-br from-gold to-gold/80 rounded-lg p-6 text-center shadow-lg">
                            <div className="font-playfair text-4xl md:text-5xl font-bold text-maroon mb-2">
                                {timeLeft.seconds}
                            </div>
                            <div className="font-poppins text-sm md:text-base text-maroon uppercase tracking-wider">
                                Seconds
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wedding Details Section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-2xl p-6 md:p-12 border-4 border-gold">
                        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-maroon text-center mb-12">
                            Wedding Celebration
                        </h2>

                        {/* Date & Time */}
                        <div className="mb-10 text-center">
                            <div className="inline-block bg-maroon/10 rounded-lg px-6 md:px-8 py-6 mb-4">
                                <svg className="w-10 h-10 md:w-12 md:h-12 text-gold mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm2 4h10v2H7v-2z" />
                                </svg>
                                <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-maroon mb-2">
                                    Saturday, February 14, 2026
                                </h3>
                                <p className="font-poppins text-base md:text-lg text-gold">
                                    at 6:00 PM onwards
                                </p>
                            </div>
                        </div>

                        {/* Venue */}
                        <div className="mb-10 text-center">
                            <div className="inline-block bg-gold/10 rounded-lg px-6 md:px-8 py-6">
                                <svg className="w-10 h-10 md:w-12 md:h-12 text-maroon mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                <h3 className="font-playfair text-xl md:text-2xl font-semibold text-maroon mb-2">
                                    The Grand Palace
                                </h3>
                                <p className="font-poppins text-base md:text-lg text-gray-700">
                                    123 Royal Avenue, Mumbai, Maharashtra
                                </p>
                                <p className="font-poppins text-sm md:text-md text-gray-600 mt-2">
                                    India - 400001
                                </p>
                            </div>
                        </div>

                        {/* Events Timeline - Vertical on Mobile, Horizontal Grid on Desktop */}
                        <div id="events" className="border-t-2 border-gold pt-10">
                            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-maroon text-center mb-8">
                                Wedding Events
                            </h3>

                            {/* Mobile: Vertical Timeline */}
                            <div className="md:hidden space-y-6">
                                {/* Haldi */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 bg-maroon/5 p-4 rounded-lg">
                                        <h4 className="font-playfair text-lg font-semibold text-maroon mb-1">Haldi Ceremony</h4>
                                        <p className="font-poppins text-sm text-gold font-medium">Wed, Feb 11 • 3:00 PM</p>
                                        <p className="font-poppins text-sm text-gray-600 mt-1">Traditional turmeric ceremony</p>
                                    </div>
                                </div>

                                {/* Mehendi */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-maroon rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-cream" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 bg-gold/5 p-4 rounded-lg">
                                        <h4 className="font-playfair text-lg font-semibold text-maroon mb-1">Mehendi Ceremony</h4>
                                        <p className="font-poppins text-sm text-gold font-medium">Thu, Feb 12 • 4:00 PM</p>
                                        <p className="font-poppins text-sm text-gray-600 mt-1">Henna ceremony with music</p>
                                    </div>
                                </div>

                                {/* Sangeet */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 bg-maroon/5 p-4 rounded-lg">
                                        <h4 className="font-playfair text-lg font-semibold text-maroon mb-1">Sangeet Night</h4>
                                        <p className="font-poppins text-sm text-gold font-medium">Fri, Feb 13 • 7:00 PM</p>
                                        <p className="font-poppins text-sm text-gray-600 mt-1">Music, dance, and celebration</p>
                                    </div>
                                </div>

                                {/* Wedding */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-maroon to-gold rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-cream" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 bg-gold/10 p-4 rounded-lg border-2 border-gold">
                                        <h4 className="font-playfair text-lg font-semibold text-maroon mb-1">Wedding Ceremony</h4>
                                        <p className="font-poppins text-sm text-gold font-medium">Sat, Feb 14 • 6:00 PM</p>
                                        <p className="font-poppins text-sm text-gray-600 mt-1">Traditional ceremony & dinner</p>
                                    </div>
                                </div>

                                {/* Reception */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 bg-maroon/5 p-4 rounded-lg">
                                        <h4 className="font-playfair text-lg font-semibold text-maroon mb-1">Reception</h4>
                                        <p className="font-poppins text-sm text-gold font-medium">Sun, Feb 15 • 7:00 PM</p>
                                        <p className="font-poppins text-sm text-gray-600 mt-1">Grand reception & entertainment</p>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop: Horizontal Grid */}
                            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Haldi */}
                                <div className="bg-maroon/5 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-playfair text-xl font-semibold text-maroon mb-2">Haldi Ceremony</h4>
                                    <p className="font-poppins text-gold font-medium mb-2">Wednesday, February 11, 2026</p>
                                    <p className="font-poppins text-sm text-gray-600">3:00 PM</p>
                                    <p className="font-poppins text-sm text-gray-600 mt-2">Traditional turmeric ceremony</p>
                                </div>

                                {/* Mehendi */}
                                <div className="bg-gold/5 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                                    <div className="w-16 h-16 bg-maroon rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-cream" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-playfair text-xl font-semibold text-maroon mb-2">Mehendi Ceremony</h4>
                                    <p className="font-poppins text-gold font-medium mb-2">Thursday, February 12, 2026</p>
                                    <p className="font-poppins text-sm text-gray-600">4:00 PM</p>
                                    <p className="font-poppins text-sm text-gray-600 mt-2">Henna ceremony with music and dance</p>
                                </div>

                                {/* Sangeet */}
                                <div className="bg-maroon/5 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-playfair text-xl font-semibold text-maroon mb-2">Sangeet Night</h4>
                                    <p className="font-poppins text-gold font-medium mb-2">Friday, February 13, 2026</p>
                                    <p className="font-poppins text-sm text-gray-600">7:00 PM</p>
                                    <p className="font-poppins text-sm text-gray-600 mt-2">An evening of music, dance, and celebration</p>
                                </div>

                                {/* Wedding */}
                                <div className="bg-gold/10 p-6 rounded-lg text-center border-2 border-gold hover:shadow-lg transition-shadow lg:col-span-2">
                                    <div className="w-16 h-16 bg-gradient-to-br from-maroon to-gold rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-cream" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-playfair text-2xl font-semibold text-maroon mb-2">Wedding Ceremony</h4>
                                    <p className="font-poppins text-gold font-medium mb-2">Saturday, February 14, 2026</p>
                                    <p className="font-poppins text-sm text-gray-600">6:00 PM</p>
                                    <p className="font-poppins text-sm text-gray-600 mt-2">Traditional Hindu wedding ceremony followed by dinner</p>
                                </div>

                                {/* Reception */}
                                <div className="bg-maroon/5 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-playfair text-xl font-semibold text-maroon mb-2">Reception</h4>
                                    <p className="font-poppins text-gold font-medium mb-2">Sunday, February 15, 2026</p>
                                    <p className="font-poppins text-sm text-gray-600">7:00 PM</p>
                                    <p className="font-poppins text-sm text-gray-600 mt-2">Grand reception with dinner and entertainment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section id="gallery" className="py-16 px-6 bg-gradient-to-b from-cream to-white">
                <PhotoGallery />
            </section>

            {/* Venue Section */}
            <section id="venue">
                <VenueSection />
            </section>

            {/* RSVP Section */}
            <section id="rsvp" className="py-16 px-6 bg-gradient-to-b from-transparent to-maroon/20">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-maroon mb-4">
                            RSVP
                        </h2>
                        <p className="font-poppins text-base md:text-lg text-gray-700">
                            Kindly respond by February 1, 2026
                        </p>
                    </div>

                    <RsvpForm />
                </div>
            </section>

            {/* Footer with QR Code */}
            <Footer />
        </div>
    );
};

export default MainInvitation;
