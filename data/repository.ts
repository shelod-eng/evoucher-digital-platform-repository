import {
  Archive,
  BadgeCheck,
  Banknote,
  Boxes,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  Cloud,
  Code2,
  Database,
  FileText,
  GitBranch,
  Landmark,
  Layers3,
  LockKeyhole,
  Network,
  Route,
  ShieldCheck,
  TestTube2,
} from 'lucide-react';

export type RepositoryStatus =
  | 'IMPLEMENTED'
  | 'DOCUMENTED'
  | 'CONTROLLED MOCK / SANDBOX'
  | 'PENDING DEPENDENCY'
  | 'GAP / NOT READY'
  | 'EVIDENCE PENDING';

export type Sensitivity = 'Public Architecture' | 'Internal' | 'Restricted' | 'No Secrets';

export type RepositoryRecord = {
  title: string;
  summary: string;
  status: RepositoryStatus;
  owner: string;
  relatedComponent: string;
  evidenceRefs: string[];
  sourceType: string;
  lastVerified: string;
  sensitivity: Sensitivity;
};

export type NavItem = {
  title: string;
  href: string;
  summary: string;
  icon: typeof Layers3;
};

export type PlatformComponent = RepositoryRecord & {
  layer: string;
  responsibilities: string[];
  integrations: string[];
};

export type SectionContent = {
  title: string;
  eyebrow: string;
  summary: string;
  route: string;
  icon: typeof Layers3;
  records: RepositoryRecord[];
};

export const statusDescriptions: Record<RepositoryStatus, string> = {
  IMPLEMENTED: 'Implementation exists in the platform or supporting repository evidence.',
  DOCUMENTED: 'Architecture or engineering information is captured as documentation.',
  'CONTROLLED MOCK / SANDBOX': 'Deliberate sandbox boundary pending external approval or integration.',
  'PENDING DEPENDENCY': 'Requires an external, commercial, legal, or technical dependency.',
  'GAP / NOT READY': 'Known readiness gap that requires engineering or governance closure.',
  'EVIDENCE PENDING': 'Evidence area exists, but verified artefacts have not yet been captured.',
};

export const navigation: NavItem[] = [
  { title: 'Executive Overview', href: '/executive', summary: 'Sponsor-ready view of purpose, value, status, gaps, and evidence.', icon: BriefcaseBusiness },
  { title: 'Business', href: '/business', summary: 'Capabilities, business model, journeys, and operating processes.', icon: Building2 },
  { title: 'Platform', href: '/platform', summary: 'Consumer, merchant, payment, voucher, billing, ledger, and analytics components.', icon: Boxes },
  { title: 'Financial Lifecycle', href: '/financial', summary: 'Payment, billing, ledger, payout, settlement, and reconciliation flows.', icon: Banknote },
  { title: 'Integration', href: '/integration', summary: 'External systems, provider boundaries, BankServ, APIs, and events.', icon: Network },
  { title: 'Data', href: '/data', summary: 'Entities, database architecture, data flows, reporting, and reconciliation data.', icon: Database },
  { title: 'Security', href: '/security', summary: 'Identity, authorization, secrets, audit, controls, and DevSecOps.', icon: ShieldCheck },
  { title: 'Infrastructure', href: '/infrastructure', summary: 'Cloud, Vercel, GitHub, CI/CD, environments, and deployment boundaries.', icon: Cloud },
  { title: 'Testing', href: '/testing', summary: 'Test strategy, E2E, controlled sandbox, acceptance testing, and evidence.', icon: TestTube2 },
  { title: 'ADRs', href: '/adrs', summary: 'Architecture decision index and decision records.', icon: GitBranch },
  { title: 'Evidence', href: '/evidence', summary: 'Architecture, code, API, database, deployment, screenshot, and security evidence.', icon: Archive },
  { title: 'Controlled Mocks', href: '/mocks', summary: 'Sandbox boundaries, pending dependencies, known gaps, and readiness.', icon: ClipboardCheck },
];

