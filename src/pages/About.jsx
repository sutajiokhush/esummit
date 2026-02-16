import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const stats = [
    { value: '6', label: 'Events' },
    { value: '3', label: 'Days' },
]

    < div className = "mt-24 text-center" >
                    <div className="w-[1px] h-14 bg-gradient-to-b from-transparent via-accent-primary/15 to-transparent mx-auto mb-3" />
                    <p className="text-xs font-body tracking-[0.2em] text-text-muted uppercase">
                        Built with passion · E-Summit 2026
                    </p>
                </div >
            </div >
        </div >
    )
}
