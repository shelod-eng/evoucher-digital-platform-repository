import {
  Activity,
  Banknote,
  Building2,
  ClipboardCheck,
  Compass,
  Database,
  Eye,
  FileSearch,
  GitBranch,
  Landmark,
  Layers3,
  Network,
  Presentation,
  Route,
  ShieldCheck,
} from 'lucide-react';
import type { RepositoryStatus } from './repository';

export type PresentationAreaKey =
  | 'overview'
  | 'website'
  | 'infrastructure'
  | 'billing'
  | 'governance'
  | 'command-centre'
  | 'architecture'
  | 'demo'
  | 'evidence';

export type EvidenceLabel = RepositoryStatus | 'LIVE' | 'SANDBOX';

export type PresentationArea = {
  key: PresentationAreaKey;
  title: string;
  shortTitle: string;
  href: string;
  eyebrow: string;
  summary: string;
  status: RepositoryStatus;
  icon: typeof Layers3;
  primaryAction?: {
    label: string;
    href: string;
  };
  bullets: string[];
  systems: string[];
};

export const liveWebsiteUrl = 'https://www.evoucher.co.za';
export const liveInfrastructureUrl = 'https://www.evoucher.co.za/infrastructure';
export const liveCommandCentreUrl = 'https://www.evoucher.co.za/command-centre';
export const liveBillingPortalUrl = 'https://evoucher-billing-portal.vercel.app/BillingEngine';

