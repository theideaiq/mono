import { buttonVariants } from '@theideaiq/ui/components/ui/button';
import { ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { env } from '@theideaiq/env';

export default async function Home({ params }: { params: Promise<{ locale: 'en' | 'ar' }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  // Establish the bridge to your primary platforms
  const platformUrl = env.NEXT_PUBLIC_NEXUS_URL || ''; 

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-32">
      {/* Cinematic Header */}
      <section className="mb-24 flex flex-col items-center text-center md:items-start md:text-left">
        <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <Sparkles className="mr-2 h-4 w-4" />
          {t('badgeText') || 'Welcome to The IDEA IQ'}
        </div>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
          {t('title')} <span className="text-primary">.</span>
        </h1>
        <p className="max-w-3xl text-lg font-light leading-relaxed text-muted-foreground md:text-2xl">
          {t('subtitle')}
        </p>
      </section>

      {/* Modern Split Grid */}
      <section className="grid gap-8 md:grid-cols-2 md:gap-12">
        {/* Card 1: Megastore (Pink Accent) */}
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-border bg-card p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
          {/* Subtle Background Glow */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-[64px] transition-all duration-500 group-hover:bg-primary/20"></div>
          
          <div className="relative z-10">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <ShoppingBag size={32} />
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-wide text-foreground">
              {t('megastoreTitle')}
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              {t('megastoreText')}
            </p>
          </div>

          <div className="relative z-10 mt-auto">
            <a
              href={`${platformUrl}/megastore`}
              className={`${buttonVariants({ variant: 'default', size: 'lg' })} flex w-full items-center justify-center rounded-full font-semibold sm:w-max`}
            >
              {t('exploreMegastoreButton')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
          </div>
        </div>

        {/* Card 2: Plus (Yellow Accent / Cinema Mode Vibe) */}
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-border bg-[#0f1014] p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/10 dark:border-white/10">
          {/* Subtle Background Glow */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-secondary/10 blur-[64px] transition-all duration-500 group-hover:bg-secondary/20"></div>
          
          <div className="relative z-10">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-secondary-foreground">
              <Sparkles size={32} />
            </div>
            {/* Hardcoding white text here to force the cinema vibe regardless of light/dark mode */}
            <h2 className="mb-4 text-3xl font-bold tracking-wide text-white">
              {t('plusTitle')}
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/70">
              {t('plusText')}
            </p>
          </div>

          <div className="relative z-10 mt-auto">
            <a
              href={`${platformUrl}/plus`}
              className={`${buttonVariants({ variant: 'secondary', size: 'lg' })} flex w-full items-center justify-center rounded-full font-semibold sm:w-max`}
            >
              {t('joinPlusButton')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