export const platformComponents: PlatformComponent[] = [
  {
    title: 'Consumer',
    summary: 'Entry point for customers who discover, purchase, store, and redeem vouchers.',
    status: 'DOCUMENTED',
    owner: 'Business Architecture',
    relatedComponent: 'Consumer Marketplace',
    evidenceRefs: ['Evidence Pending'],
    sourceType: 'Repository seed model',
    lastVerified: '2026-08-14',
    sensitivity: 'Public Architecture',
    layer: 'Experience',
    responsibilities: ['Customer access', 'Voucher discovery', 'Wallet interaction'],
    integrations: ['Marketplace', 'Payment Boundary', 'Voucher Engine'],
  },
  {
    title: 'Marketplace',
    summary: 'Commerce surface where consumers browse merchant offers and initiate voucher purchases.',
    status: 'DOCUMENTED',
    owner: 'Platform Architecture',
    relatedComponent: 'Consumer Marketplace',
    evidenceRefs: ['Production route family inspected'],
    sourceType: 'Source-code reference',
    lastVerified: '2026-08-14',
    sensitivity: 'No Secrets',
    layer: 'Application',
    responsibilities: ['Offer discovery', 'Cart flow', 'Purchase initiation'],
    integrations: ['Consumer', 'Merchant Portal', 'Payment Boundary'],
  },
  {
    title: 'Payment Boundary',
    summary: 'Boundary for payment orchestration and sandbox payment scenarios.',
    status: 'CONTROLLED MOCK / SANDBOX',
    owner: 'Integration Architecture',
    relatedComponent: 'Payment Provider Boundary',
    evidenceRefs: ['Payment sandbox source routes inspected'],
    sourceType: 'Source-code reference',
    lastVerified: '2026-08-14',
    sensitivity: 'Internal',
    layer: 'Integration',
    responsibilities: ['Payment intent boundary', 'Webhook boundary', 'Sandbox provider scenarios'],
    integrations: ['Marketplace', 'Voucher Engine', 'Billing Engine'],
  },
  {
    title: 'Voucher Engine',
    summary: 'Issues and manages voucher artefacts after successful purchase events.',
    status: 'DOCUMENTED',
    owner: 'Platform Architecture',
    relatedComponent: 'Voucher Engine',
    evidenceRefs: ['Evidence Pending'],
    sourceType: 'Repository seed model',
    lastVerified: '2026-08-14',
    sensitivity: 'Internal',
    layer: 'Application',
    responsibilities: ['Voucher issue', 'Voucher state', 'Redemption handoff'],
    integrations: ['Payment Boundary', 'Billing Engine', 'Consumer Wallet'],
  },
  {
    title: 'Billing Engine',
    summary: 'Records platform events into billing events, ledger entries, payouts, settlements, invoices, and audit records.',
    status: 'DOCUMENTED',
    owner: 'Financial Architecture',
    relatedComponent: 'Billing Engine',
    evidenceRefs: ['docs/BILLING_ENGINE_CURRENT_STATE.md'],
    sourceType: 'Verified source-code trace',
    lastVerified: '2026-08-08',
    sensitivity: 'Internal',
    layer: 'Financial',
    responsibilities: ['Billing event recording', 'Ledger posting', 'Invoice and payout preparation'],
    integrations: ['Voucher Engine', 'Ledger', 'Settlement', 'Audit'],
  },
  {
    title: 'Ledger',
    summary: 'Financial record layer for billing ledger entries and reconciliation checks.',
    status: 'DOCUMENTED',
    owner: 'Financial Architecture',
    relatedComponent: 'Ledger',
    evidenceRefs: ['docs/BILLING_ENGINE_CURRENT_STATE.md'],
    sourceType: 'Verified source-code trace',
    lastVerified: '2026-08-08',
    sensitivity: 'Internal',
    layer: 'Financial',
    responsibilities: ['Double-entry traceability', 'Source idempotency', 'Ledger verification'],
    integrations: ['Billing Engine', 'Reconciliation', 'Analytics'],
  },
  {
    title: 'Merchant Payout',
    summary: 'Merchant payout records generated from the billing lifecycle and settlement preparation.',
    status: 'DOCUMENTED',
    owner: 'Financial Architecture',
    relatedComponent: 'Merchant Payout',
    evidenceRefs: ['docs/BILLING_ENGINE_CURRENT_STATE.md'],
    sourceType: 'Verified source-code trace',
    lastVerified: '2026-08-08',
    sensitivity: 'Internal',
    layer: 'Financial',
    responsibilities: ['Payout staging', 'Merchant financial view', 'Settlement handoff'],
    integrations: ['Billing Engine', 'Settlement', 'BankServ Boundary'],
  },
  {
    title: 'Settlement',
    summary: 'Settlement lifecycle that prepares batches and interfaces with banking rails.',
    status: 'GAP / NOT READY',
    owner: 'Financial Architecture',
    relatedComponent: 'Settlement',
    evidenceRefs: ['docs/BILLING_ENGINE_IMPLEMENTATION_PLAN.md'],
    sourceType: 'Engineering plan',
    lastVerified: '2026-08-08',
    sensitivity: 'Internal',
    layer: 'Financial',
    responsibilities: ['Settlement batching', 'File generation', 'Approval controls'],
    integrations: ['Merchant Payout', 'BankServ Boundary', 'Reconciliation'],
  },
  {
    title: 'Reconciliation',
    summary: 'Reconciliation engine exists but current evidence identifies manual-only execution.',
    status: 'GAP / NOT READY',
    owner: 'Financial Architecture',
    relatedComponent: 'Reconciliation',
    evidenceRefs: ['docs/BILLING_ENGINE_CURRENT_STATE.md'],
    sourceType: 'Verified source-code trace',
    lastVerified: '2026-08-08',
    sensitivity: 'Internal',
    layer: 'Financial',
    responsibilities: ['Exception detection', 'Run records', 'Manual review support'],
    integrations: ['Ledger', 'Settlement', 'Analytics'],
  },
  {
    title: 'Analytics',
    summary: 'Reporting and analytical view over platform activity and financial lifecycle evidence.',
    status: 'EVIDENCE PENDING',
    owner: 'Data Architecture',
    relatedComponent: 'Analytics',
    evidenceRefs: ['Evidence Pending'],
    sourceType: 'Repository seed model',
    lastVerified: '2026-08-14',
    sensitivity: 'Internal',
    layer: 'Data',
    responsibilities: ['Reporting', 'Executive summaries', 'Operational insight'],
    integrations: ['Ledger', 'Reconciliation', 'Evidence Centre'],
  },
];

