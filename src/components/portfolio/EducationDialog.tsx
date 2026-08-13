import { GraduationCap, BadgeCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { certifications, education } from "@/data/portfolio";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function EducationDialog({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-3xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="display text-2xl sm:text-3xl">
            Formação e certificações
          </DialogTitle>
          <DialogDescription className="font-serif text-sm leading-relaxed text-muted-foreground">
            Da base em design gráfico à estratégia de produto em instituições como ESPM, AUT e MIT.
          </DialogDescription>
        </DialogHeader>

        <h3 className="mt-6 font-serif text-base text-foreground sm:text-lg">
          Formação acadêmica
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {education.map((e) => (
            <div
              key={`${e.degree}-${e.institution}`}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <GraduationCap className="size-5 text-accent" aria-hidden />
              <p className="display mt-3 text-lg leading-snug sm:text-xl">{e.degree}</p>
              <p className="mt-2 text-sm text-foreground">{e.institution}</p>
              <p className="mt-1 text-sm text-muted-foreground">{e.location}</p>
              <p className="mt-3 font-serif text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                {e.period}
              </p>
            </div>
          ))}
        </div>

        <h3 className="mt-10 font-serif text-base text-foreground sm:text-lg">Certificações</h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {certifications.map((c) => (
            <li
              key={c.title}
              className="flex gap-3 rounded-md border border-border px-4 py-3"
            >
              <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
              <p className="text-sm leading-snug">{c.title}</p>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