export const presentationAreas: PresentationArea[] = [
  {
    key: 'overview',
    title: 'Executive Overview',
    shortTitle: 'Overview',
    href: '/',
    eyebrow: 'Enterprise presentation front door',
    summary:
      'The sponsor-ready story of the eVoucher Digital Platform: what it is, how value moves, how the workspaces connect, what is evidenced, and what remains pending.',
    status: 'DOCUMENTED',
    icon: Presentation,
    bullets: [
      'One platform connecting customer, commerce, financial, and governance dimensions.',
      'Presentation portal remains the narrative and evidence layer, not the execution system.',
      'Real production systems stay separate and are linked only where safe.',
    ],
    systems: ['Enterprise Portal', 'Website', 'Infrastructure', 'Billing Engine', 'Command Centre'],
  },
  {
    key: 'website',
    title: 'Website / Customer & Commerce',
    shortTitle: 'Website',
    href: '/website',
    eyebrow: 'Workspace 1',
    summary:
      'The real production website owns the customer and merchant journeys: browse, purchase, payment, voucher issue, wallet, merchant products, redemption, and payout handoff.',
    status: 'VERIFIED',
    icon: Building2,
    primaryAction: { label: 'Open Live Website', href: liveWebsiteUrl },
    bullets: [
      'Customer journey: Consumer to product to purchase to payment to voucher wallet.',
      'Merchant journey: Onboarding to product to voucher to redemption to payout visibility.',
      'The presentation explains these surfaces without copying the production application.',
    ],
    systems: ['Shop', 'Merchant Portal', 'Voucher Engine', 'Wallet', 'Payment Boundary'],
  },
  {
    key: 'infrastructure',
    title: 'Infrastructure',
    shortTitle: 'Infrastructure',
    href: '/infrastructure',
    eyebrow: 'Technical platform support',
    summary:
      'The technical backbone across Next.js, APIs, Supabase, authentication, platform events, outbox, payment services, billing, reconciliation, monitoring, and audit.',
    status: 'DOCUMENTED',
    icon: Network,
    primaryAction: { label: 'Open Infrastructure', href: liveInfrastructureUrl },
    bullets: [
      'Website, API layer, authentication, database, events, payment, billing, and governance boundaries.',
      'Infrastructure posture is presented with evidence labels rather than invented live health.',
      'Deployment, environment, CI/CD, and monitoring boundaries remain explicit.',
    ],
    systems: ['Next.js', 'API Layer', 'Supabase', 'Platform Events', 'Vercel', 'GitHub'],
  },
  {
    key: 'billing',
    title: 'Billing Engine / Financial',
    shortTitle: 'Billing',
    href: '/billing-engine',
    eyebrow: 'Workspace 2',
    summary:
      'The financial architecture from payment through billing event, ledger, settlement, BankServ, ACK/NCK, reconciliation, exceptions, and audit evidence.',
    status: 'DOCUMENTED',
    icon: Banknote,
    primaryAction: { label: 'Open Billing Engine', href: liveBillingPortalUrl },
    bullets: [
      'Billing Engine records financial lifecycle evidence after platform events.',
      'Ledger, settlement, reconciliation, BankServ, ACK/NCK, and audit are presented as controlled domains.',
      'Known gaps remain visible where approval, automation, or production proof is pending.',
    ],
    systems: ['Billing Events', 'Ledger', 'Settlement', 'BankServ', 'ACK/NCK', 'Reconciliation'],
  },
  {
    key: 'governance',
    title: 'Governance',
    shortTitle: 'Governance',
    href: '/governance',
    eyebrow: 'Cross-system controls',
    summary:
      'The platform control layer for audit, compliance, KYC, fraud, security, RBAC, exceptions, POPIA posture, reconciliation controls, and evidence quality.',
    status: 'EVIDENCE PENDING',
    icon: ShieldCheck,
    bullets: [
      'Governance is a core dimension, not a back-office afterthought.',
      'Evidence labels distinguish implemented work from proven operational capability.',
      'No production approvals, certifications, or transaction outcomes are fabricated.',
    ],
    systems: ['Audit', 'Compliance', 'KYC', 'Fraud', 'Security', 'Evidence'],
  },
  {
    key: 'command-centre',
    title: 'Command Centre',
    shortTitle: 'Command Centre',
    href: '/command-centre',
    eyebrow: 'Executive control tower module',
    summary:
      'The Command Centre is one module in the ecosystem: a read-only operational control tower that observes customer, commerce, financial, and governance dimensions.',
    status: 'IMPLEMENTED',
    icon: Eye,
    primaryAction: { label: 'Open Command Centre', href: liveCommandCentreUrl },
    bullets: [
      'Presented as a module, never as the Enterprise Presentation Portal homepage.',
      'Connects to the real production Command Centre route and read-only API.',
      'Operational interventions remain outside the current presentation scope until a future permission and audit model is approved.',
    ],
    systems: ['System Health', 'Exceptions', 'Evidence Status', '4D Operations', 'Read-only API'],
  },
  {
    key: 'architecture',
    title: '4D Architecture',
    shortTitle: '4D Architecture',
    href: '/4d-architecture',
    eyebrow: 'One platform, one source of truth',
    summary:
      'An executive architecture view showing how CUSTOMER, COMMERCE, FINANCIAL, and GOVERNANCE converge into the eVoucher Digital Platform.',
    status: 'DOCUMENTED',
    icon: Layers3,
    bullets: [
      'Customer: Consumer to product to purchase to payment.',
      'Commerce: Merchant to product to voucher to redemption.',
      'Financial: Payment to billing to settlement to reconciliation.',
      'Governance: Monitoring to audit to exceptions to reporting to executive control.',
    ],
    systems: ['Customer', 'Commerce', 'Financial', 'Governance', 'One Source of Truth'],
  },
  {
    key: 'demo',
    title: 'End-to-End Demo',
    shortTitle: 'End-to-End Demo',
    href: '/end-to-end-demo',
    eyebrow: 'Complete ecosystem story',
    summary:
      'A presentation journey tracing one voucher transaction from website entry through payment, voucher issue, billing, ledger, settlement, reconciliation, audit, and Command Centre observation.',
    status: 'DOCUMENTED',
    icon: Route,
    bullets: [
      'Shows the real system responsible for each stage.',
      'Uses evidence-safe labels instead of invented production transaction metrics.',
      'Designed as the primary Wednesday stakeholder storytelling page.',
    ],
    systems: ['Website', 'Payment', 'Voucher', 'Event', 'Billing', 'Ledger', 'Settlement', 'Command Centre'],
  },
  {
    key: 'evidence',
    title: 'Evidence',
    shortTitle: 'Evidence',
    href: '/evidence',
    eyebrow: 'Proof before claims',
    summary:
      'The evidence model explaining LIVE, SANDBOX, CONTROLLED MOCK, EVIDENCE PENDING, GAP / NOT READY, and the difference between implemented and proven.',
    status: 'VERIFIED',
    icon: FileSearch,
    bullets: [
      'Source availability is not the same as business capability proven.',
      'Known gaps remain visible rather than being hidden for presentation polish.',
      'Sensitive data, secrets, credentials, PII, banking information, and raw payloads are excluded.',
    ],
    systems: ['Source Evidence', 'API Evidence', 'Testing Evidence', 'Deployment Evidence', 'Security Evidence'],
  },
];

export const fourDimensions = [
  {
    title: 'Customer',
    status: 'DOCUMENTED' as RepositoryStatus,
    color: 'from-blue-600 to-sky-500',
    steps: ['Consumer', 'Product', 'Purchase', 'Payment'],
  },
  {
    title: 'Commerce',
    status: 'VERIFIED' as RepositoryStatus,
    color: 'from-emerald-600 to-teal-500',
    steps: ['Merchant', 'Product', 'Voucher', 'Redemption'],
  },
  {
    title: 'Financial',
    status: 'DOCUMENTED' as RepositoryStatus,
    color: 'from-slate-900 to-blue-900',
    steps: ['Payment', 'Billing', 'Settlement', 'Reconciliation'],
  },
  {
    title: 'Governance',
    status: 'EVIDENCE PENDING' as RepositoryStatus,
    color: 'from-violet-700 to-indigo-600',
    steps: ['Monitoring', 'Audit', 'Exceptions', 'Reporting', 'Executive Control'],
  },
];

