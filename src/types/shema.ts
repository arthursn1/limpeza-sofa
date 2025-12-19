import { z } from "zod";

// --- NAVBAR ---
export const NavbarSchema = z.object({
  type: z.literal("Navbar"),
  props: z.object({
    // ACEITA STRING OU OBJETO DE IMAGEM IMPORTADA
    logoUrl: z.union([z.string(), z.any()]), 
    logoText: z.string(),
    links: z.array(z.object({ label: z.string(), href: z.string() })),
    ctaText: z.string(),
    ctaLink: z.string(),
  }),
});

// --- HERO ---
export const HeroSchema = z.object({
  type: z.literal("Hero"),
  props: z.object({
    badge: z.string().optional(),
    title: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    primaryCta: z.object({ text: z.string(), href: z.string() }),
    secondaryCta: z.object({ text: z.string(), href: z.string() }).optional(),
    // ATUALIZADO PARA ACEITAR IMPORTAÇÃO
    imageDirtyUrl: z.union([z.string(), z.any()]),
    imageCleanUrl: z.union([z.string(), z.any()]),
    stats: z.string().optional(),
  }),
});

// --- SERVICES --- (Sem alterações)
export const ServicesSchema = z.object({
  type: z.literal("Services"),
  props: z.object({
    eyebrow: z.string().optional(),
    title: z.string(),
    description: z.string(),
    items: z.array(z.object({
      icon: z.enum(["sofa", "chair", "bed", "rug", "car", "shield"]),
      title: z.string(),
      description: z.string(),
    })),
  }),
});

// --- BEFORE AFTER ---
export const BeforeAfterSchema = z.object({
  type: z.literal("BeforeAfter"),
  props: z.object({
    eyebrow: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    items: z.array(z.object({
      title: z.string(),
      description: z.string(),
      // ATUALIZADO PARA ACEITAR IMPORTAÇÃO
      beforeImage: z.union([z.string(), z.any()]),
      afterImage: z.union([z.string(), z.any()]),
      alt: z.string().optional(),
    })),
    bottomCta: z.string().optional(),
  }),
});

// --- TESTIMONIALS ---
export const TestimonialsSchema = z.object({
  type: z.literal("Testimonials"),
  props: z.object({
    eyebrow: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    items: z.array(z.object({
      name: z.string(),
      location: z.string(),
      text: z.string(),
      // ATUALIZADO (Caso queira usar fotos locais no futuro)
      avatar: z.union([z.string(), z.any()]).optional(),
    })),
  }),
});

// --- CONTACT FORM --- (Sem alterações)
export const ContactFormSchema = z.object({
  type: z.literal("ContactForm"),
  props: z.object({
    eyebrow: z.string().optional(),
    title: z.string(),
    description: z.string(),
    info: z.object({
      phone: z.string(),
      address: z.string(),
      hours: z.string(),
    }),
    mapUrl: z.string(),
    formLabels: z.object({
      name: z.string(),
      phone: z.string(),
      message: z.string(),
      button: z.string(),
    }),
  }),
});

// --- FOOTER ---
export const FooterSchema = z.object({
  type: z.literal("Footer"),
  props: z.object({
    // ATUALIZADO PARA ACEITAR IMPORTAÇÃO
    logoUrl: z.union([z.string(), z.any()]),
    logoAlt: z.string().optional(),
    description: z.string(),
    links: z.array(z.object({
      label: z.string(),
      href: z.string()
    })),
    socials: z.object({
      instagram: z.string().optional(),
      facebook: z.string().optional(),
      whatsapp: z.string().optional(),
    }),
    copyright: z.string(),
  }),
});

// --- FEATURES --- (Sem alterações)
export const FeaturesSchema = z.object({
  type: z.literal("Features"),
  props: z.object({
    title: z.string(),
    items: z.array(z.object({ title: z.string(), description: z.string() })),
  }),
});

export const PageBlockSchema = z.discriminatedUnion("type", [
  NavbarSchema,
  HeroSchema,
  ServicesSchema,
  BeforeAfterSchema,
  TestimonialsSchema,
  ContactFormSchema,
  FooterSchema,
  FeaturesSchema,
]);

export type PageBlock = z.infer<typeof PageBlockSchema>;