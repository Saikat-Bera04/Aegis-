"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, CheckCircle2, AlertCircle } from "lucide-react"

export default function VerifyPage() {
  const [documentType, setDocumentType] = useState("aadhaar")
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<"idle" | "pending" | "verified" | "rejected">("idle")
  const [walletAddress] = useState("0x742d35Cc6634C0532925a3b844Bc9e7595f42e0")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setStatus("pending")
    // Simulate verification process
    setTimeout(() => {
      setStatus("verified")
    }, 2000)
  }

  return (
    <div className="pt-24 pb-20 container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Verify Your Identity</h1>
        <p className="text-foreground/70 mb-12">
          Submit your document for verification. Your information will be kept private and secure.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="md:col-span-2">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Document Type */}
                <div>
                  <label className="block text-sm font-semibold mb-3">Document Type</label>
                  <select
                    value={documentType}
                    onChange={(e) => setDocumentType(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="aadhaar">Aadhaar</option>
                    <option value="passport">Passport</option>
                    <option value="driving-license">Driving License</option>
                  </select>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-semibold mb-3">Upload Document</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                      accept="image/*,.pdf"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="font-semibold mb-1">{file ? file.name : "Click to upload or drag and drop"}</p>
                      <p className="text-sm text-foreground/60">PNG, JPG, PDF up to 10MB</p>
                    </label>
                  </div>
                </div>

                {/* Status Messages */}
                {status === "pending" && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-blue-900">Verification Pending</p>
                      <p className="text-sm text-blue-700">Your document is being verified by our attestors.</p>
                    </div>
                  </div>
                )}

                {status === "verified" && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-900">Verification Successful</p>
                      <p className="text-sm text-green-700">
                        Your identity has been verified. A Verifiable Credential has been issued.
                      </p>
                    </div>
                  </div>
                )}

                {status === "rejected" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-900">Verification Failed</p>
                      <p className="text-sm text-red-700">Please check your document and try again.</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={!file || status === "pending"}
                  className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50"
                >
                  {status === "pending" ? "Verifying..." : "Submit for Verification"}
                </Button>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Wallet Info */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Connected Wallet</h3>
              <p className="text-sm text-foreground/70 break-all font-mono">{walletAddress}</p>
            </Card>

            {/* How It Works */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">How Verification Works</h3>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span>Upload your document securely</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span>Our attestors verify your information</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span>Receive a Verifiable Credential</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">4.</span>
                  <span>Generate proofs without revealing data</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