export const financialLifecycle: RepositoryRecord[] = [
  { title: 'Payment Lifecycle', summary: 'Purchase initiation, payment boundary, webhook handling, and completion evidence.', status: 'CONTROLLED MOCK / SANDBOX', owner: 'Integration Architecture', relatedComponent: 'Payment Boundary', evidenceRefs: ['Evidence Pending'], sourceType: 'Repository seed model', lastVerified: '2026-08-14', sensitivity: 'Internal' },
  { title: 'Billing Lifecycle', summary: 'Platform event to billing event, ledger entries, merchant payout, settlement, invoice, and audit records.', status: 'DOCUMENTED', owner: 'Financial Architecture', relatedComponent: 'Billing Engine', evidenceRefs: ['docs/BILLING_ENGINE_CURRENT_STATE.md'], sourceType: 'Verified source-code trace', lastVerified: '2026-08-08', sensitivity: 'Internal' },
  { title: 'Ledger Lifecycle', summary: 'Idempotent ledger posting connected to transaction references and source identifiers.', status: 'DOCUMENTED', owner: 'Financial Architecture', relatedComponent: 'Ledger', evidenceRefs: ['docs/BILLING_ENGINE_CURRENT_STATE.md'], sourceType: 'Verified source-code trace', lastVerified: '2026-08-08', sensitivity: 'Internal' },
  { title: 'Payout Lifecycle', summary: 'Merchant payout preparation with settlement handoff and control requirements.', status: 'DOCUMENTED', owner: 'Financial Architecture', relatedComponent: 'Merchant Payout', evidenceRefs: ['docs/BILLING_ENGINE_CURRENT_STATE.md'], sourceType: 'Verified source-code trace', lastVerified: '2026-08-08', sensitivity: 'Internal' },
  { title: 'Settlement Lifecycle', summary: 'Settlement batch, BankServ file, ACK/NCK, approval, and payout gating model.', status: 'GAP / NOT READY', owner: 'Financial Architecture', relatedComponent: 'Settlement', evidenceRefs: ['docs/BILLING_ENGINE_IMPLEMENTATION_PLAN.md'], sourceType: 'Engineering plan', lastVerified: '2026-08-08', sensitivity: 'Internal' },
  { title: 'Reconciliation', summary: 'Manual reconciliation path documented; scheduled automation remains a readiness gap.', status: 'GAP / NOT READY', owner: 'Financial Architecture', relatedComponent: 'Reconciliation', evidenceRefs: ['docs/BILLING_ENGINE_CURRENT_STATE.md'], sourceType: 'Verified source-code trace', lastVerified: '2026-08-08', sensitivity: 'Internal' },
];

