import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const ConsultationCalendar = () => {
    const [reservationConfirmed, setReservationConfirmed] = useState(false);
    const [showPaymentOptions, setShowPaymentOptions] = useState(false);

    return (
        <section className="py-24 lg:py-32 bg-white" id="consultation">
            <div className="max-w-5xl mx-auto px-8 lg:px-16">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="text-xs font-bold text-[#4A6FA5] uppercase tracking-[0.2em] mb-6">
                        Executive Consultation
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-bold text-[#0F2A44] mb-8 leading-tight">
                        Reserve your session.
                    </h2>

                    <div className="flex flex-wrap gap-x-12 gap-y-4 text-lg text-[#2E2E2E] mb-10">
                        <div>
                            <span className="text-[#4A6FA5]">Format:</span> One-on-one video
                        </div>
                        <div>
                            <span className="text-[#4A6FA5]">Duration:</span> 60 minutes
                        </div>
                        <div>
                            <span className="text-[#4A6FA5]">Investment:</span> ₹22,452.94 / $250 USD
                        </div>
                    </div>

                    <div className="border-t border-[#0F2A44]/10 pt-8">
                        <button
                            onClick={() => setShowPaymentOptions(!showPaymentOptions)}
                            className="flex items-center gap-2 text-[#4A6FA5] hover:text-[#0F2A44] transition-colors mb-6"
                        >
                            <span className="font-medium">View reservation details</span>
                            {showPaymentOptions ? (
                                <FiChevronUp className="w-5 h-5" />
                            ) : (
                                <FiChevronDown className="w-5 h-5" />
                            )}
                        </button>

                        <AnimatePresence>
                            {showPaymentOptions && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden mb-8"
                                >
                                    <div className="bg-[#F5F7FA] rounded-xl p-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <div className="text-sm font-semibold text-[#4A6FA5] mb-3">
                                                    UPI Transfer
                                                </div>
                                                <div className="bg-white rounded-lg p-4 border border-[#0F2A44]/10 flex items-center justify-center">
                                                    <img
                                                        src="/logos/qr.jpg"
                                                        alt="UPI Payment QR Code"
                                                        className="w-full max-w-[200px] h-auto"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="text-sm font-semibold text-[#4A6FA5] mb-3">
                                                    Bank Transfer
                                                </div>
                                                <div className="space-y-2 text-sm">
                                                    <div className="flex justify-between">
                                                        <span className="text-[#4A6FA5]">Account</span>
                                                        <span className="text-[#0F2A44]">Hemanth Veeramalla</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-[#4A6FA5]">Bank</span>
                                                        <span className="text-[#0F2A44]">IDBI Bank</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-[#4A6FA5]">Account Number</span>
                                                        <span className="text-[#0F2A44]">005104000381017</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-[#4A6FA5]">IFSC</span>
                                                        <span className="text-[#0F2A44]">IBKL0000005</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <label className="flex items-center gap-3 cursor-pointer group mb-10">
                            <input
                                type="checkbox"
                                checked={reservationConfirmed}
                                onChange={(e) => setReservationConfirmed(e.target.checked)}
                                className="w-5 h-5 rounded border-2 border-[#0F2A44] text-[#F4C430] focus:ring-2 focus:ring-[#F4C430] focus:ring-offset-2 cursor-pointer"
                            />
                            <span className="text-lg text-[#0F2A44] font-medium">
                                Reservation completed
                            </span>
                        </label>

                        <AnimatePresence>
                            {reservationConfirmed && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="border-t border-[#0F2A44]/10 pt-8">
                                        <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                                            Select your time
                                        </h3>

                                        <div className="bg-white rounded-xl overflow-hidden border border-[#0F2A44]/10">
                                            <iframe
                                                src="https://calendly.com/mail-hemanthveeramalla/executive-consultation?hide_landing_page_details=1&hide_gdpr_banner=1"
                                                width="100%"
                                                height="700"
                                                frameBorder="0"
                                                title="Schedule Consultation"
                                                style={{ minWidth: '320px' }}
                                            ></iframe>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ConsultationCalendar;
