import React, { useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
    { q: 'Who can participate in E-Summit?', a: 'E-Summit is open to all college students across India. Some events have specific team size requirements—check individual event pages for details.' },
    { q: 'Is there a registration fee?', a: 'Yes there is a nominal fee for each event, as mentioned in the form for each one.' },
    { q: 'What do I need to bring?', a: 'Just your ID, creativity, and competitive spirit. Laptops may be required for certain events. All materials and refreshments are provided.' },
    { q: 'Where is E-Summit held?', a: 'E-Summit 2026 will be held at the main campus auditorium and adjacent seminar halls. Detailed venue maps will be shared before the event.' },
]

const socials = [
    { name: 'Instagram', handle: '@esummit2026', href: '#' },
    { name: 'LinkedIn', handle: 'E-Summit Official', href: '#' },
    { name: 'Twitter / X', handle: '@esummit_', href: '#' },
    { name: 'Email', handle: 'hello@esummit.in', href: '#' },
]

export default function Contact() {
    const containerRef = useRef(null)
    const heroRef = useRef(null)
    const formRef = useRef(null)
    const faqRef = useRef(null)
    const [openFaq, setOpenFaq] = useState(null)

    const toggleFaq = useCallback((i) => setOpenFaq(prev => prev === i ? null : i), [])

    useGSAP(() => {
        window.scrollTo(0, 0)

        gsap.from(heroRef.current.querySelectorAll('.contact-hero-anim'), {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
        })

        gsap.from(formRef.current, {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: formRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
        })

        gsap.from(faqRef.current, {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: faqRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
        })
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="min-h-screen text-white relative overflow-hidden bg-mountain">


            <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-24">

                <div ref={heroRef} className="mb-20">
                    <div className="contact-hero-anim inline-block px-4 py-1.5 rounded-full border border-accent-primary/20 bg-accent-primary/5 text-accent-primary font-body text-xs tracking-[0.2em] uppercase mb-8">
                        Get In Touch
                    </div>
                    <h1 className="contact-hero-anim text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-[-0.04em] leading-[0.95] text-gradient-white mb-6">
                        Let's<br />Connect
                    </h1>
                    <p className="contact-hero-anim text-lg md:text-xl text-text-secondary font-body leading-relaxed max-w-2xl">
                        Have questions? Want to sponsor? Or just want to say hello? We'd love to hear from you.
                    </p>
                </div>

                <div ref={formRef} className="max-w-2xl mx-auto mb-24">
                    <div className="glass rounded-2xl p-10 md:p-14 text-center">
                        <h2 className="text-3xl font-display font-bold text-white mb-6">Connect With Us</h2>
                        <div className="flex flex-col items-center space-y-4">
                            <p className="text-text-secondary font-body text-lg">For any queries, reach out to us:</p>
                            <div className="space-y-6 w-full">
                                <div>
                                    <p className="text-xs font-body tracking-[0.2em] text-text-muted uppercase mb-2">Dhruva</p>
                                    <a href="tel:+918320506177" className="text-3xl md:text-5xl font-display font-bold text-accent-primary hover:text-accent-secondary transition-colors duration-300 tracking-tight">
                                        +91 8320506177
                                    </a>
                                </div>
                                <div className="h-[1px] w-12 bg-white/10 mx-auto" />
                                <div>
                                    <p className="text-xs font-body tracking-[0.2em] text-text-muted uppercase mb-2">Aditi</p>
                                    <a href="tel:+917874871975" className="text-3xl md:text-5xl font-display font-bold text-accent-primary hover:text-accent-secondary transition-colors duration-300 tracking-tight">
                                        +91 7874871975
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={faqRef}>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-10 flex items-center">
                        <span className="w-10 h-[1px] bg-accent-primary mr-4" />
                        Frequently Asked
                    </h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <div key={i} className="glass rounded-xl overflow-hidden">
                                <button onClick={() => toggleFaq(i)} className="w-full flex items-center justify-between p-6 text-left cursor-pointer">
                                    <span className="text-base font-display font-medium text-white pr-4">{faq.q}</span>
                                    <span className={`text-accent-primary text-lg transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                                </button>
                                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? '200px' : '0px', opacity: openFaq === i ? 1 : 0 }}>
                                    <p className="px-6 pb-6 text-sm font-body text-text-secondary leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <div className="w-[1px] h-14 bg-gradient-to-b from-transparent via-accent-primary/15 to-transparent mx-auto mb-3" />
                    <p className="text-xs font-body tracking-[0.2em] text-text-muted uppercase">We reply within 24 hours</p>
                </div>
            </div>
        </div>
    )
}