export const controlledMocks: RepositoryRecord[] = [
  { title: 'External Payment Provider', summary: 'Internal sandbox boundary supports controlled E2E testing until provider approval, agreement, and credentials exist.', status: 'CONTROLLED MOCK / SANDBOX', owner: 'Integration Architecture', relatedComponent: 'Payment Boundary', evidenceRefs: ['Evidence Pending'], sourceType: 'Repository seed model', lastVerified: '2026-08-14', sensitivity: 'Restricted' },
  { title: 'BankServ Readiness', summary: 'Existing BankServ boundary is documented, with known adaptor divergence and ACK/NCK payout gating gaps to close.', status: 'GAP / NOT READY', owner: 'Financial Architecture', relatedComponent: 'BankServ Boundary', evidenceRefs: ['docs/BILLING_ENGINE_CURRENT_STATE.md', 'docs/BILLING_ENGINE_IMPLEMENTATION_PLAN.md'], sourceType: 'Verified engineering docs', lastVerified: '2026-08-08', sensitivity: 'Internal' },
  { title: 'Reconciliation Scheduling', summary: 'Reconciliation exists as a manual/API-triggered capability; scheduled automation is not currently evidenced.', status: 'PENDING DEPENDENCY', owner: 'Financial Architecture', relatedComponent: 'Reconciliation', evidenceRefs: ['docs/BILLING_ENGINE_CURRENT_STATE.md'], sourceType: 'Verified source-code trace', lastVerified: '2026-08-08', sensitivity: 'Internal' },
  { title: 'Evidence Library Population', summary: 'Evidence areas are created but artefacts must be reviewed and attached during later phases.', status: 'EVIDENCE PENDING', owner: 'Repository Governance', relatedComponent: 'Evidence Centre', evidenceRefs: ['Evidence Pending'], sourceType: 'Repository seed model', lastVerified: '2026-08-14', sensitivity: 'No Secrets' },
];

export const architectureLayers = [
  { title: 'Business', summary: 'Capabilities, stakeholders, journeys, processes, and operating model.', status: 'DOCUMENTED' as RepositoryStatus },
  { title: 'Experience', summary: 'Consumer, merchant, mobile, USSD, and sponsor-facing access paths.', status: 'EVIDENCE PENDING' as RepositoryStatus },
  { title: 'Application', summary: 'Marketplace, merchant portal, payment, voucher, billing, ledger, settlement, and analytics.', status: 'DOCUMENTED' as RepositoryStatus },
  { title: 'Financial', summary: 'Payment, billing, ledger, payout, invoice, settlement, BankServ, and reconciliation.', status: 'DOCUMENTED' as RepositoryStatus },
  { title: 'Data', summary: 'Entities, database ownership, event records, reporting, audit, and reconciliation data.', status: 'EVIDENCE PENDING' as RepositoryStatus },
  { title: 'Integration', summary: 'Payment providers, BankServ, APIs, events, webhooks, and external dependencies.', status: 'CONTROLLED MOCK / SANDBOX' as RepositoryStatus },
  { title: 'Security', summary: 'Authentication, authorization, secrets, encryption, audit, and DevSecOps controls.', status: 'EVIDENCE PENDING' as RepositoryStatus },
  { title: 'Infrastructure', summary: 'GitHub, Vercel, Supabase, CI/CD, environments, monitoring, and deployment.', status: 'DOCUMENTED' as RepositoryStatus },
  { title: 'Governance', summary: 'ADRs, controls, readiness, evidence quality, and change management.', status: 'EVIDENCE PENDING' as RepositoryStatus },
];

const evidencePending: RepositoryRecord = {
  title: 'Evidence Pending',
  summary: 'This repository area is defined and ready to receive reviewed artefacts in a later phase.',
  status: 'EVIDENCE PENDING',
  owner: 'Repository Governance',
  relatedComponent: 'Enterprise Repository',
  evidenceRefs: ['Evidence Pending'],
  sourceType: 'Repository seed model',
  lastVerified: '2026-08-14',
  sensitivity: 'No Secrets',
};

