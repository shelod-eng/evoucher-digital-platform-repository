import { KnowledgePage } from '@/components/KnowledgePage';
import { deploymentEvidence } from '@/data/phase3';

export default function DeploymentHistoryPage() {
  return (
    <KnowledgePage
      eyebrow="Deployment and live-system evidence"
      title="Deployment History"
      summary="Deployment evidence for the production platform, Billing Engine portal, Enterprise Repository, GitHub, Vercel, and cron configuration. URLs prove deployment presence, not feature completeness."
      records={deploymentEvidence}
    />
  );
}
