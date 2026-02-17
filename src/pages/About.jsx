import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const stats = [
    { value: '6', label: 'Events' },
    { value: '3', label: 'Days' },
]

import teamPhoto from '../assets/team-photo.jpeg'
import teamPhoto2 from '../assets/team-photo-2.jpeg'

export default function About() {
    const containerRef = useRef(null)
    const heroRef = useRef(null)
    const missionRef = useRef(null)
    const statsRef = useRef(null)
    const teamRef = useRef(null)

    useGSAP(() => {
        window.scrollTo(0, 0)

        gsap.from(heroRef.current.querySelectorAll('.about-hero-anim'), {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
        })

        gsap.from(missionRef.current, {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: missionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
        })

        gsap.from(statsRef.current.querySelectorAll('.stat-item'), {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: statsRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
        })

        gsap.from(teamRef.current.querySelectorAll('.team-anim'), {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: teamRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
        })
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="min-h-screen text-white relative overflow-hidden bg-mountain">
            <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-24">
                <div ref={heroRef} className="mb-24">
                    <div className="about-hero-anim inline-block px-4 py-1.5 rounded-full border border-accent-primary/20 bg-accent-primary/5 text-accent-primary font-body text-xs tracking-[0.2em] uppercase mb-8">
                        About Us
                    </div>
                    <h1 className="about-hero-anim text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-[-0.04em] leading-[0.95] text-gradient-white mb-6">
                        The Summit<br />Experience
                    </h1>
                    <p className="about-hero-anim text-lg md:text-xl text-text-secondary font-body leading-relaxed max-w-2xl">
                        E-Summit is the flagship entrepreneurship event that brings together the brightest minds, fiercest competitors, and most innovative thinkers under one roof.
                    </p>
                </div>

                <div ref={missionRef} className="mb-24 glass rounded-2xl p-10 md:p-14">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 flex items-center">
                        <span className="w-10 h-[1px] bg-accent-primary mr-4" />
                        Our Mission
                    </h2>
                    <p className="text-base md:text-lg text-text-secondary font-body leading-[1.8]">
                        We believe entrepreneurship is not just about starting companies — it's a mindset. E-Summit exists to ignite that spark in every student. Through high-stakes competitions, expert-led sessions, and immersive experiences, we create an environment where ideas transform into action. Our mission is to bridge the gap between academic knowledge and real-world business acumen, empowering the next generation of leaders, innovators, and disruptors.
                    </p>
                </div>

                <div ref={statsRef} className="mb-24">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {stats.map((stat, i) => (
                            <div key={i} className="stat-item text-center p-8 glass rounded-xl">
                                <div className="text-4xl md:text-5xl font-display font-bold text-gradient-sunrise mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-body tracking-[0.15em] text-text-muted uppercase">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div ref={teamRef} className="mb-24">
                    <h2 className="team-anim text-2xl md:text-3xl font-display font-bold text-white mb-10 flex items-center">
                        <span className="w-10 h-[1px] bg-accent-primary mr-4" />
                        Our Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="team-anim group relative overflow-hidden rounded-2xl aspect-[4/3] glass">
                            <img
                                src={teamPhoto}
                                alt="E-Summit Organizing Team"
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="team-anim group relative overflow-hidden rounded-2xl aspect-[4/3] glass">
                            <img
                                src={teamPhoto2}
                                alt="E-Summit Organizing Team 2"
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <div className="w-[1px] h-14 bg-gradient-to-b from-transparent via-accent-primary/15 to-transparent mx-auto mb-3" />
                    <p className="text-xs font-body tracking-[0.2em] text-text-muted uppercase">
                        Built with passion · E-Summit 2026
                    </p>
                </div>
            </div>
        </div>
    )
}