export const sectionContent: Record<string, SectionContent> = {
  executive: {
    title: 'Executive Overview',
    eyebrow: 'Sponsor-ready repository view',
    summary: 'A business-first view of what eVoucher is, how value moves, what is documented, and what still needs evidence or approval.',
    route: '/executive',
    icon: BriefcaseBusiness,
    records: [
      { title: 'Platform Purpose', summary: 'eVoucher is represented as a consumer, merchant, payment, voucher, billing, ledger, payout, settlement, reconciliation, and analytics ecosystem.', status: 'DOCUMENTED', owner: 'Repository Governance', relatedComponent: 'Enterprise Repository', evidenceRefs: ['Repository seed model'], sourceType: 'Phase 1 information architecture', lastVerified: '2026-08-14', sensitivity: 'Public Architecture' },
      { title: 'Sponsor Narrative', summary: 'Sponsor View focuses on business value, movement of value, evidence, controlled mocks, dependencies, and outstanding readiness gaps.', status: 'DOCUMENTED', owner: 'Business Architecture', relatedComponent: 'Sponsor View', evidenceRefs: ['Evidence Pending'], sourceType: 'Repository seed model', lastVerified: '2026-08-14', sensitivity: 'No Secrets' },
      ...controlledMocks.slice(0, 2),
    ],
  },
  business: {
    title: 'Business Architecture',
    eyebrow: 'Capabilities and operating model',
    summary: 'Business capabilities, model, user journeys, and business processes before source-code detail.',
    route: '/business',
    icon: Building2,
    records: [
      { title: 'Business Capabilities', summary: 'Consumer access, merchant participation, voucher commerce, financial processing, and evidence-led governance.', status: 'DOCUMENTED', owner: 'Business Architecture', relatedComponent: 'Business Capability Map', evidenceRefs: ['Evidence Pending'], sourceType: 'Repository seed model', lastVerified: '2026-08-14', sensitivity: 'Public Architecture' },
      { title: 'User Journeys', summary: 'Consumer, merchant, sponsor, architect, developer, auditor, and operator journeys are first-class repository views.', status: 'EVIDENCE PENDING', owner: 'Business Architecture', relatedComponent: 'User Journeys', evidenceRefs: ['Evidence Pending'], sourceType: 'Repository seed model', lastVerified: '2026-08-14', sensitivity: 'Internal' },
      evidencePending,
    ],
  },
  platform: {
    title: 'Platform Architecture',
    eyebrow: 'Application ecosystem',
    summary: 'The component map for consumer, marketplace, payment, voucher, billing, ledger, payout, settlement, reconciliation, analytics, mobile, USSD, and infrastructure.',
    route: '/platform',
    icon: Boxes,
    records: platformComponents,
  },
  financial: {
    title: 'Financial Architecture',
    eyebrow: 'Value movement and controls',
    summary: 'Payment, billing, ledger, payout, invoice, settlement, BankServ boundary, and reconciliation traceability.',
    route: '/financial',
    icon: Banknote,
    records: financialLifecycle,
  },
  integration: {
    title: 'Integration Architecture',
    eyebrow: 'Boundaries and external dependencies',
    summary: 'External systems, payment boundaries, BankServ boundary, API integrations, webhooks, and event flows.',
    route: '/integration',
    icon: Network,
    records: [
      { title: 'Payment Provider Boundary', summary: 'Provider-specific details remain behind a controlled boundary until external approval and credentials exist.', status: 'CONTROLLED MOCK / SANDBOX', owner: 'Integration Architecture', relatedComponent: 'Payment Boundary', evidenceRefs: ['Evidence Pending'], sourceType: 'Repository seed model', lastVerified: '2026-08-14', sensitivity: 'Restricted' },
      { title: 'BankServ Boundary', summary: 'BankServ-related implementation requires clear distinction between design, implemented boundary, and readiness gaps.', status: 'GAP / NOT READY', owner: 'Integration Architecture', relatedComponent: 'BankServ Boundary', evidenceRefs: ['docs/BILLING_ENGINE_CURRENT_STATE.md'], sourceType: 'Verified engineering docs', lastVerified: '2026-08-08', sensitivity: 'Internal' },
      { title: 'Event Flows', summary: 'Platform events and outbox patterns are candidate evidence areas for later capture.', status: 'DOCUMENTED', owner: 'Integration Architecture', relatedComponent: 'Event Flows', evidenceRefs: ['docs/BILLING_ENGINE_CURRENT_STATE.md'], sourceType: 'Verified source-code trace', lastVerified: '2026-08-08', sensitivity: 'Internal' },
    ],
  },
  data: {
    title: 'Data Architecture',
    eyebrow: 'Entities and movement',
    summary: 'Data model, entities, database architecture, data flows, reporting, audit, and reconciliation information.',
    route: '/data',
    icon: Database,
    records: [
      { title: 'Core Financial Entities', summary: 'Platform events, billing events, ledger entries, payouts, settlements, invoices, audit events, and reconciliation runs are candidate evidence records.', status: 'DOCUMENTED', owner: 'Data Architecture', relatedComponent: 'Financial Data Model', evidenceRefs: ['docs/BILLING_ENGINE_CURRENT_STATE.md'], sourceType: 'Verified engineering docs', lastVerified: '2026-08-08', sensitivity: 'Internal' },
      { title: 'Data Dictionary', summary: 'Detailed field-level documentation is reserved for a later evidence/content phase.', status: 'EVIDENCE PENDING', owner: 'Data Architecture', relatedComponent: 'Data Dictionary', evidenceRefs: ['Evidence Pending'], sourceType: 'Repository seed model', lastVerified: '2026-08-14', sensitivity: 'Internal' },
      evidencePending,
    ],
  },
  security: {
    title: 'Security & DevSecOps',
    eyebrow: 'Controls and boundaries',
    summary: 'Authentication, authorization, secrets, audit, CI/CD, security controls, and privacy boundaries.',
    route: '/security',
    icon: ShieldCheck,
    records: [
      { title: 'Secrets Boundary', summary: 'The repository must never expose Supabase keys, service-role keys, webhook secrets, banking data, customer PII, or production transaction data.', status: 'DOCUMENTED', owner: 'Security Architecture', relatedComponent: 'Secrets Boundary', evidenceRefs: ['Repository governance rule'], sourceType: 'Phase 1 information architecture', lastVerified: '2026-08-14', sensitivity: 'Restricted' },
      { title: 'Authentication and Authorization', summary: 'Authentication and authorization evidence must be captured from reviewed architecture artefacts, not inferred.', status: 'EVIDENCE PENDING', owner: 'Security Architecture', relatedComponent: 'Identity and Access', evidenceRefs: ['Evidence Pending'], sourceType: 'Repository seed model', lastVerified: '2026-08-14', sensitivity: 'Internal' },
      { title: 'CI/CD Controls', summary: 'GitHub Actions and Vercel deployment evidence are separate evidence types to capture later.', status: 'EVIDENCE PENDING', owner: 'DevSecOps', relatedComponent: 'CI/CD', evidenceRefs: ['Evidence Pending'], sourceType: 'Repository seed model', lastVerified: '2026-08-14', sensitivity: 'Internal' },
    ],
  },
  infrastructure: {
    title: 'Infrastructure',
    eyebrow: 'Cloud and deployment boundaries',
    summary: 'Cloud architecture, Vercel, GitHub, CI/CD, environment boundaries, and production/sandbox separation.',
    route: '/infrastructure',
    icon: Cloud,
    records: [
      { title: 'Vercel Boundary', summary: 'The Enterprise Repository is intended to deploy independently from the production eVoucher platform.', status: 'DOCUMENTED', owner: 'Infrastructure Architecture', relatedComponent: 'Vercel', evidenceRefs: ['Repository prompt'], sourceType: 'Phase 1 information architecture', lastVerified: '2026-08-14', sensitivity: 'No Secrets' },
      { title: 'GitHub Repository', summary: 'Dedicated repository target is github.com/shelod-eng/evoucher-digital-platform-repository.', status: 'DOCUMENTED', owner: 'Repository Governance', relatedComponent: 'GitHub', evidenceRefs: ['Repository prompt'], sourceType: 'Phase 1 information architecture', lastVerified: '2026-08-14', sensitivity: 'No Secrets' },
      { title: 'Environment Boundaries', summary: 'Production, sandbox, and repository environments must remain clearly separated.', status: 'DOCUMENTED', owner: 'Infrastructure Architecture', relatedComponent: 'Environment Boundaries', evidenceRefs: ['Repository governance rule'], sourceType: 'Phase 1 information architecture', lastVerified: '2026-08-14', sensitivity: 'Restricted' },
    ],
  },
  testing: {
    title: 'Testing & QA',
    eyebrow: 'Validation and acceptance',
    summary: 'Test strategy, E2E testing, controlled sandbox, acceptance testing, and evidence capture.',
    route: '/testing',
    icon: TestTube2,
    records: [
      { title: 'Controlled Sandbox Testing', summary: 'Sandbox scenarios are allowed only when labelled as controlled mock or sandbox boundaries.', status: 'CONTROLLED MOCK / SANDBOX', owner: 'Testing & QA', relatedComponent: 'Controlled Sandbox', evidenceRefs: ['Evidence Pending'], sourceType: 'Repository seed model', lastVerified: '2026-08-14', sensitivity: 'Internal' },
      { title: 'Acceptance Testing', summary: 'Sponsor and architect acceptance criteria are defined for Command Centre navigation and view switching.', status: 'DOCUMENTED', owner: 'Testing & QA', relatedComponent: 'Acceptance Testing', evidenceRefs: ['Repository prompt'], sourceType: 'Phase 2 scope', lastVerified: '2026-08-14', sensitivity: 'No Secrets' },
      evidencePending,
    ],
  },
  adrs: {
    title: 'Architecture Decision Records',
    eyebrow: 'Decision memory',
    summary: 'ADR index and architecture decisions for repository separation, controlled mocks, lifecycle traceability, and evidence boundaries.',
    route: '/adrs',
    icon: GitBranch,
    records: [
      { title: 'ADR Index', summary: 'ADR structure exists; final decisions must be reviewed before being presented as approved records.', status: 'EVIDENCE PENDING', owner: 'Architecture Governance', relatedComponent: 'ADRs', evidenceRefs: ['Evidence Pending'], sourceType: 'Repository seed model', lastVerified: '2026-08-14', sensitivity: 'Internal' },
      { title: 'Enterprise Repository Separation', summary: 'The Enterprise Repository remains separate from production eVoucher and the Billing Engine.', status: 'DOCUMENTED', owner: 'Architecture Governance', relatedComponent: 'Repository Boundary', evidenceRefs: ['Repository prompt'], sourceType: 'Phase 1 information architecture', lastVerified: '2026-08-14', sensitivity: 'No Secrets' },
      evidencePending,
    ],
  },
  evidence: {
    title: 'Evidence Centre',
    eyebrow: 'Proof before claims',
    summary: 'Architecture diagrams, source-code evidence, API evidence, database evidence, test evidence, deployment evidence, screenshots, and security evidence.',
    route: '/evidence',
    icon: Archive,
    records: [
      { title: 'Source-Code Evidence', summary: 'Reviewed source traces can be registered here after sanitisation and approval.', status: 'EVIDENCE PENDING', owner: 'Evidence Governance', relatedComponent: 'Source Evidence', evidenceRefs: ['Evidence Pending'], sourceType: 'Repository seed model', lastVerified: '2026-08-14', sensitivity: 'Internal' },
      { title: 'Deployment Evidence', summary: 'GitHub Actions, Vercel deployments, and release evidence will be captured in later phases.', status: 'EVIDENCE PENDING', owner: 'DevSecOps', relatedComponent: 'Deployment History', evidenceRefs: ['Evidence Pending'], sourceType: 'Repository seed model', lastVerified: '2026-08-14', sensitivity: 'No Secrets' },
      { title: 'Security Evidence', summary: 'Security evidence must be curated without exposing secrets, credentials, PII, or provider data.', status: 'EVIDENCE PENDING', owner: 'Security Architecture', relatedComponent: 'Security Evidence', evidenceRefs: ['Evidence Pending'], sourceType: 'Repository seed model', lastVerified: '2026-08-14', sensitivity: 'Restricted' },
    ],
  },
  mocks: {
    title: 'Controlled Mocks & Known Gaps',
    eyebrow: 'Transparent readiness model',
    summary: 'Controlled mocks, sandbox boundaries, pending dependencies, known gaps, and readiness status.',
    route: '/mocks',
    icon: ClipboardCheck,
    records: controlledMocks,
  },
};

