"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Copy } from "lucide-react"

export default function CredentialsPage() {
  const [selectedCredential, setSelectedCredential] = useState<string | null>(null)
  const [showProofModal, setShowProofModal] = useState(false)
  const [proofHash, setProofHash] = useState<string | null>(null)

  const credentials = [
    {
      id: "1",
      type: "Age Verified",
      status: "Verified",
      issuer: "Attestor 1",
      issuedDate: "2024-01-15",
      expiryDate: "2025-01-15",
    },
    {
      id: "2",
      type: "Nationality Verified",
      status: "Verified",
      issuer: "Attestor 2",
      issuedDate: "2024-02-20",
      expiryDate: "2026-02-20",
    },
    {
      id: "3",
      type: "Identity Verified",
      status: "Revoked",
      issuer: "Attestor 1",
      issuedDate: "2023-12-01",
      expiryDate: "2024-12-01",
    },
  ]

  const handleGenerateProof = () => {
    setShowProofModal(true)
    // Simulate proof generation
    setTimeout(() => {
      setProofHash("0x" + Math.random().toString(16).slice(2, 66))
    }, 1500)
  }

  return (
    <div className="pt-24 pb-20 container">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">My Credentials</h1>
        <p className="text-foreground/70 mb-12">
          View your issued credentials and generate selective disclosure proofs.
        </p>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {credentials.map((credential) => (
            <Card
              key={credential.id}
              className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedCredential(credential.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-lg">{credential.type}</h3>
                <Badge
                  variant={credential.status === "Verified" ? "default" : "destructive"}
                  className={credential.status === "Verified" ? "bg-green-600" : ""}
                >
                  {credential.status}
                </Badge>
              </div>

              <div className="space-y-2 text-sm text-foreground/70 mb-6">
                <p>
                  <span className="font-semibold">Issuer:</span> {credential.issuer}
                </p>
                <p>
                  <span className="font-semibold">Issued:</span> {credential.issuedDate}
                </p>
                <p>
                  <span className="font-semibold">Expires:</span> {credential.expiryDate}
                </p>
              </div>

              {credential.status === "Verified" && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleGenerateProof()
                  }}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Generate Proof
                </Button>
              )}
            </Card>
          ))}
        </div>

        {/* Proof Modal */}
        {showProofModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-md w-full p-8">
              <h2 className="text-2xl font-bold mb-6">Generate Selective Disclosure Proof</h2>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Select Credential</label>
                  <select className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Age Verified</option>
                    <option>Nationality Verified</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Data to Disclose</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-sm">Age Range (18+)</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">Exact Age</span>
                    </label>
                  </div>
                </div>
              </div>

              {proofHash && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <p className="font-semibold text-green-900">Proof Generated Successfully</p>
                  </div>
                  <p className="text-sm text-green-700 break-all font-mono">{proofHash}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigator.clipboard.writeText(proofHash)}
                    className="mt-2 gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    Copy Proof
                  </Button>
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowProofModal(false)
                    setProofHash(null)
                  }}
                  className="flex-1"
                >
                  Close
                </Button>
                {!proofHash && (
                  <Button onClick={handleGenerateProof} className="flex-1 bg-primary hover:bg-primary/90">
                    Generate Proof
                  </Button>
                )}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
