"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Clock } from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("pending")

  const pendingRequests = [
    {
      id: "1",
      wallet: "0x742d35Cc6634C0532925a3b844Bc9e7595f42e0",
      documentType: "Aadhaar",
      submittedDate: "2024-01-15",
    },
    {
      id: "2",
      wallet: "0x8a1f9b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a",
      documentType: "Passport",
      submittedDate: "2024-01-14",
    },
  ]

  const issuedCredentials = [
    {
      id: "1",
      wallet: "0x742d35Cc6634C0532925a3b844Bc9e7595f42e0",
      credentialType: "Age Verified",
      issuedDate: "2024-01-10",
      status: "Active",
    },
    {
      id: "2",
      wallet: "0x8a1f9b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a",
      credentialType: "Nationality Verified",
      issuedDate: "2024-01-05",
      status: "Active",
    },
    {
      id: "3",
      wallet: "0x1234567890abcdef1234567890abcdef12345678",
      credentialType: "Identity Verified",
      issuedDate: "2023-12-20",
      status: "Revoked",
    },
  ]

  const auditLogs = [
    {
      id: "1",
      action: "Credential Issued",
      user: "0x742d35Cc6634C0532925a3b844Bc9e7595f42e0",
      timestamp: "2024-01-15 10:30 AM",
    },
    {
      id: "2",
      action: "Verification Approved",
      user: "0x8a1f9b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a",
      timestamp: "2024-01-14 03:15 PM",
    },
    {
      id: "3",
      action: "Credential Revoked",
      user: "0x1234567890abcdef1234567890abcdef12345678",
      timestamp: "2024-01-13 09:45 AM",
    },
  ]

  return (
    <div className="pt-24 pb-20 container">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Attestor Dashboard</h1>
        <p className="text-foreground/70 mb-12">Manage verification requests and issued credentials.</p>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          {["pending", "issued", "audit"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground/60 hover:text-foreground"
              }`}
            >
              {tab === "pending" && "Pending Requests"}
              {tab === "issued" && "Issued Credentials"}
              {tab === "audit" && "Audit Logs"}
            </button>
          ))}
        </div>

        {/* Pending Requests Tab */}
        {activeTab === "pending" && (
          <div className="space-y-4">
            {pendingRequests.map((request) => (
              <Card key={request.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-yellow-600" />
                      <p className="font-mono text-sm">{request.wallet}</p>
                    </div>
                    <p className="text-sm text-foreground/70">
                      Document: <span className="font-semibold">{request.documentType}</span> • Submitted:{" "}
                      <span className="font-semibold">{request.submittedDate}</span>
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button className="bg-green-600 hover:bg-green-700">Approve</Button>
                    <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent">
                      Reject
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Issued Credentials Tab */}
        {activeTab === "issued" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Wallet Address</th>
                  <th className="text-left py-3 px-4 font-semibold">Credential Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Issued Date</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {issuedCredentials.map((credential) => (
                  <tr key={credential.id} className="border-b border-border hover:bg-muted/50">
                    <td className="py-3 px-4 font-mono text-sm">{credential.wallet}</td>
                    <td className="py-3 px-4">{credential.credentialType}</td>
                    <td className="py-3 px-4 text-sm">{credential.issuedDate}</td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={credential.status === "Active" ? "default" : "destructive"}
                        className={credential.status === "Active" ? "bg-green-600" : ""}
                      >
                        {credential.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      {credential.status === "Active" && (
                        <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                          Revoke
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Audit Logs Tab */}
        {activeTab === "audit" && (
          <div className="space-y-4">
            {auditLogs.map((log) => (
              <Card key={log.id} className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {log.action.includes("Issued") && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                  {log.action.includes("Approved") && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                  {log.action.includes("Revoked") && <XCircle className="w-5 h-5 text-red-600" />}
                  <div>
                    <p className="font-semibold">{log.action}</p>
                    <p className="text-sm text-foreground/70 font-mono">{log.user}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/60">{log.timestamp}</p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