export const commandCards = [
  { title: 'Platform Overview', href: '/platform', summary: 'The eVoucher ecosystem from consumer access to analytics and repository governance.', icon: Route, status: 'DOCUMENTED' as RepositoryStatus },
  { title: 'Business Architecture', href: '/business', summary: 'Capabilities, operating model, journeys, and stakeholder context.', icon: BriefcaseBusiness, status: 'DOCUMENTED' as RepositoryStatus },
  { title: 'Platform Architecture', href: '/platform', summary: 'Consumer to merchant to payment to voucher to billing to ledger to settlement.', icon: Layers3, status: 'DOCUMENTED' as RepositoryStatus },
  { title: 'Financial Lifecycle', href: '/financial', summary: 'Payment, billing, ledger, payout, invoice, settlement, and reconciliation controls.', icon: Landmark, status: 'DOCUMENTED' as RepositoryStatus },
  { title: 'Integration Boundaries', href: '/integration', summary: 'Provider boundaries, BankServ, APIs, webhooks, events, and dependencies.', icon: Network, status: 'CONTROLLED MOCK / SANDBOX' as RepositoryStatus },
  { title: 'Data & Evidence', href: '/evidence', summary: 'Evidence-first model for architecture, code, API, database, test, and deployment proof.', icon: FileText, status: 'EVIDENCE PENDING' as RepositoryStatus },
  { title: 'Security & DevSecOps', href: '/security', summary: 'Identity, authorization, secrets, audit, CI/CD, and security controls.', icon: LockKeyhole, status: 'EVIDENCE PENDING' as RepositoryStatus },
  { title: 'Infrastructure', href: '/infrastructure', summary: 'GitHub, Vercel, CI/CD, cloud, environments, and production/sandbox boundaries.', icon: Cloud, status: 'DOCUMENTED' as RepositoryStatus },
  { title: 'Controlled Mocks & Known Gaps', href: '/mocks', summary: 'Transparent sandbox boundaries, pending dependencies, and readiness gaps.', icon: BadgeCheck, status: 'GAP / NOT READY' as RepositoryStatus },
];