export const ecosystemFlow = [
  'Customer',
  'Website',
  'API',
  'Database',
  'Platform Events',
  'Payment',
  'Billing',
  'Ledger',
  'Settlement',
  'Reconciliation',
  'Governance',
  'Command Centre',
];

export const demoJourney = [
  { label: 'Consumer enters Website', system: 'WEBSITE', status: 'VERIFIED' as RepositoryStatus },
  { label: 'Consumer selects voucher', system: 'WEBSITE', status: 'VERIFIED' as RepositoryStatus },
  { label: 'Purchase initiated', system: 'API', status: 'VERIFIED' as RepositoryStatus },
  { label: 'Payment processed', system: 'PAYMENT', status: 'CONTROLLED MOCK / SANDBOX' as RepositoryStatus },
  { label: 'Voucher issued', system: 'VOUCHER', status: 'VERIFIED' as RepositoryStatus },
  { label: 'Wallet updated', system: 'WEBSITE', status: 'VERIFIED' as RepositoryStatus },
  { label: 'Platform event generated', system: 'EVENT', status: 'VERIFIED' as RepositoryStatus },
  { label: 'Billing event created', system: 'BILLING', status: 'VERIFIED' as RepositoryStatus },
  { label: 'Billing ledger updated', system: 'LEDGER', status: 'VERIFIED' as RepositoryStatus },
  { label: 'Settlement generated', system: 'SETTLEMENT', status: 'GAP / NOT READY' as RepositoryStatus },
  { label: 'Reconciliation performed', system: 'RECONCILIATION', status: 'GAP / NOT READY' as RepositoryStatus },
  { label: 'Merchant payout', system: 'BANKSERV', status: 'GAP / NOT READY' as RepositoryStatus },
  { label: 'Governance evidence recorded', system: 'GOVERNANCE', status: 'EVIDENCE PENDING' as RepositoryStatus },
  { label: 'Command Centre observes state', system: 'COMMAND CENTRE', status: 'IMPLEMENTED' as RepositoryStatus },
];

export const evidenceStates = [
  {
    label: 'LIVE',
    summary: 'A source or deployed surface is reachable. Live does not automatically prove business outcome volume or external approval.',
    tone: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  },
  {
    label: 'SANDBOX',
    summary: 'A controlled non-production environment or provider mode used for development and testing.',
    tone: 'border-sky-200 bg-sky-50 text-sky-800',
  },
  {
    label: 'CONTROLLED MOCK / SANDBOX',
    summary: 'A deliberate simulated or sandbox boundary, not a claim of production provider readiness.',
    tone: 'border-amber-200 bg-amber-50 text-amber-800',
  },
  {
    label: 'EVIDENCE PENDING',
    summary: 'The capability or repository area is defined, but proof has not yet been captured or approved.',
    tone: 'border-slate-200 bg-slate-50 text-slate-700',
  },
  {
    label: 'GAP / NOT READY',
    summary: 'A known readiness gap requiring engineering, governance, commercial, or operational closure.',
    tone: 'border-rose-200 bg-rose-50 text-rose-800',
  },
];

export const executiveQuestions = [
  { question: 'What is it?', answer: 'A digital voucher platform connecting consumers, merchants, payments, vouchers, billing, reconciliation, and governance.' },
  { question: 'How does it work?', answer: 'The production Website executes journeys while the Enterprise Presentation Portal explains architecture, evidence, and system relationships.' },
  { question: 'How does money flow?', answer: 'Payment creates platform evidence, billing events, ledger entries, settlement preparation, reconciliation, and audit controls.' },
  { question: 'What is proven?', answer: 'Source, API, testing, deployment, and evidence records are shown where verified; other claims remain pending.' },
  { question: 'What remains?', answer: 'External provider approvals, BankServ readiness, ACK/NCK gating, and reconciliation automation remain visible as dependencies or gaps.' },
];

export const systemLinkCards = [
  { title: 'Production Website', href: liveWebsiteUrl, icon: Compass, status: 'LIVE' as EvidenceLabel },
  { title: 'Infrastructure View', href: liveInfrastructureUrl, icon: Database, status: 'LIVE' as EvidenceLabel },
  { title: 'Billing Engine Portal', href: liveBillingPortalUrl, icon: Landmark, status: 'DOCUMENTED' as EvidenceLabel },
  { title: 'Command Centre', href: liveCommandCentreUrl, icon: Activity, status: 'IMPLEMENTED' as EvidenceLabel },
  { title: 'Enterprise GitHub', href: 'https://github.com/shelod-eng/evoucher-digital-platform-repository', icon: GitBranch, status: 'VERIFIED' as EvidenceLabel },
];
