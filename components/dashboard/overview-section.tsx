'use client'

import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Overview = dynamic(() => import('./overview').then(mod => mod.Overview), {
  ssr: false
})

export function OverviewSection() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <Overview />
      </CardContent>
    </Card>
  )
} 