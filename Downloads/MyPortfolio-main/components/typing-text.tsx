"use client"

import { useTypingEffect } from "@/hooks/use-typing-effect"

interface TypingTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

export function TypingText({ text, speed = 100, delay = 0, className = "" }: TypingTextProps) {
  const { displayText, isComplete } = useTypingEffect(text, speed, delay)

  return (
    <span className={className}>
      {displayText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  )
}
