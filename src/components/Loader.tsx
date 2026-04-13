import { useEffect, useState } from 'react'

interface LoaderProps {
    loading: boolean
}

export default function Loader({ loading }: LoaderProps) {
    const [pct, setPct] = useState(0)
    const [reveal, setReveal] = useState(false)
    const [exit, setExit] = useState(false)

    useEffect(() => {
        if (!loading) return

        // Animate percentage
        const interval = setInterval(() => {
            setPct(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return prev + Math.floor(Math.random() * 6) + 2
            })
        }, 60)

        // Reveal curtains at 80%
        const revealTimer = setTimeout(() => setReveal(true), 2200)
        // Exit animation
        const exitTimer = setTimeout(() => setExit(true), 2800)

        return () => {
            clearInterval(interval)
            clearTimeout(revealTimer)
            clearTimeout(exitTimer)
        }
    }, [loading])

    if (!loading && exit) return null

    return (
        <div className={`loader${reveal ? ' reveal' : ''}${exit ? ' exit' : ''}`}>
            <div className="loader-curtain-left" />
            <div className="loader-curtain-right" />

            <div className="loader-logo-wrap">
                <div className="loader-wordmark">
                    {'COCO'.split('').map((char, i) => (
                        <span key={i}>{char}</span>
                    ))}
                </div>
                <div className="loader-sub">Studios &nbsp;·&nbsp; Unisex</div>

                <div className="loader-line-wrap">
                    <div className="loader-line" />
                </div>

                <div className="loader-pct">{Math.min(pct, 100)}%</div>
            </div>
        </div>
    )
}