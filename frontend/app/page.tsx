"use client"

import Link from "next/link"
import CardHoverEffectDemo from "@/components/ui/card-hover-effect-demo"

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Decentralized Verification, <span className="text-primary">Privacy Preserved</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Verify your identity on-chain while maintaining complete privacy. Issue and prove credentials without
            revealing sensitive information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/verify">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Connect Wallet & Verify
                </span>
              </button>
            </Link>
            <Link href="/credentials">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  View Credentials
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 container border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How Verification Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Upload Document</h3>
              <p className="text-foreground/70">
                Submit your identity document (Aadhaar, Passport, or Driving License) securely.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Verify & Issue</h3>
              <p className="text-foreground/70">
                Our attestors verify your information and issue a Verifiable Credential (VC).
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Generate Proof</h3>
              <p className="text-foreground/70">
                Create zero-knowledge proofs to prove claims without revealing sensitive data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 container border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Aegis</h2>
          <CardHoverEffectDemo />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 container border-t border-border">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Verified?</h2>
          <p className="text-foreground/70 mb-8">
            Join thousands of users who have verified their identity on-chain while maintaining complete privacy.
          </p>
          <Link href="/verify">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Start Verification Now
              </span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
