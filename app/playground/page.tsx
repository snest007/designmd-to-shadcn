import { Suspense } from "react"

import { PlaygroundClient } from "@/components/playground/playground-client"
import { getDesignSourceSummaries } from "@/lib/design/source"

export const metadata = {
  title: "DESIGN.md Playground",
  description: "Preview multiple DESIGN.md profiles on the same shadcn canvas.",
}

function PlaygroundFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-24 text-center text-muted-foreground">
      Loading playground...
    </div>
  )
}

export default async function PlaygroundPage() {
  const sources = await getDesignSourceSummaries()

  return (
    <Suspense fallback={<PlaygroundFallback />}>
      <PlaygroundClient sources={sources} />
    </Suspense>
  )
}
