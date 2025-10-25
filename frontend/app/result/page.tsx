"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Copy } from "lucide-react"
import Link from "next/link"

export default function ResultPage() {
  const proofHash = "0x" + Math.random().toString(16).slice(2, 66)
  const verifierAddress = "0x742d35Cc6634C0532925a3b844Bc9e7595f42e0"
  const timestamp = new Date().toLocaleString()

  return (
    <div className="pt-24 pb-20 container">
      <div className="max-w-2xl mx-auto">
        {/* Success Status */}
        <div className="text-center mb-12">
          <CheckCircle2 className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-2">Verification Successful</h1>
          <p className="text-foreground/70">Your identity has been verified and a credential has been issued.</p>
        </div>

        {/* Details Card */}
        <Card className="p-8 space-y-6 mb-8">
          <div>
            <p className="text-sm text-foreground/60 mb-1">Proof Hash</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 bg-input p-3 rounded-lg text-sm break-all font-mono">{proofHash}</code>
              <Button variant="ghost" size="sm" onClick={() => navigator.clipboard.writeText(proofHash)}>
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-foreground/60 mb-1">Timestamp</p>
              <p className="font-mono text-sm">{timestamp}</p>
            </div>
            <div>
              <p className="text-sm text-foreground/60 mb-1">Verifier Contract</p>
              <p className="font-mono text-sm break-all">{verifierAddress}</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-foreground/60 mb-1">Credential Type</p>
            <p className="font-semibold">Identity Verified</p>
          </div>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/credentials" className="flex-1">
            <Button className="w-full bg-primary hover:bg-primary/90">View My Credentials</Button>
          </Link>
          <Link href="/" className="flex-1">
            <Button variant="outline" className="w-full bg-transparent">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