export const sponsorQuestions = [
  'What is eVoucher?',
  'What has been built?',
  'How does the platform create value?',
  'How does value move?',
  'What evidence exists?',
  'What remains outstanding?',
  'What is controlled, mocked, or externally dependent?',
];

export const architectFocus = [
  'Components',
  'Architecture layers',
  'APIs',
  'Data',
  'Integrations',
  'Infrastructure',
  'Security and DevSecOps',
  'ADRs',
  'Evidence',
  'Known gaps',
];

export const routeDefinitions: RepositoryRecord[] = navigation.map((item) => ({
  title: item.href,
  summary: item.summary,
  status: 'DOCUMENTED',
  owner: 'Repository Governance',
  relatedComponent: item.title,
  evidenceRefs: ['Route implemented in Phase 2'],
  sourceType: 'RouteDefinition',
  lastVerified: '2026-08-14',
  sensitivity: 'No Secrets',
}));

export const apiEndpoints: RepositoryRecord[] = [
  { title: 'Purchase APIs', summary: 'Candidate catalogue area for purchase and voucher APIs. Full endpoint evidence is out of scope for Phase 2.', status: 'EVIDENCE PENDING', owner: 'API Governance', relatedComponent: 'API Catalogue', evidenceRefs: ['Evidence Pending'], sourceType: 'ApiEndpoint', lastVerified: '2026-08-14', sensitivity: 'Internal' },
  { title: 'Billing APIs', summary: 'Candidate catalogue area for billing dashboard, events, ledger, invoices, settlements, and reconciliation APIs.', status: 'EVIDENCE PENDING', owner: 'API Governance', relatedComponent: 'API Catalogue', evidenceRefs: ['Evidence Pending'], sourceType: 'ApiEndpoint', lastVerified: '2026-08-14', sensitivity: 'Internal' },
  { title: 'Settlement APIs', summary: 'Candidate catalogue area for settlement batch, BankServ, ACK/NCK, and approval APIs.', status: 'EVIDENCE PENDING', owner: 'API Governance', relatedComponent: 'API Catalogue', evidenceRefs: ['Evidence Pending'], sourceType: 'ApiEndpoint', lastVerified: '2026-08-14', sensitivity: 'Internal' },
];
