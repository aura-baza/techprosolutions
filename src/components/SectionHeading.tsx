import { Badge } from "@/components/ui/badge"

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string
  title: string
  highlight?: string
  description?: string
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <Badge variant="outline" className="mb-4 border-cyan/40 bg-cyan/10 text-cyan">
        {eyebrow}
      </Badge>
      <h2 className="text-3xl font-bold sm:text-4xl">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && <p className="mt-4 text-muted-foreground sm:text-lg">{description}</p>}
    </div>
  )
}
