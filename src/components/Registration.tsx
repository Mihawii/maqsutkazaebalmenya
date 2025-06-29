import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
// import './App.css'; // Import your CSS file
import '../styles/registration.css'

const App: React.FC = () => {
    const [step, setStep] = useState(1);
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        telegram: '',
        englishLevel: '',
        mathLevel: '',
    });
    const navigate = useNavigate();

    const handleCourseSelect = (course: string) => {
        setSelectedCourse(course);
    };

    const handleNextStep = () => {
        if (selectedCourse) {
            setStep(2);
        }
    };

    const handleBackStep = () => {
        setStep(1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const { firstName, lastName, phone, telegram, englishLevel, mathLevel } = formData;

        if (firstName && lastName && phone && telegram && englishLevel && mathLevel) {
            // In a real application, you would send the form data to a server here
            console.log({
                course: selectedCourse,
                ...formData,
            });
            setStep(3); // Go to success step
        } else {
            alert('Please fill in all required fields.');
        }
    };

    const handleNewRegistration = () => {
        setStep(1);
        setSelectedCourse(null);
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            telegram: '',
            englishLevel: '',
            mathLevel: '',
        });
    };

    const progressWidth = step === 1 ? '50%' : '100%';
    const stepText = step === 1 ? 'Step 1: Select Course' : 'Step 2: Personal Information';
    const stepCount = step === 1 ? '1/2' : '2/2';

    return (
        <div className="registration-page">
            <div className="container">
                {/* Header with static content as per image */}
                <div className="header">
                    <h1>Maqsadly SAT & Admission Course</h1>
                    <p>Complete your registration in a few simple steps</p>
                </div>

                {/* Progress Bar */}
                <div className="step-indicator-wrapper">
                    <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{stepText}</span>
                        <span className="text-sm font-medium">{stepCount}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2-5">
                        <div className="bg-indigo-600 h-2-5 rounded-full step-indicator" style={{ width: progressWidth }}></div>
                    </div>
                </div>

                {/* Step 1: Course Selection */}
                {step === 1 && (
                    <div className="p-8">
                        <h2 className="text-xl font-semibold mb-6">Choose your course</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div
                                className={`course-option ${selectedCourse === 'sat-prep' ? 'selected' : ''}`}
                                onClick={() => handleCourseSelect('sat-prep')}
                            >
                                <div className="flex justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-center">SAT Preparation</h3>
                                <p className="text-gray-500 text-center mt-2">Comprehensive SAT prep with practice tests</p>
                            </div>

                            <div
                                className={`course-option ${selectedCourse === 'college-admission' ? 'selected' : ''}`}
                                onClick={() => handleCourseSelect('college-admission')}
                            >
                                <div className="flex justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-center">College Admission</h3>
                                <p className="text-gray-500 text-center mt-2">Application guidance and essay writing</p>
                            </div>

                            <div
                                className={`course-option ${selectedCourse === 'combined' ? 'selected' : ''}`}
                                onClick={() => handleCourseSelect('combined')}
                            >
                                <div className="flex justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-center">Complete Package</h3>
                                <p className="text-gray-500 text-center mt-2">SAT prep + College admission guidance</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={handleNextStep}
                                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${selectedCourse ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                                disabled={!selectedCourse}
                            >
                                Continue to Personal Information
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2: Personal Information */}
                {step === 2 && (
                    <div className="p-8">
                        <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="telegram" className="block text-sm font-medium text-gray-700 mb-1">Telegram Username</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">@</span>
                                    <input
                                        type="text"
                                        id="telegram"
                                        name="telegram"
                                        value={formData.telegram}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="englishLevel" className="block text-sm font-medium text-gray-700 mb-1">English Proficiency Level</label>
                                <select
                                    id="englishLevel"
                                    name="englishLevel"
                                    value={formData.englishLevel}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                                >
                                    <option value="" disabled>Select your level</option>
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advanced">Advanced</option>
                                    <option value="fluent">Fluent</option>
                                    <option value="native">Native</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="mathLevel" className="block text-sm font-medium text-gray-700 mb-1">Math Level (briefly describe)</label>
                                <input
                                    type="text"
                                    id="mathLevel"
                                    name="mathLevel"
                                    value={formData.mathLevel}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., High school algebra, Calculus"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>

                            <div className="flex justify-between pt-4">
                                <button
                                    type="button"
                                    onClick={handleBackStep}
                                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium transition-all duration-300 hover:bg-gray-300"
                                    style={{ border: 'none' }}
                                >
                                    Back
                                </button>

                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-indigo-700"
                                    style={{ border: 'none' }}
                                >
                                    Submit Registration
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Step 3: Success */}
                {step === 3 && (
                    <div className="p-8 text-center">
                        <div className="success-checkmark">
                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="check-circle" cx="26" cy="26" r="23" fill="none"/>
                                <path className="check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Registration Successful!</h2>
                        <p className="text-gray-600 mb-8">Thank you for registering with Maqsadly. We'll contact you soon with further details.</p>
                        <button
                            onClick={() => navigate('/')}
                            className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-indigo-700"
                        >
                            Go to Main Page
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;